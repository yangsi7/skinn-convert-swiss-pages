
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Create GTM noscript for tracking when JavaScript is disabled
const gtmNoScript = document.createElement('noscript');
gtmNoScript.innerHTML = `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX" height="0" width="0" style="display:none;visibility:hidden"></iframe>`;
document.body.prepend(gtmNoScript);

createRoot(document.getElementById("root")!).render(<App />);
