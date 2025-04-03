
import React from 'react';
import { Calculator, Wallet, Car, Route, Shield, CreditCard } from 'lucide-react';
import FeatureCard from './FeatureCard';

const FeaturesSection = () => {
  const features = [
    {
      icon: Calculator,
      title: "Toll Cost Estimation",
      description: "Calculate accurate toll charges for your journey before you travel.",
      variant: "primary"
    },
    {
      icon: Wallet,
      title: "FASTag Management",
      description: "Manage your FASTag balance, recharge online, and receive low balance alerts.",
      variant: "primary"
    },
    {
      icon: Car,
      title: "Multiple Vehicle Support",
      description: "Link multiple vehicles to your account and manage all your FASTags in one place.",
      variant: "primary"
    },
    {
      icon: Route,
      title: "Travel History & Logs",
      description: "Keep track of your travel history, toll payments, and route information.",
      variant: "primary"
    },
    {
      icon: Shield,
      title: "Secure Transactions",
      description: "Bank-grade security for all your FASTag transactions and personal data.",
      variant: "accent"
    },
    {
      icon: CreditCard,
      title: "Easy Recharges",
      description: "Quick and hassle-free FASTag recharges with multiple payment options.",
      variant: "accent"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              variant={feature.variant}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
