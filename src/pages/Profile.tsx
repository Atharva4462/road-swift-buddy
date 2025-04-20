
import React from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Car, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';
import VehicleList from '@/components/vehicles/VehicleList';

const Profile = () => {
  // Mock data - in a real app, this would come from your backend
  const userProfile = {
    name: 'John Smith',
    email: 'john.smith@example.com',
    vehicles: [
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
    ]
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Profile Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-4">
              <Avatar className="h-20 w-20">
                <AvatarFallback className="text-2xl">{userProfile.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <h2 className="text-xl font-semibold">{userProfile.name}</h2>
                <p className="text-muted-foreground">{userProfile.email}</p>
              </div>
            </div>
            <Button asChild variant="outline">
              <Link to="/settings" className="flex items-center">
                <Settings className="mr-2 h-4 w-4" />
                Account Settings
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Car className="h-5 w-5" />
              My Vehicles
            </CardTitle>
          </CardHeader>
          <CardContent>
            <VehicleList 
              vehicles={userProfile.vehicles}
              onAddVehicle={() => {}}
              onEditVehicle={() => {}}
              onDeleteVehicle={() => {}}
            />
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Profile;
