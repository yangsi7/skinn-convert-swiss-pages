
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Physicians from "./pages/Physicians";
import NotFound from "./pages/NotFound";
import { AnalyticsProvider } from "./components/analytics/AnalyticsProvider";

const queryClient = new QueryClient();

// Analytics IDs - replace with your actual IDs in production
const GOOGLE_ANALYTICS_ID = "G-XXXXXXXXXX"; 
const GOOGLE_ADS_ID = "AW-XXXXXXXXXX";
const HUBSPOT_ID = "XXXXXXXX";

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AnalyticsProvider
          googleAnalyticsId={GOOGLE_ANALYTICS_ID}
          googleAdsId={GOOGLE_ADS_ID}
          hubspotId={HUBSPOT_ID}
        >
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/physicians" element={<Physicians />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnalyticsProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
