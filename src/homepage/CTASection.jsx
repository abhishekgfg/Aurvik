import React from "react";
import { ArrowRight } from "lucide-react";

const Button = ({ children, className = "", ...props }) => (
  <button
    className={`inline-flex items-center justify-center gap-2 rounded-md bg-blue-900 text-white font-medium text-lg px-10 py-2 transition-colors hover:bg-blue-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-900 focus-visible:ring-offset-2 disabled:opacity-50 ${className}`}
    {...props}
  >
    {children}
  </button>
);

const CTASection = () => (
  <section className="py-20 bg-secondary text-center">
    <div className="section-container">
      <h2 className="text-4xl font-heading font-bold mb-6 animate-fade-in">
        Ready to Transform Your Business?
      </h2>
      <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto font-body">
        Join our free orientation session and discover how UAE business
        structure can save you crores in taxes.
      </p>
      <Button>
        Book Your Free Orientation Now <ArrowRight className="ml-2" />
      </Button>
    </div>
  </section>
);

export default CTASection;
