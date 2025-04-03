
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PlusCircle, CreditCard, AlertOctagon, AlertTriangle, Car } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ActionButtons = () => {
  const navigate = useNavigate();

  return (
    <Card>
      <CardContent className="p-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <Button
            variant="outline"
            className="flex flex-col h-24 items-center justify-center gap-1 hover:bg-primary/5"
            onClick={() => navigate('/recharge')}
          >
            <CreditCard className="h-5 w-5 text-primary" />
            <span className="text-xs text-center">Recharge FASTag</span>
          </Button>
          
          <Button
            variant="outline"
            className="flex flex-col h-24 items-center justify-center gap-1 hover:bg-primary/5"
            onClick={() => navigate('/vehicles/add')}
          >
            <PlusCircle className="h-5 w-5 text-primary" />
            <span className="text-xs text-center">Add Vehicle</span>
          </Button>
          
          <Button
            variant="outline"
            className="flex flex-col h-24 items-center justify-center gap-1 hover:bg-primary/5"
            onClick={() => navigate('/vehicles')}
          >
            <Car className="h-5 w-5 text-primary" />
            <span className="text-xs text-center">Manage Vehicles</span>
          </Button>
          
          <Button
            variant="outline"
            className="flex flex-col h-24 items-center justify-center gap-1 hover:bg-primary/5"
            onClick={() => navigate('/support')}
          >
            <AlertOctagon className="h-5 w-5 text-primary" />
            <span className="text-xs text-center">Support</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ActionButtons;
