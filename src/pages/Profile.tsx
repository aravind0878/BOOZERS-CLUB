import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useAuth } from "@/context/AuthContext";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Settings, ListOrdered, Heart, Shield, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

interface Order {
  id: string;
  created_at: string;
  status: string;
  tracking_number: string | null;
  total_amount: number;
}

interface WishlistItem {
  id: string;
  product_id: string;
  created_at: string;
}

interface Address {
  id: string;
  name: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  is_default: boolean;
}

const Profile = () => {
  const [activeTab, setActiveTab] = useState("personal");
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const [orders, setOrders] = useState<Order[]>([]);
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>([]);
  const [addresses, setAddresses] = useState<Address[]>([]);
  const [newAddress, setNewAddress] = useState({
    name: "",
    street: "",
    city: "",
    state: "",
    zip: ""
  });
  const [showAddressForm, setShowAddressForm] = useState(false);

  useEffect(() => {
    if (!user) {
      navigate("/auth");
      return;
    }
    fetchOrders();
    fetchWishlist();
    fetchAddresses();
  }, [user, navigate]);

  const fetchOrders = async () => {
    if (!user) return;
    const { data, error } = await supabase
      .from('orders')
      .select('*')
      .eq('user_id', user.id)
      .order('created_at', { ascending: false });

    if (error) {
      toast.error("Error fetching orders");
      return;
    }
    setOrders(data || []);
  };

  const fetchWishlist = async () => {
    if (!user) return;
    const { data, error } = await supabase
      .from('wishlist_items')
      .select('*')
      .eq('user_id', user.id)
      .order('created_at', { ascending: false });

    if (error) {
      toast.error("Error fetching wishlist");
      return;
    }
    setWishlistItems(data || []);
  };

  const fetchAddresses = async () => {
    if (!user) return;
    const { data, error } = await supabase
      .from('addresses')
      .select('*')
      .eq('user_id', user.id)
      .order('is_default', { ascending: false });

    if (error) {
      toast.error("Error fetching addresses");
      return;
    }
    setAddresses(data || []);
  };

  const handleAddAddress = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    const { error } = await supabase
      .from('addresses')
      .insert([{ ...newAddress, user_id: user.id }]);

    if (error) {
      toast.error("Error adding address");
      return;
    }

    toast.success("Address added successfully");
    setShowAddressForm(false);
    setNewAddress({ name: "", street: "", city: "", state: "", zip: "" });
    fetchAddresses();
  };

  const handleSetDefaultAddress = async (id: string) => {
    if (!user) return;

    const { error } = await supabase
      .from('addresses')
      .update({ is_default: false })
      .eq('user_id', user.id);

    if (error) {
      toast.error("Error updating addresses");
      return;
    }

    const { error: updateError } = await supabase
      .from('addresses')
      .update({ is_default: true })
      .eq('id', id);

    if (updateError) {
      toast.error("Error setting default address");
      return;
    }

    toast.success("Default address updated");
    fetchAddresses();
  };

  const handleRemoveAddress = async (id: string) => {
    if (!user) return;

    const { error } = await supabase
      .from('addresses')
      .delete()
      .eq('id', id);

    if (error) {
      toast.error("Error removing address");
      return;
    }

    toast.success("Address removed");
    fetchAddresses();
  };

  const handleRemoveFromWishlist = async (productId: string) => {
    if (!user) return;

    const { error } = await supabase
      .from('wishlist_items')
      .delete()
      .eq('user_id', user.id)
      .eq('product_id', productId);

    if (error) {
      toast.error("Error removing from wishlist");
      return;
    }

    toast.success("Removed from wishlist");
    fetchWishlist();
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
                              <TableHead>Tracking</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {orders.map((order) => (
                              <TableRow key={order.id}>
                                <TableCell>{order.id}</TableCell>
                                <TableCell>{new Date(order.created_at).toLocaleDateString()}</TableCell>
                                <TableCell>
                                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                    order.status === "delivered" ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800"
                                  }`}>
                                    {order.status}
                                  </span>
                                </TableCell>
                                <TableCell>${order.total_amount}</TableCell>
                                <TableCell>
                                  {order.tracking_number ? (
                                    <span className="text-sm text-muted-foreground">
                                      {order.tracking_number}
                                    </span>
                                  ) : (
                                    <span className="text-sm text-muted-foreground">Not available</span>
                                  )}
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
                        <ListOrdered className="h-12 w-12 text-muted-foreground mb-4" />
                        <p className="text-muted-foreground">No orders yet</p>
                        <Button className="mt-4" asChild>
                          <a href="/products">Start Shopping</a>
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
                              <h3 className="font-medium">Product ID: {item.product_id}</h3>
                              <p className="text-xs text-muted-foreground">
                                Added on {new Date(item.created_at).toLocaleDateString()}
                              </p>
                            </div>
                            <div className="flex gap-2">
                              <Button variant="outline" size="sm" asChild>
                                <a href={`/product/${item.product_id}`}>View Product</a>
                              </Button>
                              <Button 
                                variant="ghost" 
                                size="sm" 
                                className="text-destructive"
                                onClick={() => handleRemoveFromWishlist(item.product_id)}
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
                  {addresses.length > 0 && (
                    <div className="grid gap-4 mb-4">
                      {addresses.map((address) => (
                        <Card key={address.id}>
                          <CardContent className="p-4">
                            <div className="flex justify-between items-start">
                              <div>
                                <div className="flex items-center mb-1">
                                  <h3 className="font-medium">{address.name}</h3>
                                  {address.is_default && (
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
                                {!address.is_default && (
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
                  )}

                  {showAddressForm ? (
                    <Card>
                      <CardContent className="p-4">
                        <form onSubmit={handleAddAddress} className="space-y-4">
                          <div>
                            <label className="block text-sm font-medium mb-1">Name</label>
                            <input
                              type="text"
                              className="w-full p-2 border rounded"
                              value={newAddress.name}
                              onChange={(e) => setNewAddress({...newAddress, name: e.target.value})}
                              required
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-1">Street</label>
                            <input
                              type="text"
                              className="w-full p-2 border rounded"
                              value={newAddress.street}
                              onChange={(e) => setNewAddress({...newAddress, street: e.target.value})}
                              required
                            />
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <label className="block text-sm font-medium mb-1">City</label>
                              <input
                                type="text"
                                className="w-full p-2 border rounded"
                                value={newAddress.city}
                                onChange={(e) => setNewAddress({...newAddress, city: e.target.value})}
                                required
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium mb-1">State</label>
                              <input
                                type="text"
                                className="w-full p-2 border rounded"
                                value={newAddress.state}
                                onChange={(e) => setNewAddress({...newAddress, state: e.target.value})}
                                required
                              />
                            </div>
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-1">ZIP Code</label>
                            <input
                              type="text"
                              className="w-full p-2 border rounded"
                              value={newAddress.zip}
                              onChange={(e) => setNewAddress({...newAddress, zip: e.target.value})}
                              required
                            />
                          </div>
                          <div className="flex gap-2">
                            <Button type="submit">Save Address</Button>
                            <Button 
                              type="button" 
                              variant="ghost"
                              onClick={() => setShowAddressForm(false)}
                            >
                              Cancel
                            </Button>
                          </div>
                        </form>
                      </CardContent>
                    </Card>
                  ) : (
                    <Button onClick={() => setShowAddressForm(true)}>Add New Address</Button>
                  )}
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
