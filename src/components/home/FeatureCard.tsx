
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  variant: "primary" | "accent";
}

const FeatureCard = ({ icon: Icon, title, description, variant }: FeatureCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className={`w-12 h-12 ${variant === "primary" ? "bg-primary/10" : "bg-accent/10"} rounded-lg flex items-center justify-center mb-4`}>
        <Icon className={`h-6 w-6 ${variant === "primary" ? "text-primary" : "text-accent"}`} />
      </div>
      <h3 className="font-bold text-xl mb-2">{title}</h3>
      <p className="text-muted-foreground">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;
