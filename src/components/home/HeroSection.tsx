
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calculator, CreditCard, Route } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
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
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
              <Link to="/toll-calculator">
                Calculate Toll
                <Calculator className="ml-2 h-4 w-4" />
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
  );
};

export default HeroSection;
