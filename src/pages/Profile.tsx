
import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useAuth } from "@/context/AuthContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Settings, ListOrdered, Heart, Shield, MapPin, CreditCard, Package, Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("personal");
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  
  // Mock data for demonstration
  const orders = [
    { id: "ORD-001", date: "2025-04-15", status: "Delivered", total: "$129.99" },
    { id: "ORD-002", date: "2025-04-01", status: "Processing", total: "$79.50" },
  ];
  
  const wishlistItems = [
    { id: "1", name: "Premium Whiskey", price: "$59.99", addedOn: "2025-04-10" },
    { id: "2", name: "Craft Beer Set", price: "$45.00", addedOn: "2025-04-05" },
  ];
  
  const addresses = [
    { id: "1", name: "Home", street: "123 Main Street", city: "New York", state: "NY", zip: "10001", isDefault: true },
    { id: "2", name: "Office", street: "456 Business Ave", city: "Chicago", state: "IL", zip: "60601", isDefault: false },
  ];
  
  const paymentMethods = [
    { id: "1", type: "Credit Card", last4: "4242", expiry: "05/26", isDefault: true },
    { id: "2", type: "PayPal", email: "user@example.com", isDefault: false },
  ];

  useEffect(() => {
    // Check if user is authenticated
    if (!user) {
      navigate("/auth");
    }
  }, [user, navigate]);

  // Redirect if not logged in
  if (!user) {
    return null;
  }

  const handleRemoveWishlistItem = (id: string) => {
    toast.success("Item removed from wishlist");
    // In a real app, you would call a function to remove the item from the wishlist
  };

  const handleSetDefaultAddress = (id: string) => {
    toast.success("Default address updated");
    // In a real app, you would call a function to set the default address
  };

  const handleRemoveAddress = (id: string) => {
    toast.success("Address removed");
    // In a real app, you would call a function to remove the address
  };

  const handleSetDefaultPayment = (id: string) => {
    toast.success("Default payment method updated");
    // In a real app, you would call a function to set the default payment method
  };

  const handleRemovePayment = (id: string) => {
    toast.success("Payment method removed");
    // In a real app, you would call a function to remove the payment method
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-6">My Account</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Sidebar Menu */}
            <div className="md:col-span-1">
              <Tabs 
                defaultValue="personal" 
                className="w-full" 
                value={activeTab}
                onValueChange={setActiveTab}
              >
                <TabsList className="flex flex-col h-full space-y-2">
                  <TabsTrigger value="personal" className="w-full justify-start">
                    <Settings className="w-4 h-4 mr-2" />
                    Personal Details
                  </TabsTrigger>
                  <TabsTrigger value="orders" className="w-full justify-start">
                    <ListOrdered className="w-4 h-4 mr-2" />
                    Orders
                  </TabsTrigger>
                  <TabsTrigger value="wishlist" className="w-full justify-start">
                    <Heart className="w-4 h-4 mr-2" />
                    Wishlist
                  </TabsTrigger>
                  <TabsTrigger value="addresses" className="w-full justify-start">
                    <MapPin className="w-4 h-4 mr-2" />
                    Addresses
                  </TabsTrigger>
                  <TabsTrigger value="payments" className="w-full justify-start">
                    <CreditCard className="w-4 h-4 mr-2" />
                    Payment Methods
                  </TabsTrigger>
                  <TabsTrigger value="policies" className="w-full justify-start">
                    <Shield className="w-4 h-4 mr-2" />
                    Policies
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>

            {/* Content Area */}
            <div className="md:col-span-3 border rounded-md p-6">
              {activeTab === "personal" && (
                <div>
                  <h2 className="text-2xl font-semibold mb-4">Personal Details</h2>
                  <Card>
                    <CardContent className="pt-6">
                      <div className="space-y-4">
                        <div>
                          <label className="text-sm font-medium">Email</label>
                          <p className="text-muted-foreground">{user?.email || "Not available"}</p>
                        </div>
                        <div>
                          <label className="text-sm font-medium">Name</label>
                          <p className="text-muted-foreground">{user?.user_metadata?.name || "Not set"}</p>
                        </div>
                        <div className="pt-2 flex flex-wrap gap-2">
                          <Button variant="outline">Edit Profile</Button>
                          <Button 
                            variant="destructive" 
                            onClick={signOut}
                          >
                            Sign Out
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}

              {activeTab === "orders" && (
                <div>
                  <h2 className="text-2xl font-semibold mb-4">Order History</h2>
                  {orders.length > 0 ? (
                    <Card>
                      <CardContent className="p-0">
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>Order ID</TableHead>
                              <TableHead>Date</TableHead>
                              <TableHead>Status</TableHead>
                              <TableHead>Total</TableHead>
                              <TableHead>Actions</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {orders.map((order) => (
                              <TableRow key={order.id}>
                                <TableCell>{order.id}</TableCell>
                                <TableCell>{order.date}</TableCell>
                                <TableCell>
                                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                    order.status === "Delivered" ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800"
                                  }`}>
                                    {order.status}
                                  </span>
                                </TableCell>
                                <TableCell>{order.total}</TableCell>
                                <TableCell>
                                  <Button variant="ghost" size="sm">View Details</Button>
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </CardContent>
                    </Card>
                  ) : (
                    <Card>
                      <CardContent className="flex flex-col items-center justify-center p-6">
                        <Package className="h-12 w-12 text-muted-foreground mb-4" />
                        <p className="text-muted-foreground">No orders yet</p>
                        <Button className="mt-4" asChild>
                          <a href="/products">Continue Shopping</a>
                        </Button>
                      </CardContent>
                    </Card>
                  )}
                </div>
              )}

              {activeTab === "wishlist" && (
                <div>
                  <h2 className="text-2xl font-semibold mb-4">My Wishlist</h2>
                  {wishlistItems.length > 0 ? (
                    <div className="grid gap-4">
                      {wishlistItems.map((item) => (
                        <Card key={item.id}>
                          <CardContent className="p-4 flex justify-between items-center">
                            <div>
                              <h3 className="font-medium">{item.name}</h3>
                              <p className="text-muted-foreground text-sm">{item.price}</p>
                              <p className="text-xs text-muted-foreground flex items-center mt-1">
                                <Calendar className="h-3 w-3 mr-1" /> Added on {item.addedOn}
                              </p>
                            </div>
                            <div className="flex gap-2">
                              <Button variant="outline" size="sm">Add to Cart</Button>
                              <Button 
                                variant="ghost" 
                                size="sm" 
                                className="text-destructive"
                                onClick={() => handleRemoveWishlistItem(item.id)}
                              >
                                Remove
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  ) : (
                    <Card>
                      <CardContent className="flex flex-col items-center justify-center p-6">
                        <Heart className="h-12 w-12 text-muted-foreground mb-4" />
                        <p className="text-muted-foreground">Your wishlist is empty</p>
                        <Button className="mt-4" asChild>
                          <a href="/products">Discover Products</a>
                        </Button>
                      </CardContent>
                    </Card>
                  )}
                </div>
              )}

              {activeTab === "addresses" && (
                <div>
                  <h2 className="text-2xl font-semibold mb-4">Saved Addresses</h2>
                  {addresses.length > 0 ? (
                    <div className="grid gap-4">
                      {addresses.map((address) => (
                        <Card key={address.id}>
                          <CardContent className="p-4">
                            <div className="flex justify-between items-start">
                              <div>
                                <div className="flex items-center mb-1">
                                  <h3 className="font-medium">{address.name}</h3>
                                  {address.isDefault && (
                                    <span className="ml-2 text-xs bg-blue-100 text-blue-800 px-1.5 py-0.5 rounded">
                                      Default
                                    </span>
                                  )}
                                </div>
                                <p className="text-sm text-muted-foreground">{address.street}</p>
                                <p className="text-sm text-muted-foreground">
                                  {address.city}, {address.state} {address.zip}
                                </p>
                              </div>
                              <div className="flex gap-2">
                                <Button variant="outline" size="sm">Edit</Button>
                                {!address.isDefault && (
                                  <Button 
                                    variant="ghost" 
                                    size="sm"
                                    onClick={() => handleSetDefaultAddress(address.id)}
                                  >
                                    Set as Default
                                  </Button>
                                )}
                                <Button 
                                  variant="ghost" 
                                  size="sm" 
                                  className="text-destructive"
                                  onClick={() => handleRemoveAddress(address.id)}
                                >
                                  Remove
                                </Button>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  ) : (
                    <Card>
                      <CardContent className="flex flex-col items-center justify-center p-6">
                        <MapPin className="h-12 w-12 text-muted-foreground mb-4" />
                        <p className="text-muted-foreground">No saved addresses</p>
                        <Button className="mt-4">Add New Address</Button>
                      </CardContent>
                    </Card>
                  )}
                  <div className="mt-4">
                    <Button>Add New Address</Button>
                  </div>
                </div>
              )}

              {activeTab === "payments" && (
                <div>
                  <h2 className="text-2xl font-semibold mb-4">Payment Methods</h2>
                  {paymentMethods.length > 0 ? (
                    <div className="grid gap-4">
                      {paymentMethods.map((payment) => (
                        <Card key={payment.id}>
                          <CardContent className="p-4">
                            <div className="flex justify-between items-start">
                              <div>
                                <div className="flex items-center mb-1">
                                  <h3 className="font-medium">
                                    {payment.type} 
                                    {payment.last4 && <span className="ml-1">•••• {payment.last4}</span>}
                                  </h3>
                                  {payment.isDefault && (
                                    <span className="ml-2 text-xs bg-blue-100 text-blue-800 px-1.5 py-0.5 rounded">
                                      Default
                                    </span>
                                  )}
                                </div>
                                {payment.expiry && (
                                  <p className="text-sm text-muted-foreground">Expires: {payment.expiry}</p>
                                )}
                                {payment.email && (
                                  <p className="text-sm text-muted-foreground">{payment.email}</p>
                                )}
                              </div>
                              <div className="flex gap-2">
                                {!payment.isDefault && (
                                  <Button 
                                    variant="ghost" 
                                    size="sm"
                                    onClick={() => handleSetDefaultPayment(payment.id)}
                                  >
                                    Set as Default
                                  </Button>
                                )}
                                <Button 
                                  variant="ghost" 
                                  size="sm" 
                                  className="text-destructive"
                                  onClick={() => handleRemovePayment(payment.id)}
                                >
                                  Remove
                                </Button>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  ) : (
                    <Card>
                      <CardContent className="flex flex-col items-center justify-center p-6">
                        <CreditCard className="h-12 w-12 text-muted-foreground mb-4" />
                        <p className="text-muted-foreground">No payment methods</p>
                        <Button className="mt-4">Add Payment Method</Button>
                      </CardContent>
                    </Card>
                  )}
                  <div className="mt-4">
                    <Button>Add Payment Method</Button>
                  </div>
                </div>
              )}

              {activeTab === "policies" && (
                <div>
                  <h2 className="text-2xl font-semibold mb-4">Policies</h2>
                  <ScrollArea className="h-[400px] w-full rounded-md border p-4">
                    <div className="space-y-4">
                      <section>
                        <h3 className="text-lg font-semibold mb-2">Return Policy</h3>
                        <p className="text-muted-foreground">
                          Items can be returned within 30 days of delivery for a full refund. All returned items must be in their original condition and packaging. Custom orders and personalized items are not eligible for return unless they arrive damaged or defective.
                        </p>
                      </section>
                      <section>
                        <h3 className="text-lg font-semibold mb-2">Shipping Policy</h3>
                        <p className="text-muted-foreground">
                          Free shipping on orders over $50. Standard delivery takes 3-5 business days. Express shipping options are available at checkout for an additional fee. International shipping is available to select countries.
                        </p>
                      </section>
                      <section>
                        <h3 className="text-lg font-semibold mb-2">Privacy Policy</h3>
                        <p className="text-muted-foreground">
                          We respect your privacy and protect your personal information. We collect personal data solely for processing your orders and improving your shopping experience. Your information is never sold to third parties. You can request access to your data or ask for its deletion at any time.
                        </p>
                      </section>
                      <section>
                        <h3 className="text-lg font-semibold mb-2">Terms of Service</h3>
                        <p className="text-muted-foreground">
                          By using our website, you agree to comply with and be bound by these terms. We reserve the right to change pricing, product availability, and promotions without prior notice. All content on this website is owned by Boozers Club and is protected by copyright laws.
                        </p>
                      </section>
                      <section>
                        <h3 className="text-lg font-semibold mb-2">Responsible Drinking</h3>
                        <p className="text-muted-foreground">
                          Boozers Club promotes responsible alcohol consumption. We do not sell to minors under the legal drinking age. By placing an order, you confirm that you are of legal age to purchase alcoholic beverages in your jurisdiction. We reserve the right to request ID verification upon delivery.
                        </p>
                      </section>
                    </div>
                  </ScrollArea>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Profile;
