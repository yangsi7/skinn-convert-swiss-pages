
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { AnalyticsProvider } from "./components/analytics/AnalyticsProvider";
import { LanguageProvider } from "./contexts/LanguageContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import { RouteRedirects } from "./components/RouteRedirects";
import AppRoutes from "./routes";

const queryClient = new QueryClient();

// Analytics IDs - replace with your actual IDs in production
const GOOGLE_ANALYTICS_ID = "G-XXXXXXXXXX"; 
const GOOGLE_ADS_ID = "AW-XXXXXXXXXX";
const HUBSPOT_ID = "XXXXXXXX";

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <HelmetProvider>
        <ThemeProvider>
          <LanguageProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <AnalyticsProvider
                googleAnalyticsId={GOOGLE_ANALYTICS_ID}
                googleAdsId={GOOGLE_ADS_ID}
                hubspotId={HUBSPOT_ID}
              >
                <RouteRedirects />
                <AppRoutes />
              </AnalyticsProvider>
            </BrowserRouter>
          </LanguageProvider>
        </ThemeProvider>
      </HelmetProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
