
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import { ArrowRight } from "lucide-react";

const Index = () => {
  // Use all products for both sections
  const newArrivals = products;
  const allProducts = products.slice(0, 8); // Show first 8 products in All Products section

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 overflow-hidden">
          {/* Background Pattern Image */}
          <div className="absolute inset-0 z-0 opacity-10">
            <img
              src="/images/heroback.jpeg"
              alt="Fashion pattern background"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center relative z-10">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-12">
              <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 uppercase tracking-wider">
                | STYLE | DISCOVER | DEFINE |
              </h1>
              <p className="text-lg mb-6 md:mb-8 text-muted-foreground tracking-wide">
                Revolution in Fashion is Coming
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-brand-teal hover:bg-brand-teal/90 shadow-lg shadow-brand-teal/50 uppercase tracking-wider font-medium">
                  <Link to="/products">Shop Collection</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="uppercase tracking-wider font-medium">
                  <Link to="/about">Our Story</Link>
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <div className="relative rounded-lg overflow-hidden aspect-[4/3] md:aspect-square bg-white/80 shadow-xl">
                <img
                  src="/images/heroabt.jpeg"
                  alt="Fashion model wearing printed t-shirt"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* New Arrivals Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-wider">New Arrivals</h2>
              <Link
                to="/products?category=new"
                className="text-brand-teal flex items-center hover:underline hover:text-brand-teal/80 transition-all duration-300 hover:shadow-brand-teal/30 hover:shadow-sm uppercase tracking-wider font-medium"
              >
                View All <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {newArrivals.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

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
      </main>

      <Footer />
    </div>
  );
};

export default Index;
