
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";
import Vehicles from "./pages/Vehicles";
import TripHistory from "./pages/TripHistory";
import TollCalculator from "./pages/TollCalculator";
import Login from "./pages/Login";
import FuelPayment from "./pages/FuelPayment";
import ParkingPayment from "./pages/ParkingPayment";
import Profile from "./pages/Profile";
import AccountSettings from "./pages/AccountSettings";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/vehicles" element={<Vehicles />} />
          <Route path="/trip-history" element={<TripHistory />} />
          <Route path="/toll-calculator" element={<TollCalculator />} />
          <Route path="/login" element={<Login />} />
          <Route path="/fuel-payment" element={<FuelPayment />} />
          <Route path="/parking" element={<ParkingPayment />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<AccountSettings />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
