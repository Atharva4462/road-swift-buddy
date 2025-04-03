
import React from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import BalanceCard from '@/components/dashboard/BalanceCard';
import VehicleCard from '@/components/dashboard/VehicleCard';
import RecentTripCard from '@/components/dashboard/RecentTripCard';
import EstimationCard from '@/components/dashboard/EstimationCard';
import ActionButtons from '@/components/dashboard/ActionButtons';

const Dashboard = () => {
  // Mock data - in a real app, this would come from an API
  const balance = 1250;
  const lastRecharge = {
    amount: 500,
    date: '15 May 2023'
  };

  const vehicle = {
    id: '1',
    name: 'My Honda City',
    registrationNumber: 'MH 01 AB 1234',
    type: 'Car',
    isActive: true,
    tagStatus: 'active' as const,
    expiryDate: '31 Dec 2023'
  };

  const trips = [
    {
      id: '1',
      date: '20 May 2023',
      tollName: 'Mumbai-Pune Expressway',
      amount: 230,
      vehicle: 'MH 01 AB 1234'
    },
    {
      id: '2',
      date: '18 May 2023',
      tollName: 'Thane Toll Plaza',
      amount: 85,
      vehicle: 'MH 01 AB 1234'
    },
    {
      id: '3',
      date: '15 May 2023',
      tollName: 'Vashi Toll Plaza',
      amount: 35,
      vehicle: 'MH 01 AB 1234'
    }
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Balance and Vehicle cards in the first row */}
          <BalanceCard balance={balance} lastRecharge={lastRecharge} />
          <VehicleCard vehicle={vehicle} />
          <EstimationCard />
        </div>

        {/* Quick Action Buttons */}
        <ActionButtons />
        
        {/* Recent Toll Payments */}
        <RecentTripCard trips={trips} />
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
