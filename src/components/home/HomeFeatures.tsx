
import React from 'react';
import { Card } from '@/components/ui/card';
import { Car, CreditCard, Wallet } from 'lucide-react';

const HomeFeatures = () => {
  const features = [
    {
      icon: CreditCard,
      title: "Fuel Payments",
      description: "Pay directly at partner fuel stations"
    },
    {
      icon: Car,
      title: "Parking Solutions",
      description: "Seamless parking fee payments"
    },
    {
      icon: Wallet,
      title: "FASTag Management",
      description: "Handle all your FASTag needs"
    }
  ];

  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold text-center">Key Features</h2>
      <div className="space-y-3">
        {features.map((feature, index) => (
          <Card key={index} className="p-4">
            <div className="flex items-center space-x-4">
              <div className="bg-primary/10 p-2 rounded-full">
                <feature.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default HomeFeatures;
