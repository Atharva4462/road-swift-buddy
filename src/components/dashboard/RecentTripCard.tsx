
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Route, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Trip {
  id: string;
  date: string;
  tollName: string;
  amount: number;
  vehicle: string;
}

interface RecentTripCardProps {
  trips: Trip[];
}

const RecentTripCard = ({ trips }: RecentTripCardProps) => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl">Recent Toll Payments</CardTitle>
          <Route className="h-5 w-5 text-primary" />
        </div>
        <CardDescription>Your recent toll transactions</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {trips.length > 0 ? (
            trips.map((trip) => (
              <div key={trip.id} className="flex justify-between items-center py-2 border-b last:border-0">
                <div>
                  <p className="font-medium">{trip.tollName}</p>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <span>{trip.date}</span>
                    <span>•</span>
                    <span>{trip.vehicle}</span>
                  </div>
                </div>
                <span className="font-medium">₹{trip.amount}</span>
              </div>
            ))
          ) : (
            <p className="text-center text-muted-foreground py-4">No recent trips</p>
          )}
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full">
          View All Trips
          <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default RecentTripCard;
