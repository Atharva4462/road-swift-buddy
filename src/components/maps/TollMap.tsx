
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const TollMap = () => {
  return (
    <Card className="h-full">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl">Route Map</CardTitle>
        <CardDescription>Interactive map with toll locations</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col">
        <div className="bg-gray-200 rounded-lg flex-grow min-h-[300px] flex items-center justify-center">
          {/* In a real app, this would be a React map component */}
          <p className="text-muted-foreground">Interactive map would be displayed here</p>
        </div>
        <div className="mt-4 bg-muted p-3 rounded-md">
          <h4 className="font-medium">Route Information</h4>
          <div className="mt-2 space-y-1 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Distance:</span>
              <span>245 km</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Toll Plazas:</span>
              <span>3</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Estimated Time:</span>
              <span>3h 15m</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Total Toll Cost:</span>
              <span className="font-medium">₹435</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TollMap;
