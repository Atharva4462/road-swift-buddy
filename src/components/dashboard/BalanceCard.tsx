
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowUpRight, CreditCard, AlertTriangle } from 'lucide-react';

interface BalanceCardProps {
  balance: number;
  lastRecharge?: {
    amount: number;
    date: string;
  };
}

const BalanceCard = ({ balance, lastRecharge }: BalanceCardProps) => {
  const isLowBalance = balance < 500;

  return (
    <Card className={isLowBalance ? 'border-red-200' : ''}>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl">FASTag Balance</CardTitle>
          <CreditCard className="h-5 w-5 text-primary" />
        </div>
        <CardDescription>Your current FASTag balance</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-baseline">
          <span className="text-3xl font-bold">₹{balance.toLocaleString()}</span>
        </div>
        
        {isLowBalance && (
          <div className="mt-3 flex items-center text-red-500 text-sm">
            <AlertTriangle className="h-4 w-4 mr-1" />
            Low balance. Recharge soon.
          </div>
        )}

        {lastRecharge && (
          <div className="mt-4">
            <p className="text-sm text-muted-foreground">
              Last recharge: ₹{lastRecharge.amount} on {lastRecharge.date}
            </p>
          </div>
        )}
      </CardContent>
      <CardFooter>
        <Button className="w-full">
          Recharge Now
          <ArrowUpRight className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default BalanceCard;
