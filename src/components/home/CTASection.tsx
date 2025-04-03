
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CTASection = () => {
  return (
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
  );
};

export default CTASection;
