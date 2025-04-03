
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Car, Plus, Pencil, Trash2, CheckCircle2, AlertCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Vehicle {
  id: string;
  name: string;
  registrationNumber: string;
  type: string;
  isActive: boolean;
  tagStatus: 'active' | 'inactive' | 'expired';
  expiryDate?: string;
}

interface VehicleListProps {
  vehicles: Vehicle[];
  onAddVehicle: () => void;
  onEditVehicle: (id: string) => void;
  onDeleteVehicle: (id: string) => void;
}

const VehicleList = ({ vehicles, onAddVehicle, onEditVehicle, onDeleteVehicle }: VehicleListProps) => {
  const getStatusIcon = (status: string) => {
    switch (status) {
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

  const getStatusText = (status: string) => {
    switch (status) {
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

  const getStatusColor = (status: string) => {
    switch (status) {
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
      <CardHeader>
        <div className="flex justify-between items-center">
          <div>
            <CardTitle className="text-xl">My Vehicles</CardTitle>
            <CardDescription>Manage your FASTag linked vehicles</CardDescription>
          </div>
          <Button onClick={onAddVehicle}>
            <Plus className="mr-2 h-4 w-4" />
            Add Vehicle
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        {vehicles.length > 0 ? (
          <div className="space-y-4">
            {vehicles.map((vehicle) => (
              <div key={vehicle.id} className="p-4 border rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center">
                    <Car className="h-5 w-5 text-primary mr-2" />
                    <h3 className="font-medium">{vehicle.name}</h3>
                  </div>
                  <div className="flex space-x-2">
                    <Button 
                      variant="ghost" 
                      size="icon"
                      onClick={() => onEditVehicle(vehicle.id)}
                    >
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="text-red-500"
                      onClick={() => onDeleteVehicle(vehicle.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <p className="text-muted-foreground">Registration Number</p>
                    <p>{vehicle.registrationNumber}</p>
                  </div>
                  
                  <div>
                    <p className="text-muted-foreground">Vehicle Type</p>
                    <p>{vehicle.type}</p>
                  </div>
                  
                  <div>
                    <p className="text-muted-foreground">Tag Status</p>
                    <div className="flex items-center">
                      {getStatusIcon(vehicle.tagStatus)}
                      <span className={cn("ml-1", getStatusColor(vehicle.tagStatus))}>
                        {getStatusText(vehicle.tagStatus)}
                      </span>
                    </div>
                  </div>
                  
                  {vehicle.expiryDate && (
                    <div>
                      <p className="text-muted-foreground">Expiry Date</p>
                      <p>{vehicle.expiryDate}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="py-8 text-center border rounded-lg">
            <Car className="mx-auto h-10 w-10 text-muted-foreground mb-2" />
            <h3 className="text-lg font-medium">No vehicles added</h3>
            <p className="text-muted-foreground mb-4">
              Add your first vehicle to link with your FASTag account
            </p>
            <Button onClick={onAddVehicle}>
              <Plus className="mr-2 h-4 w-4" />
              Add Vehicle
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default VehicleList;
