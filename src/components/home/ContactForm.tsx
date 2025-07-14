
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { useTranslation } from "@/hooks/useTranslation";

const ContactForm = () => {
  const { toast } = useToast();
  const translations = useTranslation('contact');
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRoleChange = (value: string) => {
    setFormData((prev) => ({ ...prev, role: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: translations.form.successTitle,
        description: translations.form.successDescription,
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        role: "",
        message: "",
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1">
            {translations.form.name}
          </label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder={translations.form.namePlaceholder}
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            {translations.form.email}
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder={translations.form.emailPlaceholder}
            required
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium mb-1">
            {translations.form.phone}
          </label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder={translations.form.phonePlaceholder}
          />
        </div>
        <div>
          <label htmlFor="role" className="block text-sm font-medium mb-1">
            {translations.form.role}
          </label>
          <Select value={formData.role} onValueChange={handleRoleChange}>
            <SelectTrigger id="role">
              <SelectValue placeholder={translations.form.rolePlaceholder} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="patient">{translations.form.roleOptions.patient}</SelectItem>
              <SelectItem value="physician">{translations.form.roleOptions.physician}</SelectItem>
              <SelectItem value="healthcare_admin">{translations.form.roleOptions.healthcareAdmin}</SelectItem>
              <SelectItem value="other">{translations.form.roleOptions.other}</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1">
          {translations.form.message}
        </label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder={translations.form.messagePlaceholder}
          rows={4}
          required
        />
      </div>

      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          id="consent"
          className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
          required
        />
        <label htmlFor="consent" className="text-sm text-muted-foreground">
          {translations.form.consent}{' '}
          <a href="/privacy" className="text-primary hover:underline">
            {translations.form.privacyPolicy}
          </a>.
        </label>
      </div>

      <Button 
        type="submit" 
        className="w-full bg-[#1A73E8] hover:bg-[#1557B0]" 
        disabled={isSubmitting}
      >
        {isSubmitting ? translations.form.submitting : translations.form.submit}
      </Button>
    </form>
  );
};

export default ContactForm;
