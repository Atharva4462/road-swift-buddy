
import React, { useState } from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { SelectValue, SelectTrigger, SelectContent, SelectItem, Select } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Car, Calculator } from 'lucide-react';
import TollMap from '@/components/maps/TollMap';
import { useToast } from '@/components/ui/use-toast';

const TollCalculator = () => {
  const [fromLocation, setFromLocation] = useState('');
  const [toLocation, setToLocation] = useState('');
  const [vehicleType, setVehicleType] = useState('');
  const [returnJourney, setReturnJourney] = useState(false);
  const [isCalculating, setIsCalculating] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const { toast } = useToast();

  const handleCalculate = () => {
    if (!fromLocation || !toLocation || !vehicleType) {
      toast({
        title: "Missing Information",
        description: "Please fill in all the required fields",
        variant: "destructive",
      });
      return;
    }

    setIsCalculating(true);
    
    // Mock API call - in a real app, this would be an actual API call
    setTimeout(() => {
      setIsCalculating(false);
      setShowResults(true);
      toast({
        title: "Calculation Complete",
        description: "Toll costs have been calculated for your route",
      });
    }, 1500);
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Toll Calculator</h1>
        
        <Tabs defaultValue="route">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="route">Route Based</TabsTrigger>
            <TabsTrigger value="toll">Toll Plaza Based</TabsTrigger>
          </TabsList>
          
          <TabsContent value="route" className="mt-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-xl">Calculate Toll Costs</CardTitle>
                      <CardDescription>Enter your route details</CardDescription>
                    </div>
                    <Calculator className="h-5 w-5 text-primary" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-1">
                      <Label htmlFor="from">From</Label>
                      <Input 
                        id="from" 
                        placeholder="Enter starting location" 
                        value={fromLocation}
                        onChange={(e) => setFromLocation(e.target.value)}
                      />
                    </div>
                    
                    <div className="space-y-1">
                      <Label htmlFor="to">To</Label>
                      <Input 
                        id="to" 
                        placeholder="Enter destination" 
                        value={toLocation}
                        onChange={(e) => setToLocation(e.target.value)}
                      />
                    </div>
                    
                    <div className="space-y-1">
                      <Label htmlFor="vehicle-type">Vehicle Type</Label>
                      <Select value={vehicleType} onValueChange={setVehicleType}>
                        <SelectTrigger id="vehicle-type">
                          <SelectValue placeholder="Select vehicle type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="car">Car / Jeep / Van</SelectItem>
                          <SelectItem value="lcv">Light Commercial Vehicle</SelectItem>
                          <SelectItem value="bus">Bus / Truck</SelectItem>
                          <SelectItem value="heavy">Heavy Vehicle</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="flex items-center space-x-2 pt-2">
                      <input
                        type="checkbox"
                        id="return-journey"
                        checked={returnJourney}
                        onChange={(e) => setReturnJourney(e.target.checked)}
                        className="rounded border-gray-300 text-primary focus:ring-primary"
                      />
                      <Label htmlFor="return-journey" className="text-sm font-normal">
                        Include return journey
                      </Label>
                    </div>

                    {showResults && (
                      <div className="mt-4 bg-muted p-4 rounded-md">
                        <h4 className="font-medium mb-2">Toll Summary</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">One Way Cost:</span>
                            <span>₹435</span>
                          </div>
                          {returnJourney && (
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Return Cost:</span>
                              <span>₹435</span>
                            </div>
                          )}
                          <div className="flex justify-between font-medium pt-2 border-t">
                            <span>Total Toll Cost:</span>
                            <span>₹{returnJourney ? '870' : '435'}</span>
                          </div>
                          <div className="flex justify-between text-xs text-muted-foreground">
                            <span>Fuel Cost (Estimated):</span>
                            <span>₹1,225</span>
                          </div>
                          <div className="flex justify-between text-xs text-muted-foreground">
                            <span>Total Distance:</span>
                            <span>245 km</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button 
                    className="w-full" 
                    onClick={handleCalculate}
                    disabled={isCalculating}
                  >
                    {isCalculating ? 'Calculating...' : 'Calculate Toll Cost'}
                  </Button>
                </CardFooter>
              </Card>
              
              <TollMap />
            </div>
          </TabsContent>
          
          <TabsContent value="toll" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Toll Plaza Search</CardTitle>
                <CardDescription>
                  Find toll plazas and view their rates directly
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-1">
                  <Label htmlFor="toll-search">Search by Toll Plaza Name or Location</Label>
                  <Input id="toll-search" placeholder="Enter toll plaza name or location" />
                </div>
                
                <div className="space-y-1">
                  <Label htmlFor="toll-vehicle-type">Vehicle Type</Label>
                  <Select>
                    <SelectTrigger id="toll-vehicle-type">
                      <SelectValue placeholder="Select vehicle type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="car">Car / Jeep / Van</SelectItem>
                      <SelectItem value="lcv">Light Commercial Vehicle</SelectItem>
                      <SelectItem value="bus">Bus / Truck</SelectItem>
                      <SelectItem value="heavy">Heavy Vehicle</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <Button className="w-full">Search Toll Plaza</Button>
                
                <div className="text-center py-8">
                  <Car className="mx-auto h-10 w-10 text-muted-foreground mb-3" />
                  <h3 className="text-lg font-medium">No toll plazas found</h3>
                  <p className="text-muted-foreground">
                    Search for a toll plaza to see its details and rates
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default TollCalculator;
