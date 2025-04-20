
import React from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ParkingPayment = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Parking Payment</h1>
        
        <Card>
          <CardHeader>
            <CardTitle>Find Parking</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Locate and pay for parking at supported locations</p>
            <div className="mt-4">
              <Button>Search Parking Spots</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default ParkingPayment;
