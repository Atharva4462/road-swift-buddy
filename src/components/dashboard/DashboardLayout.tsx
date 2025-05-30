
import React, { ReactNode } from 'react';
import { Bell, User, CreditCard, Car, Route, Calculator, LogOut, Settings } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useToast } from '@/components/ui/use-toast';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const location = useLocation();
  const { toast } = useToast();

  const handleLogout = () => {
    toast({
      title: "Logged out",
      description: "You have been successfully logged out.",
    });
    // In a real app, this would clear auth tokens and redirect to login
  };

  const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: CreditCard },
    { name: 'Vehicles', href: '/vehicles', icon: Car },
    { name: 'Trip History', href: '/trip-history', icon: Route },
    { name: 'Toll Estimator', href: '/toll-calculator', icon: Calculator },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar for desktop */}
      <div className="hidden lg:flex lg:flex-col lg:w-64 lg:fixed lg:inset-y-0 border-r bg-white">
        <div className="flex items-center justify-center h-16 border-b">
          <span className="text-primary font-bold text-xl">RoadSwift</span>
        </div>
        <div className="flex flex-col flex-grow pt-5 overflow-y-auto">
          <nav className="flex-1 px-2 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  location.pathname === item.href
                    ? 'bg-gray-100 text-primary'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-primary',
                  'group flex items-center px-3 py-3 text-sm font-medium rounded-md'
                )}
              >
                <item.icon className={cn(
                  location.pathname === item.href
                    ? 'text-primary'
                    : 'text-gray-400 group-hover:text-primary',
                  'mr-3 flex-shrink-0 h-5 w-5'
                )} />
                {item.name}
              </Link>
            ))}
          </nav>
          <div className="p-4 mt-auto border-t">
            <Button
              variant="ghost"
              className="w-full justify-start text-red-500 hover:text-red-700 hover:bg-red-50"
              onClick={handleLogout}
            >
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="lg:pl-64 flex flex-col flex-1">
        <header className="flex justify-end items-center px-4 py-2 sm:px-6 lg:px-8 bg-white shadow">
          <div className="flex items-center">
            <Button variant="ghost" size="icon" className="mr-2">
              <Bell className="h-5 w-5" />
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className="bg-primary text-white">JS</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>
                  <div className="flex flex-col">
                    <span>John Smith</span>
                    <span className="text-xs text-gray-500">john.smith@example.com</span>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link to="/profile" className="cursor-pointer w-full">
                    <User className="mr-2 h-4 w-4" />
                    My Profile
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/settings" className="cursor-pointer w-full">
                    <Settings className="mr-2 h-4 w-4" />
                    Account Settings
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/payments" className="cursor-pointer w-full">
                    <CreditCard className="mr-2 h-4 w-4" />
                    Payment Methods
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem 
                  className="text-red-500 cursor-pointer"
                  onClick={handleLogout}
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  Log Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        <main className="flex-1 overflow-auto p-4 sm:p-6 lg:p-8 bg-gray-100">
          {children}
        </main>

        {/* Mobile Footer Navigation */}
        <footer className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg z-10">
          <div className="grid grid-cols-4 h-16">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "flex flex-col items-center justify-center px-2 py-1.5",
                  location.pathname === item.href
                    ? "text-primary"
                    : "text-gray-600"
                )}
              >
                <item.icon className={cn(
                  "h-5 w-5",
                  location.pathname === item.href ? "text-primary" : "text-gray-400"
                )} />
                <span className="text-xs mt-1">{item.name}</span>
              </Link>
            ))}
          </div>
        </footer>
        
        {/* Add padding to the bottom on mobile for the footer space */}
        <div className="h-16 lg:hidden"></div>
      </div>
    </div>
  );
};

export default DashboardLayout;
