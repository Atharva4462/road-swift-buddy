
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { SelectValue, SelectTrigger, SelectContent, SelectItem, Select } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Search, Calendar, Download, Route, Filter } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface Trip {
  id: string;
  date: string;
  tollName: string;
  amount: number;
  vehicle: string;
  vehicleType: string;
  location: string;
  time: string;
}

interface TripHistoryProps {
  trips: Trip[];
}

const TripHistory = ({ trips }: TripHistoryProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterMonth, setFilterMonth] = useState('all');
  const [filterVehicle, setFilterVehicle] = useState('all');

  // Filter trips based on search query and filters
  const filteredTrips = trips.filter(trip => {
    // Search filter
    const matchesSearch = trip.tollName.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         trip.location.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Month filter
    const matchesMonth = filterMonth === 'all' || trip.date.includes(filterMonth);
    
    // Vehicle filter
    const matchesVehicle = filterVehicle === 'all' || trip.vehicle === filterVehicle;
    
    return matchesSearch && matchesMonth && matchesVehicle;
  });
  
  const uniqueVehicles = Array.from(new Set(trips.map(trip => trip.vehicle)));

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <div>
            <CardTitle className="text-xl">Travel History</CardTitle>
            <CardDescription>View your past toll transactions</CardDescription>
          </div>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Filters */}
          <div className="flex flex-col space-y-3 md:flex-row md:space-y-0 md:space-x-3">
            <div className="relative flex-1">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search toll or location" 
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="flex-shrink-0 w-full md:w-40">
              <Select value={filterMonth} onValueChange={setFilterMonth}>
                <SelectTrigger className="w-full">
                  <Calendar className="mr-2 h-4 w-4" />
                  <SelectValue placeholder="Month" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Months</SelectItem>
                  <SelectItem value="Jan">January</SelectItem>
                  <SelectItem value="Feb">February</SelectItem>
                  <SelectItem value="Mar">March</SelectItem>
                  <SelectItem value="Apr">April</SelectItem>
                  <SelectItem value="May">May</SelectItem>
                  <SelectItem value="Jun">June</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="flex-shrink-0 w-full md:w-40">
              <Select value={filterVehicle} onValueChange={setFilterVehicle}>
                <SelectTrigger className="w-full">
                  <Filter className="mr-2 h-4 w-4" />
                  <SelectValue placeholder="Vehicle" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Vehicles</SelectItem>
                  {uniqueVehicles.map(vehicle => (
                    <SelectItem key={vehicle} value={vehicle}>{vehicle}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Tabs */}
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="all">All Trips</TabsTrigger>
              <TabsTrigger value="recent">Recent</TabsTrigger>
              <TabsTrigger value="highest">Highest Cost</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="mt-4">
              {filteredTrips.length > 0 ? (
                <div className="border rounded-md overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="bg-muted">
                          <th className="text-left p-3 text-sm font-medium text-muted-foreground">Date & Time</th>
                          <th className="text-left p-3 text-sm font-medium text-muted-foreground">Toll Plaza</th>
                          <th className="text-left p-3 text-sm font-medium text-muted-foreground">Vehicle</th>
                          <th className="text-right p-3 text-sm font-medium text-muted-foreground">Amount</th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredTrips.map((trip) => (
                          <tr key={trip.id} className="border-t">
                            <td className="p-3">
                              <div className="font-medium">{trip.date}</div>
                              <div className="text-sm text-muted-foreground">{trip.time}</div>
                            </td>
                            <td className="p-3">
                              <div className="font-medium">{trip.tollName}</div>
                              <div className="text-sm text-muted-foreground">{trip.location}</div>
                            </td>
                            <td className="p-3">
                              <div className="font-medium">{trip.vehicle}</div>
                              <div className="text-sm text-muted-foreground">{trip.vehicleType}</div>
                            </td>
                            <td className="p-3 text-right font-medium">₹{trip.amount}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ) : (
                <div className="text-center py-10 border rounded-md">
                  <Route className="mx-auto h-10 w-10 text-muted-foreground mb-2" />
                  <h3 className="text-lg font-medium">No trips found</h3>
                  <p className="text-muted-foreground">
                    No trips match your current search and filter criteria
                  </p>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="recent" className="mt-4">
              {/* Same table structure as 'all', but with filtered data */}
              <div className="text-center py-10 border rounded-md">
                <Route className="mx-auto h-10 w-10 text-muted-foreground mb-2" />
                <h3 className="text-lg font-medium">Recent trips</h3>
                <p className="text-muted-foreground">
                  This tab would show your most recent trips
                </p>
              </div>
            </TabsContent>
            
            <TabsContent value="highest" className="mt-4">
              {/* Same table structure as 'all', but with filtered data */}
              <div className="text-center py-10 border rounded-md">
                <Route className="mx-auto h-10 w-10 text-muted-foreground mb-2" />
                <h3 className="text-lg font-medium">Highest cost trips</h3>
                <p className="text-muted-foreground">
                  This tab would show your trips sorted by highest toll cost
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </CardContent>
    </Card>
  );
};

export default TripHistory;
