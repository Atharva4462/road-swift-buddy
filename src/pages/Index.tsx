
import React from 'react';
import Navbar from '@/components/Navbar';
import HomeFeatures from '@/components/home/HomeFeatures';
import { Button } from '@/components/ui/button';
import { Car, CreditCard, Wallet, CarFront } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const quickActions = [
    {
      icon: CarFront,
      title: "Pay for Fuel",
      description: "Quick fuel payments at partner stations",
      route: "/fuel-payment"
    },
    {
      icon: Car,
      title: "Parking Payment",
      description: "Pay parking fees at supported locations",
      route: "/parking"
    },
    {
      icon: Wallet,
      title: "FASTag Balance",
      description: "Check and recharge your balance",
      route: "/dashboard"
    },
    {
      icon: CreditCard,
      title: "Recent Transactions",
      description: "View your payment history",
      route: "/trip-history"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="container px-4 py-6 space-y-6">
        {/* Welcome Section */}
        <section className="text-center space-y-3 py-4">
          <h1 className="text-2xl font-bold text-primary">Welcome to RoadSwift</h1>
          <p className="text-muted-foreground">Manage your FASTag, fuel, and parking payments in one place</p>
        </section>

        {/* Quick Actions Grid */}
        <section className="grid grid-cols-2 gap-4">
          {quickActions.map((action, index) => (
            <Link 
              key={index} 
              to={action.route}
              className="p-4 bg-white rounded-lg shadow-sm border hover:border-primary transition-colors"
            >
              <div className="flex flex-col items-center text-center space-y-2">
                <action.icon className="h-6 w-6 text-primary" />
                <h3 className="font-medium">{action.title}</h3>
                <p className="text-xs text-muted-foreground">{action.description}</p>
              </div>
            </Link>
          ))}
        </section>

        {/* Features Overview */}
        <HomeFeatures />

        {/* Get Started Button */}
        <section className="text-center py-4">
          <Button asChild size="lg" className="w-full sm:w-auto">
            <Link to="/dashboard">Get Started</Link>
          </Button>
        </section>
      </main>
    </div>
  );
};

export default Index;
