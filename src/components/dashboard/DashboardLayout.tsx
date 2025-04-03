
import React, { ReactNode } from 'react';
import { Bell, User, CreditCard, Car, Route, Calculator, LogOut, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useToast } from '@/components/ui/use-toast';

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { toast } = useToast();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
    { name: 'Toll Calculator', href: '/toll-calculator', icon: Calculator },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Mobile menu button */}
      <div className="lg:hidden fixed top-0 left-0 z-20 p-4">
        <Button variant="outline" size="icon" onClick={toggleMenu}>
          <Menu className="h-5 w-5" />
        </Button>
      </div>

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

      {/* Mobile sidebar */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-10 flex">
          <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={toggleMenu} />
          <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white">
            <div className="flex items-center justify-between h-16 border-b px-4">
              <span className="text-primary font-bold text-xl">RoadSwift</span>
              <Button variant="ghost" size="icon" onClick={toggleMenu}>
                <X className="h-5 w-5" />
              </Button>
            </div>
            <div className="flex-1 h-0 overflow-y-auto">
              <nav className="px-2 py-4 space-y-1">
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
                    onClick={toggleMenu}
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
                  onClick={() => {
                    handleLogout();
                    toggleMenu();
                  }}
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  Logout
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main content */}
      <div className="lg:pl-64 flex flex-col flex-1">
        <header className="flex justify-end items-center px-4 py-2 sm:px-6 lg:px-8 bg-white shadow">
          <div className="flex items-center">
            <Button variant="ghost" size="icon" className="mr-2">
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
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
