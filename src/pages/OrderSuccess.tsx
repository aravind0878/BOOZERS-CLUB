
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

const OrderSuccess = () => {
  // Generate a fake order number
  const orderNumber = `TB-${Math.floor(Math.random() * 10000)}-${Math.floor(Math.random() * 1000)}`;
  
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-white rounded-lg border p-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6">
              <CheckCircle2 className="h-8 w-8 text-green-600" />
            </div>
            
            <h1 className="text-3xl font-playfair font-bold mb-4">
              Thank You For Your Order!
            </h1>
            
            <p className="text-lg text-muted-foreground mb-6">
              Your order has been placed and is being processed.
            </p>
            
            <div className="bg-muted/30 rounded-md p-4 mb-6 inline-block">
              <p className="text-sm text-muted-foreground mb-1">Order Number</p>
              <p className="text-lg font-medium">{orderNumber}</p>
            </div>
            
            <p className="mb-6">
              We've sent a confirmation email to your email address with the order details.
            </p>
            
            <div className="space-y-4">
              <div className="border-t border-b py-4">
                <h2 className="font-medium mb-2">What happens next?</h2>
                <p className="text-muted-foreground text-sm">
                  We'll process your order within 1-2 business days. Once your order ships, 
                  you'll receive a shipping confirmation email with tracking information.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild variant="outline">
                  <Link to="/profile">View Order Status</Link>
                </Button>
                
                <Button asChild className="bg-brand-teal hover:bg-brand-teal/90">
                  <Link to="/products">Continue Shopping</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default OrderSuccess;
