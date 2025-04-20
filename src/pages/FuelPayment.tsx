
import React from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const FuelPayment = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Fuel Payments</h1>
        
        <Card>
          <CardHeader>
            <CardTitle>Nearby Fuel Stations</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Find and pay at partner fuel stations</p>
            <div className="mt-4">
              <Button>Find Nearby Stations</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default FuelPayment;
