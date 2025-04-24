import { Link, useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CartItem from "@/components/CartItem";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { ArrowLeft, ShoppingCart } from "lucide-react";
import { formatIndianRupees } from "@/lib/formatters";
import CustomerInfoForm, { CustomerInfo } from "@/components/CustomerInfoForm";
import React, { useState } from "react";

// Update WhatsApp number to the actual number in international format (91 + number)
const WHATSAPP_NUMBER = "918985909600";

const Cart = () => {
  const { items, totalItems, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [showCustomerForm, setShowCustomerForm] = useState(false);
  const [customerInfo, setCustomerInfo] = useState<CustomerInfo | null>(null);
  
  // Shipping calculation (simplified for demo)
  const shippingCost = totalPrice >= 50 ? 0 : 5.99;
  const totalWithShipping = totalPrice + shippingCost;

  const getWhatsAppMessage = (customerInfo: CustomerInfo) => {
    if (items.length === 0) {
      return "Hi, I would like to place an order but my cart is empty.";
    }
    let message = "Hello, I would like to place an order:\n\n";
    message += `Customer Details:\n`;
    message += `Name: ${customerInfo.firstName} ${customerInfo.lastName}\n`;
    message += `Phone: ${customerInfo.phone}\n`;
    message += `Address: ${customerInfo.address}\n`;
    message += `City: ${customerInfo.city}\n`;
    message += `Pincode: ${customerInfo.pincode}\n\n`;
    message += "Order Details:\n";
    message += items
      .map((item, idx) => (
        `${idx + 1}. ${item.product.name} (Color: ${item.color}, Size: ${item.size}) x ${item.quantity} - ₹${(item.product.price * item.quantity).toFixed(2)}`
      ))
      .join("\n");
    message += `\n\nSubtotal: ${formatIndianRupees(totalPrice)}`;
    message += `\nShipping: ${shippingCost === 0 ? "Free" : formatIndianRupees(shippingCost)}`;
    message += `\nTotal: ${formatIndianRupees(totalWithShipping)}`;
    message += `\n\nPlease confirm my order.`;
    return encodeURIComponent(message);
  };

  const handleWhatsAppOrder = (customerInfo: CustomerInfo) => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${getWhatsAppMessage(customerInfo)}`;
    window.open(url, "_blank");
  };

  const handleCustomerInfoSubmit = (data: CustomerInfo) => {
    setCustomerInfo(data);
    handleWhatsAppOrder(data);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-playfair font-bold mb-8">Shopping Cart</h1>
          
          {items.length === 0 ? (
            <div className="text-center py-16 bg-secondary/30 rounded-lg">
              <ShoppingCart className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
              <h2 className="text-xl font-medium mb-4">Your cart is empty</h2>
              <p className="text-muted-foreground mb-6">
                Looks like you haven't added any products to your cart yet.
              </p>
              <Button asChild className="bg-brand-teal hover:bg-brand-teal/90">
                <Link to="/products">Start Shopping</Link>
              </Button>
            </div>
          ) : showCustomerForm ? (
            <div className="max-w-xl mx-auto">
              <h2 className="text-xl font-semibold mb-4">Enter Your Details</h2>
              <CustomerInfoForm onSubmit={handleCustomerInfoSubmit} />
              <Button 
                variant="outline" 
                className="mt-4 w-full"
                onClick={() => setShowCustomerForm(false)}
              >
                Back to Cart
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg border overflow-hidden">
                  <div className="p-4 border-b bg-muted/30">
                    <div className="flex justify-between items-center">
                      <h2 className="font-medium">Cart Items ({totalItems})</h2>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="text-muted-foreground h-8 hover:text-destructive"
                        onClick={clearCart}
                      >
                        Clear Cart
                      </Button>
                    </div>
                  </div>
                  
                  <div className="divide-y">
                    {items.map((item) => (
                      <div className="p-4" key={`${item.product.id}-${item.size}-${item.color}`}>
                        <CartItem item={item} />
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mt-4">
                  <Button 
                    variant="outline" 
                    className="flex items-center"
                    onClick={() => navigate(-1)}
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Continue Shopping
                  </Button>
                </div>
              </div>
              
              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-lg border overflow-hidden sticky top-4">
                  <div className="p-4 border-b bg-muted/30">
                    <h2 className="font-medium">Order Summary</h2>
                  </div>
                  
                  <div className="p-4 space-y-4">
                    <div className="flex justify-between py-2">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span>{formatIndianRupees(totalPrice)}</span>
                    </div>
                    
                    <div className="flex justify-between py-2">
                      <span className="text-muted-foreground">Shipping</span>
                      {shippingCost === 0 ? (
                        <span className="text-green-600">Free</span>
                      ) : (
                        <span>{formatIndianRupees(shippingCost)}</span>
                      )}
                    </div>
                    
                    {shippingCost > 0 && (
                      <div className="text-xs text-muted-foreground italic">
                        Add {formatIndianRupees(50 - totalPrice)} more to qualify for free shipping
                      </div>
                    )}
                    
                    <div className="border-t my-2"></div>
                    
                    <div className="flex justify-between py-2 font-semibold">
                      <span>Total</span>
                      <span>{formatIndianRupees(totalWithShipping)}</span>
                    </div>
                    
                    <Button 
                      className="w-full bg-green-500 hover:bg-green-600 mt-4"
                      onClick={() => setShowCustomerForm(true)}
                    >
                      Continue with Order
                    </Button>
                    
                    <div className="text-xs text-center text-muted-foreground mt-4">
                      You'll be asked to provide your details before proceeding to WhatsApp.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Cart;
