
import React from 'react';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-3xl font-playfair font-bold mb-6">Contact Us</h1>
          
          <div className="bg-brand-light rounded-lg p-8 shadow-sm">
            <div className="flex flex-col space-y-6">
              <div className="flex items-center justify-center space-x-4">
                <Mail className="h-6 w-6 text-brand-teal" />
                <a 
                  href="mailto:boozersclub.yahoo.com" 
                  className="text-lg hover:text-brand-teal transition"
                >
                  boozersclub.yahoo.com
                </a>
              </div>
              
              <div className="border-t border-border my-4"></div>
              
              <p className="text-muted-foreground">
                We'd love to hear from you! Feel free to reach out with any questions about our products, orders, or just to say hello.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
