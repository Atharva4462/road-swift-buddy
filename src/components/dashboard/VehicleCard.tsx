
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Car, CheckCircle2, AlertCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface VehicleCardProps {
  vehicle: {
    id: string;
    name: string;
    registrationNumber: string;
    type: string;
    isActive: boolean;
    tagStatus: 'active' | 'inactive' | 'expired';
    expiryDate?: string;
  };
}

const VehicleCard = ({ vehicle }: VehicleCardProps) => {
  const getStatusIcon = () => {
    switch (vehicle.tagStatus) {
      case 'active':
        return <CheckCircle2 className="h-4 w-4 text-green-500" />;
      case 'inactive':
        return <AlertCircle className="h-4 w-4 text-amber-500" />;
      case 'expired':
        return <AlertCircle className="h-4 w-4 text-red-500" />;
      default:
        return null;
    }
  };

  const getStatusText = () => {
    switch (vehicle.tagStatus) {
      case 'active':
        return 'Active';
      case 'inactive':
        return 'Inactive';
      case 'expired':
        return 'Expired';
      default:
        return '';
    }
  };

  const getStatusColor = () => {
    switch (vehicle.tagStatus) {
      case 'active':
        return 'text-green-500';
      case 'inactive':
        return 'text-amber-500';
      case 'expired':
        return 'text-red-500';
      default:
        return '';
    }
  };

  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl">{vehicle.name}</CardTitle>
          <Car className="h-5 w-5 text-primary" />
        </div>
        <CardDescription>{vehicle.registrationNumber}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-2">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Vehicle Type</span>
            <span>{vehicle.type}</span>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Tag Status</span>
            <div className="flex items-center">
              {getStatusIcon()}
              <span className={cn("ml-1", getStatusColor())}>
                {getStatusText()}
              </span>
            </div>
          </div>

          {vehicle.expiryDate && (
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Expiry Date</span>
              <span>{vehicle.expiryDate}</span>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full">
          Manage Vehicle
        </Button>
      </CardFooter>
    </Card>
  );
};

export default VehicleCard;
