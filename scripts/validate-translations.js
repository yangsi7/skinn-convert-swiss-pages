#!/usr/bin/env node

import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const TRANSLATIONS_DIR = path.join(__dirname, '..', 'src', 'translations');
const LANGUAGES = ['en', 'de', 'fr', 'it'];

async function loadTranslationFile(filePath) {
  try {
    const module = await import(filePath);
    return module.default || module;
  } catch (error) {
    console.error(`Error loading ${filePath}:`, error);
    return null;
  }
}

function getKeys(obj, prefix = '') {
  const keys = new Set();
  
  for (const [key, value] of Object.entries(obj)) {
    const fullKey = prefix ? `${prefix}.${key}` : key;
    
    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      const nestedKeys = getKeys(value, fullKey);
      nestedKeys.forEach(k => keys.add(k));
    } else {
      keys.add(fullKey);
    }
  }
  
  return keys;
}

async function validateTranslations() {
  const errors = [];
  const warnings = [];
  
  // Get all translation modules
  const modules = await fs.readdir(TRANSLATIONS_DIR);
  const translationModules = modules.filter(m => fs.statSync(path.join(TRANSLATIONS_DIR, m)).isDirectory());
  
  for (const module of translationModules) {
    console.log(`Validating module: ${module}`);
    
    const moduleKeys = {};
    const modulePath = path.join(TRANSLATIONS_DIR, module);
    
    // Load translations for each language
    for (const lang of LANGUAGES) {
      const filePath = path.join(modulePath, `${lang}.ts`);
      const fileExists = await fs.access(filePath).then(() => true).catch(() => false);
      
      if (!fileExists) {
        warnings.push(`Missing translation file: ${module}/${lang}.ts`);
        continue;
      }
      
      const translations = await loadTranslationFile(filePath);
      if (!translations) {
        errors.push(`Failed to load: ${module}/${lang}.ts`);
        continue;
      }
      
      moduleKeys[lang] = getKeys(translations);
    }
    
    // Compare keys across languages
    const enKeys = moduleKeys.en || new Set();
    
    for (const lang of LANGUAGES.filter(l => l !== 'en')) {
      const langKeys = moduleKeys[lang] || new Set();
      
      // Check for missing keys
      for (const key of enKeys) {
        if (!langKeys.has(key)) {
          warnings.push(`Missing key in ${module}/${lang}.ts: ${key}`);
        }
      }
      
      // Check for extra keys
      for (const key of langKeys) {
        if (!enKeys.has(key)) {
          warnings.push(`Extra key in ${module}/${lang}.ts: ${key}`);
        }
      }
    }
  }
  
  // Check for hardcoded text in components
  const srcDir = path.join(__dirname, '..', 'src');
  const componentFiles = await findFiles(srcDir, /\.(tsx|jsx)$/);
  
  for (const file of componentFiles) {
    const content = await fs.readFile(file, 'utf-8');
    
    // Look for hardcoded text (simple heuristic)
    const hardcodedMatches = content.match(/>[^<]*[A-Za-z]{3,}[^<]*</g);
    if (hardcodedMatches) {
      const filtered = hardcodedMatches.filter(match => {
        const text = match.slice(1, -1).trim();
        // Ignore common React patterns
        return text && 
               !text.match(/^\{.*\}$/) && 
               !text.match(/^(className|id|href|src|alt)=/);
      });
      
      if (filtered.length > 0) {
        warnings.push(`Possible hardcoded text in ${path.relative(srcDir, file)}`);
      }
    }
  }
  
  // Report results
  console.log('\n=== Translation Validation Results ===\n');
  
  if (errors.length > 0) {
    console.error('❌ Errors:');
    errors.forEach(e => console.error(`  - ${e}`));
  }
  
  if (warnings.length > 0) {
    console.warn('\n⚠️  Warnings:');
    warnings.forEach(w => console.warn(`  - ${w}`));
  }
  
  if (errors.length === 0 && warnings.length === 0) {
    console.log('✅ All translations are valid!');
  }
  
  process.exit(errors.length > 0 ? 1 : 0);
}

async function findFiles(dir, pattern) {
  const files = [];
  const entries = await fs.readdir(dir, { withFileTypes: true });
  
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    
    if (entry.isDirectory() && !entry.name.startsWith('.') && entry.name !== 'node_modules') {
      files.push(...await findFiles(fullPath, pattern));
    } else if (entry.isFile() && pattern.test(entry.name)) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Run validation
validateTranslations().catch(console.error);