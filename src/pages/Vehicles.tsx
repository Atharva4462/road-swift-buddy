
import React from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import VehicleList from '@/components/vehicles/VehicleList';
import { useToast } from '@/components/ui/use-toast';

const Vehicles = () => {
  const { toast } = useToast();

  // Mock data - in a real app, this would come from an API
  const vehicles = [
    {
      id: '1',
      name: 'Honda City',
      registrationNumber: 'MH 01 AB 1234',
      type: 'Car',
      isActive: true,
      tagStatus: 'active' as const,
      expiryDate: '31 Dec 2023'
    },
    {
      id: '2',
      name: 'Hyundai Creta',
      registrationNumber: 'MH 02 CD 5678',
      type: 'SUV',
      isActive: true,
      tagStatus: 'inactive' as const,
      expiryDate: '15 Jun 2023'
    }
  ];

  const handleAddVehicle = () => {
    toast({
      title: "Add Vehicle",
      description: "Vehicle addition functionality would open here",
    });
  };

  const handleEditVehicle = (id: string) => {
    toast({
      title: "Edit Vehicle",
      description: `Editing vehicle with ID ${id}`,
    });
  };

  const handleDeleteVehicle = (id: string) => {
    toast({
      title: "Delete Vehicle",
      description: `Deleting vehicle with ID ${id}`,
      variant: "destructive",
    });
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">My Vehicles</h1>
        
        <VehicleList 
          vehicles={vehicles} 
          onAddVehicle={handleAddVehicle}
          onEditVehicle={handleEditVehicle}
          onDeleteVehicle={handleDeleteVehicle}
        />
      </div>
    </DashboardLayout>
  );
};

export default Vehicles;
