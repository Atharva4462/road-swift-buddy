
import React from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import TripHistoryComponent from '@/components/trips/TripHistory';

const TripHistory = () => {
  // Mock data - in a real app, this would come from an API
  const trips = [
    {
      id: '1',
      date: '20 May 2023',
      tollName: 'Mumbai-Pune Expressway',
      amount: 230,
      vehicle: 'Honda City',
      vehicleType: 'Car',
      location: 'Khalapur, Maharashtra',
      time: '14:30'
    },
    {
      id: '2',
      date: '18 May 2023',
      tollName: 'Thane Toll Plaza',
      amount: 85,
      vehicle: 'Honda City',
      vehicleType: 'Car',
      location: 'Thane, Maharashtra',
      time: '10:15'
    },
    {
      id: '3',
      date: '15 May 2023',
      tollName: 'Vashi Toll Plaza',
      amount: 35,
      vehicle: 'Honda City',
      vehicleType: 'Car',
      location: 'Vashi, Navi Mumbai',
      time: '18:45'
    },
    {
      id: '4',
      date: '10 Apr 2023',
      tollName: 'Airoli Toll Plaza',
      amount: 35,
      vehicle: 'Hyundai Creta',
      vehicleType: 'SUV',
      location: 'Airoli, Navi Mumbai',
      time: '09:20'
    },
    {
      id: '5',
      date: '05 Apr 2023',
      tollName: 'Mumbai-Ahmedabad Highway',
      amount: 95,
      vehicle: 'Hyundai Creta',
      vehicleType: 'SUV',
      location: 'Vasai, Maharashtra',
      time: '11:05'
    }
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Travel History</h1>
        
        <TripHistoryComponent trips={trips} />
      </div>
    </DashboardLayout>
  );
};

export default TripHistory;
