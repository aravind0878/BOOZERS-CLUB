
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowLeft, Lock, Smartphone } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/context/AuthContext";
import { formatIndianRupees } from "@/lib/formatters";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const Checkout = () => {
  const { items, totalItems, totalPrice, clearCart } = useCart();
  const { toast } = useToast();
  const navigate = useNavigate();
  const { user } = useAuth();
  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "IN",
    customCountry: "",
    sameShipping: true,
    saveInfo: true,
    paymentMethod: "googlePay",
    upiId: ""
  });
  
  const [useCustomCountry, setUseCustomCountry] = useState(false);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData({ ...formData, [name]: checked });
  };
  
  const handleSelectChange = (name: string, value: string) => {
    if (name === "country" && value === "custom") {
      setUseCustomCountry(true);
    } else {
      if (name === "country") {
        setUseCustomCountry(false);
      }
      setFormData({ ...formData, [name]: value });
    }
  };
  
  const shippingCost = totalPrice >= 50 ? 0 : 5.99;
  const totalWithShipping = totalPrice + shippingCost;
  
  const saveOrderToDatabase = async () => {
    if (!user) {
      toast({
        title: "You must be logged in to complete your order",
        description: "Please log in and try again.",
        duration: 5000,
      });
      navigate("/auth");
      return false;
    }

    try {
      const orderDate = new Date();
      const timezone = "Asia/Kolkata";

      const { data: orderData, error: orderError } = await supabase
        .from('orders')
        .insert([{
          user_id: user.id,
          total_amount: totalWithShipping,
          status: 'processing',
          tracking_number: generateTrackingNumber(),
          timezone: timezone
        }])
        .select()
        .single();

      if (orderError) {
        console.error("Error creating order:", orderError);
        toast({
          title: "Error creating order",
          description: "There was a problem processing your order. Please try again.",
          duration: 5000,
        });
        return false;
      }

      const orderItems = items.map(item => ({
        order_id: orderData.id,
        product_id: item.product.id,
        quantity: item.quantity,
        price: item.product.price
      }));

      const { error: itemsError } = await supabase
        .from('order_items')
        .insert(orderItems);

      if (itemsError) {
        console.error("Error adding order items:", itemsError);
        toast({
          title: "Error processing order items",
          description: "There was a problem processing your order items. Please try again.",
          duration: 5000,
        });
        return false;
      }

      return true;
    } catch (error) {
      console.error("Order processing error:", error);
      toast({
        title: "Error processing order",
        description: "An unexpected error occurred. Please try again.",
        duration: 5000,
      });
      return false;
    }
  };

  const generateTrackingNumber = () => {
    return `TRK${Math.floor(Math.random() * 10000000).toString().padStart(7, '0')}`;
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Get the final country value (either from dropdown or custom input)
    const finalCountry = useCustomCountry ? formData.customCountry : formData.country;
    
    if (!formData.firstName || !formData.lastName || !formData.email || 
        !formData.address || !formData.city || !formData.state || 
        !formData.zipCode || !finalCountry) {
      toast({
        title: "Please fill out all required fields",
        description: "All form fields are required to complete your order.",
        duration: 5000,
      });
      return;
    }

    // Validate UPI ID if payment method is UPI
    if (formData.paymentMethod === "upi" && !formData.upiId) {
      toast({
        title: "Please enter your UPI ID",
        description: "UPI ID is required for UPI payment method.",
        duration: 5000,
      });
      return;
    }

    const orderSaved = await saveOrderToDatabase();
    
    if (orderSaved) {
      clearCart();
      
      toast({
        title: "Order placed successfully!",
        description: "Check your email for order confirmation.",
        duration: 5000,
      });
      
      navigate("/order-success");
    }
  };
  
  useEffect(() => {
    if (items.length === 0) {
      navigate("/cart");
    }
  }, [items.length, navigate]);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-playfair font-bold mb-8">Checkout</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit}>
                <div className="bg-white rounded-lg border overflow-hidden mb-6">
                  <div className="p-4 border-b bg-muted/30">
                    <h2 className="font-medium">Contact Information</h2>
                  </div>
                  
                  <div className="p-4 space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone (optional)</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg border overflow-hidden mb-6">
                  <div className="p-4 border-b bg-muted/30">
                    <h2 className="font-medium">Shipping Address</h2>
                  </div>
                  
                  <div className="p-4 space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="address">Street Address</Label>
                      <Input
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="city">City</Label>
                        <Input
                          id="city"
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="state">State/Province</Label>
                        <Input
                          id="state"
                          name="state"
                          value={formData.state}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="zipCode">Postal/Zip Code</Label>
                        <Input
                          id="zipCode"
                          name="zipCode"
                          value={formData.zipCode}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="country">Country</Label>
                        <Select 
                          value={useCustomCountry ? "custom" : formData.country} 
                          onValueChange={(value) => handleSelectChange("country", value)}
                        >
                          <SelectTrigger id="country">
                            <SelectValue placeholder="Select country" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="IN">India</SelectItem>
                            <SelectItem value="US">United States</SelectItem>
                            <SelectItem value="CA">Canada</SelectItem>
                            <SelectItem value="UK">United Kingdom</SelectItem>
                            <SelectItem value="AU">Australia</SelectItem>
                            <SelectItem value="custom">Enter Manually</SelectItem>
                          </SelectContent>
                        </Select>
                        
                        {useCustomCountry && (
                          <div className="mt-2">
                            <Input
                              id="customCountry"
                              name="customCountry"
                              value={formData.customCountry}
                              onChange={handleInputChange}
                              placeholder="Enter your country"
                              required={useCustomCountry}
                            />
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="sameShipping" 
                          checked={formData.sameShipping}
                          onCheckedChange={(checked) => 
                            handleCheckboxChange("sameShipping", checked as boolean)
                          }
                        />
                        <label
                          htmlFor="sameShipping"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Billing address same as shipping
                        </label>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="saveInfo" 
                          checked={formData.saveInfo}
                          onCheckedChange={(checked) => 
                            handleCheckboxChange("saveInfo", checked as boolean)
                          }
                        />
                        <label
                          htmlFor="saveInfo"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Save this information for next time
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg border overflow-hidden mb-6">
                  <div className="p-4 border-b bg-muted/30">
                    <h2 className="font-medium">Payment Information</h2>
                  </div>
                  
                  <div className="p-4 space-y-4">
                    <div className="flex items-center mb-4">
                      <div className="p-1 border rounded mr-2 bg-white">
                        <Smartphone className="h-5 w-5 text-muted-foreground" />
                      </div>
                      <span className="font-medium">UPI Payment</span>
                    </div>
                    
                    <RadioGroup
                      value={formData.paymentMethod}
                      onValueChange={(value) => handleSelectChange("paymentMethod", value)}
                      className="space-y-3"
                    >
                      <div className="flex items-center space-x-2 border p-3 rounded-md hover:bg-muted/10">
                        <RadioGroupItem value="googlePay" id="googlePay" />
                        <Label htmlFor="googlePay" className="flex items-center">
                          <img src="https://logos-world.net/wp-content/uploads/2020/11/Google-Pay-Logo.png" alt="Google Pay" className="h-7 mr-2" />
                          Google Pay
                        </Label>
                      </div>
                      
                      <div className="flex items-center space-x-2 border p-3 rounded-md hover:bg-muted/10">
                        <RadioGroupItem value="phonePe" id="phonePe" />
                        <Label htmlFor="phonePe" className="flex items-center">
                          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/PhonePe_Logo.svg/1200px-PhonePe_Logo.svg.png" alt="PhonePe" className="h-7 mr-2" />
                          PhonePe
                        </Label>
                      </div>
                      
                      <div className="flex items-center space-x-2 border p-3 rounded-md hover:bg-muted/10">
                        <RadioGroupItem value="upi" id="otherUpi" />
                        <Label htmlFor="otherUpi">Other UPI</Label>
                      </div>
                    </RadioGroup>
                    
                    {formData.paymentMethod === "upi" && (
                      <div className="space-y-2 mt-4">
                        <Label htmlFor="upiId">UPI ID</Label>
                        <Input
                          id="upiId"
                          name="upiId"
                          placeholder="example@upi"
                          value={formData.upiId}
                          onChange={handleInputChange}
                          required={formData.paymentMethod === "upi"}
                        />
                      </div>
                    )}
                    
                    <div className="text-xs flex items-center text-muted-foreground mt-4">
                      <Lock className="h-3 w-3 mr-1" /> 
                      Your payment information is secure and encrypted
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <Button 
                    type="button"
                    variant="outline" 
                    className="flex items-center"
                    onClick={() => navigate("/cart")}
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Return to Cart
                  </Button>
                  
                  <Button 
                    type="submit"
                    className="bg-brand-teal hover:bg-brand-teal/90"
                  >
                    Complete Order
                  </Button>
                </div>
              </form>
            </div>
            
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg border overflow-hidden sticky top-4">
                <div className="p-4 border-b bg-muted/30">
                  <h2 className="font-medium">Order Summary</h2>
                </div>
                
                <div className="p-4">
                  <div className="max-h-64 overflow-auto mb-4">
                    {items.map((item) => (
                      <div 
                        key={`${item.product.id}-${item.size}-${item.color}`} 
                        className="flex py-2 border-b"
                      >
                        <div className="w-16 h-16 rounded overflow-hidden">
                          <img 
                            src={item.product.image} 
                            alt={item.product.name} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="ml-4 flex-1">
                          <div className="font-medium">{item.product.name}</div>
                          <div className="text-xs text-muted-foreground">
                            Size: {item.size.toUpperCase()} / Color: {item.color}
                          </div>
                          <div className="text-sm mt-1">
                            {formatIndianRupees(item.product.price)} × {item.quantity}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="space-y-2 py-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span>{formatIndianRupees(totalPrice)}</span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Shipping</span>
                      {shippingCost === 0 ? (
                        <span className="text-green-600">Free</span>
                      ) : (
                        <span>{formatIndianRupees(shippingCost)}</span>
                      )}
                    </div>
                    
                    <div className="border-t my-2"></div>
                    
                    <div className="flex justify-between font-semibold">
                      <span>Total</span>
                      <span>{formatIndianRupees(totalWithShipping)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Checkout;
