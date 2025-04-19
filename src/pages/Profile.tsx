
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useAuth } from "@/context/AuthContext";
import { Settings, ListOrdered, Heart, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("orders");
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  // Redirect if not logged in
  if (!user) {
    navigate("/auth");
    return null;
  }

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
                defaultValue="orders" 
                className="w-full" 
                value={activeTab}
                onValueChange={setActiveTab}
              >
                <TabsList className="flex flex-col h-full space-y-2">
                  <TabsTrigger value="orders" className="w-full justify-start">
                    <ListOrdered className="w-4 h-4 mr-2" />
                    Orders
                  </TabsTrigger>
                  <TabsTrigger value="wishlist" className="w-full justify-start">
                    <Heart className="w-4 h-4 mr-2" />
                    Wishlist
                  </TabsTrigger>
                  <TabsTrigger value="settings" className="w-full justify-start">
                    <Settings className="w-4 h-4 mr-2" />
                    Account Settings
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
              {activeTab === "orders" && (
                <div>
                  <h2 className="text-2xl font-semibold mb-4">My Orders</h2>
                  <p className="text-muted-foreground">No orders yet.</p>
                </div>
              )}

              {activeTab === "wishlist" && (
                <div>
                  <h2 className="text-2xl font-semibold mb-4">My Wishlist</h2>
                  <p className="text-muted-foreground">Your wishlist is empty.</p>
                </div>
              )}

              {activeTab === "settings" && (
                <div>
                  <h2 className="text-2xl font-semibold mb-4">Account Settings</h2>
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium">Email</label>
                      <p className="text-muted-foreground">{user?.email || "Not available"}</p>
                    </div>
                    <Button variant="outline">Change Password</Button>
                    <Button 
                      variant="destructive" 
                      onClick={signOut}
                      className="ml-2"
                    >
                      Sign Out
                    </Button>
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
                          Items can be returned within 30 days of delivery for a full refund.
                        </p>
                      </section>
                      <section>
                        <h3 className="text-lg font-semibold mb-2">Shipping Policy</h3>
                        <p className="text-muted-foreground">
                          Free shipping on orders over $50. Standard delivery takes 3-5 business days.
                        </p>
                      </section>
                      <section>
                        <h3 className="text-lg font-semibold mb-2">Privacy Policy</h3>
                        <p className="text-muted-foreground">
                          We respect your privacy and protect your personal information.
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
