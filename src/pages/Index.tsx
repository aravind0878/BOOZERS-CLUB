
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import { ArrowRight, Palette } from "lucide-react";

const Index = () => {
  const newArrivals = products;
  const allProducts = products.slice(0, 8);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* New Arrivals and Custom Order Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {/* New Arrivals */}
            <section>
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-wider">New Arrivals</h2>
                <Link
                  to="/products?category=new"
                  className="text-brand-teal flex items-center hover:underline hover:text-brand-teal/80 transition-all duration-300 hover:shadow-brand-teal/30 hover:shadow-sm uppercase tracking-wider font-medium"
                >
                  View All <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {newArrivals.slice(0, 4).map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </section>

            {/* Custom Order */}
            <section>
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-wider">Custom Order</h2>
                <Link
                  to="/contact"
                  className="text-brand-teal flex items-center hover:underline hover:text-brand-teal/80 transition-all duration-300 hover:shadow-brand-teal/30 hover:shadow-sm uppercase tracking-wider font-medium"
                >
                  Contact Us <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>

              <div className="bg-secondary/30 rounded-lg p-8 h-full flex flex-col justify-center items-center text-center">
                <div className="bg-brand-teal/20 rounded-full p-4 mb-6">
                  <Palette className="h-8 w-8 text-brand-teal" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Design Your Own</h3>
                <p className="text-muted-foreground mb-6">
                  Want something unique? Work with our designers to create your custom apparel. Perfect for teams, events, or personal style.
                </p>
                <Button asChild className="bg-brand-teal hover:bg-brand-teal/90">
                  <Link to="/contact">Start Custom Order</Link>
                </Button>
              </div>
            </section>
          </div>
        </div>
      </div>

        {/* Feature Banner */}
        <section className="bg-brand-navy text-white py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center">
                <div className="bg-brand-teal/20 rounded-full p-4 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-2 uppercase tracking-wider">Premium Quality</h3>
                <p className="text-gray-300 tracking-wide">
                  100% organic cotton t-shirts that are both comfortable and durable.
                </p>
              </div>

              <div className="flex flex-col items-center">
                <div className="bg-brand-teal/20 rounded-full p-4 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-2 uppercase tracking-wider">Sustainable Printing</h3>
                <p className="text-gray-300 tracking-wide">
                  Eco-friendly water-based inks and sustainable production methods.
                </p>
              </div>

              <div className="flex flex-col items-center">
                <div className="bg-brand-teal/20 rounded-full p-4 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-2 uppercase tracking-wider">Free Shipping</h3>
                <p className="text-gray-300 tracking-wide">
                  On all orders over ₹1500, with fast and reliable delivery.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* All Products Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-wider">All Products</h2>
              <Link
                to="/products"
                className="text-brand-teal flex items-center hover:underline hover:text-brand-teal/80 transition-all duration-300 hover:shadow-brand-teal/30 hover:shadow-sm uppercase tracking-wider font-medium"
              >
                View All <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {allProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-brand-teal text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-wider mb-4">
              Join Our Community
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-muted-foreground tracking-wide">
              Subscribe to our newsletter for exclusive offers, new releases, and style inspiration delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 rounded-md flex-grow text-black bg-white/90 font-medium"
              />
              <Button className="bg-brand-teal hover:bg-brand-teal/90 shadow-lg shadow-brand-teal/50 uppercase tracking-wider font-medium">
                Subscribe
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
