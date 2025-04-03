
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import { ArrowRight, CreditCard, Car, Route, Calculator, Shield, Wallet } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/90 to-primary py-16 text-white">
        <div className="container px-4 flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Simplify Your Road Travel with RoadSwift
            </h1>
            <p className="text-lg mb-8 text-white/90">
              Manage your FASTag, estimate toll costs, and track your journeys with our all-in-one road travel companion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                <Link to="/dashboard">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                <Link to="/toll-calculator">
                  Calculate Toll
                </Link>
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="bg-white rounded-xl shadow-xl p-6 transform rotate-3 mb-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                    <CreditCard className="h-5 w-5 text-white" />
                  </div>
                  <div className="ml-4">
                    <div className="h-2.5 bg-gray-200 rounded-full w-48 mb-2"></div>
                    <div className="h-2 bg-gray-200 rounded-full w-20"></div>
                  </div>
                </div>
                <div className="h-12 bg-gray-100 rounded-lg w-full mt-4"></div>
              </div>
              <div className="bg-white rounded-xl shadow-xl p-6 absolute top-10 -right-4 transform -rotate-6">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                    <Route className="h-5 w-5 text-white" />
                  </div>
                  <div className="ml-4">
                    <div className="h-2.5 bg-gray-200 rounded-full w-48 mb-2"></div>
                    <div className="h-2 bg-gray-200 rounded-full w-20"></div>
                  </div>
                </div>
                <div className="h-12 bg-gray-100 rounded-lg w-full mt-4"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Calculator className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold text-xl mb-2">Toll Cost Estimation</h3>
              <p className="text-muted-foreground">
                Calculate accurate toll charges for your journey before you travel.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Wallet className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold text-xl mb-2">FASTag Management</h3>
              <p className="text-muted-foreground">
                Manage your FASTag balance, recharge online, and receive low balance alerts.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Car className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold text-xl mb-2">Multiple Vehicle Support</h3>
              <p className="text-muted-foreground">
                Link multiple vehicles to your account and manage all your FASTags in one place.
              </p>
            </div>
            
            {/* Feature 4 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Route className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold text-xl mb-2">Travel History & Logs</h3>
              <p className="text-muted-foreground">
                Keep track of your travel history, toll payments, and route information.
              </p>
            </div>
            
            {/* Feature 5 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-bold text-xl mb-2">Secure Transactions</h3>
              <p className="text-muted-foreground">
                Bank-grade security for all your FASTag transactions and personal data.
              </p>
            </div>
            
            {/* Feature 6 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <CreditCard className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-bold text-xl mb-2">Easy Recharges</h3>
              <p className="text-muted-foreground">
                Quick and hassle-free FASTag recharges with multiple payment options.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary/5">
        <div className="container px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Simplify Your Road Travel?</h2>
          <p className="text-lg mb-8 text-muted-foreground max-w-2xl mx-auto">
            Join thousands of users who are already enjoying seamless toll payments and better journey management.
          </p>
          <Button asChild size="lg">
            <Link to="/login">
              Get Started Today
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-xl mb-4">RoadSwift</h3>
              <p className="text-gray-400">
                Your ultimate FASTag management and road travel companion.
              </p>
            </div>
            <div>
              <h4 className="font-medium text-lg mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Features</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Pricing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-lg mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-lg mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Terms of Service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
            <p>© {new Date().getFullYear()} RoadSwift. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
