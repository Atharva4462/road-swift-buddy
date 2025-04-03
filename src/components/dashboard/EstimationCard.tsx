
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calculator, ArrowRight } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { SelectValue, SelectTrigger, SelectContent, SelectItem, Select } from '@/components/ui/select';
import { useNavigate } from 'react-router-dom';

const EstimationCard = () => {
  const navigate = useNavigate();

  const handleEstimate = () => {
    navigate('/toll-calculator');
  };

  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl">Toll Cost Estimation</CardTitle>
          <Calculator className="h-5 w-5 text-primary" />
        </div>
        <CardDescription>Estimate toll charges for your journey</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="space-y-1">
            <Label htmlFor="from">From</Label>
            <Input id="from" placeholder="Enter starting location" />
          </div>
          <div className="space-y-1">
            <Label htmlFor="to">To</Label>
            <Input id="to" placeholder="Enter destination" />
          </div>
          <div className="space-y-1">
            <Label htmlFor="vehicle-type">Vehicle Type</Label>
            <Select>
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
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full" onClick={handleEstimate}>
          Estimate Toll Cost
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default EstimationCard;
