
import React from 'react';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Sustainability = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-brand-light py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6">Our Sustainability Commitment</h1>
              <p className="text-lg text-muted-foreground">
                Style doesn't have to come at the expense of our planet. Discover how we're working to reduce our environmental footprint.
              </p>
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-playfair font-bold mb-6">Our Approach</h2>
              
              <div className="prose max-w-none text-muted-foreground">
                <p className="mb-4">
                  At Boozers Club, sustainability isn't just a buzzword—it's a core part of our business model. We believe that fashion brands have a responsibility to minimize their environmental impact while maximizing social good.
                </p>
                
                <p className="mb-4">
                  Our sustainability journey is ongoing, and we're continually looking for ways to improve our practices. We're transparent about our successes and challenges because we believe that accountability drives progress.
                </p>
              </div>
              
              <div className="my-10 relative rounded-lg overflow-hidden aspect-video">
                <img 
                  src="https://images.unsplash.com/photo-1581075143603-31e8bb1b73c6?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.0.3" 
                  alt="Sustainable clothing production" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Sustainable Materials */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-playfair font-bold mb-10 text-center">Sustainable Materials</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-card p-6 rounded-lg">
                  <h3 className="text-xl font-medium mb-4">Organic Cotton</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    All of our t-shirts are made from 100% GOTS-certified organic cotton, which is grown without harmful pesticides or synthetic fertilizers.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Compared to conventional cotton, organic cotton:
                  </p>
                  <ul className="list-disc text-sm text-muted-foreground pl-5 mt-2">
                    <li>Uses 91% less water</li>
                    <li>Produces 46% less CO2 emissions</li>
                    <li>Supports healthier soil and biodiversity</li>
                    <li>Is better for farmers' health and livelihoods</li>
                  </ul>
                </div>
                
                <div className="bg-card p-6 rounded-lg">
                  <h3 className="text-xl font-medium mb-4">Water-Based Inks</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    We use eco-friendly water-based inks for all our prints, which contain no harmful chemicals and require less water for production compared to plastisol inks.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Our water-based inks:
                  </p>
                  <ul className="list-disc text-sm text-muted-foreground pl-5 mt-2">
                    <li>Are PVC and phthalate-free</li>
                    <li>Produce less waste</li>
                    <li>Result in a softer feel on the fabric</li>
                    <li>Are more breathable and durable</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ethical Production */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-playfair font-bold mb-6">Ethical Production</h2>
              
              <div className="prose max-w-none text-muted-foreground">
                <p className="mb-4">
                  We partner with ethical manufacturers who provide fair wages and safe working conditions for their employees. All of our production facilities comply with strict labor standards and are regularly audited to ensure compliance.
                </p>
                
                <p className="mb-4">
                  We believe that sustainability includes social responsibility, which is why we're committed to:
                </p>
                
                <ul className="list-disc pl-5 mb-4">
                  <li>Fair compensation for all workers in our supply chain</li>
                  <li>Safe and healthy working conditions</li>
                  <li>No child or forced labor</li>
                  <li>Respect for workers' rights and dignity</li>
                  <li>Supporting local communities where our products are made</li>
                </ul>
                
                <p>
                  We're working towards full transparency in our supply chain, with the goal of providing detailed information about each step of our production process.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Packaging & Shipping */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-playfair font-bold mb-6">Packaging & Shipping</h2>
              
              <div className="prose max-w-none text-muted-foreground">
                <p className="mb-4">
                  We've redesigned our packaging to minimize waste and use more sustainable materials:
                </p>
                
                <ul className="list-disc pl-5 mb-4">
                  <li>Our mailers are made from recycled materials and are 100% recyclable</li>
                  <li>We've eliminated plastic packaging wherever possible</li>
                  <li>Our hang tags and labels are made from recycled paper and are printed with soy-based inks</li>
                  <li>We consolidate shipments to reduce carbon emissions from transportation</li>
                </ul>
                
                <p>
                  We're also exploring options for carbon-neutral shipping to further reduce our environmental impact.
                </p>
              </div>
              
              <div className="mt-8 bg-card p-6 rounded-lg">
                <h3 className="text-xl font-medium mb-4">How You Can Help</h3>
                <ul className="list-disc text-sm text-muted-foreground pl-5">
                  <li>Wash your clothes less frequently and at lower temperatures</li>
                  <li>Line dry instead of using a dryer when possible</li>
                  <li>Repair items instead of replacing them</li>
                  <li>Donate or recycle clothing you no longer wear</li>
                  <li>Choose quality over quantity when shopping</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Our Goals */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-playfair font-bold mb-6 text-center">Our Sustainability Goals</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="bg-card p-6 rounded-lg shadow-sm">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-brand-teal/20 flex items-center justify-center">
                    <span className="text-2xl font-bold text-brand-teal">1</span>
                  </div>
                  <h3 className="text-xl font-medium mb-2">Carbon Neutral by 2025</h3>
                  <p className="text-sm text-muted-foreground">
                    We're working to offset our carbon emissions and reduce our overall carbon footprint.
                  </p>
                </div>
                
                <div className="bg-card p-6 rounded-lg shadow-sm">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-brand-teal/20 flex items-center justify-center">
                    <span className="text-2xl font-bold text-brand-teal">2</span>
                  </div>
                  <h3 className="text-xl font-medium mb-2">Zero Waste Packaging</h3>
                  <p className="text-sm text-muted-foreground">
                    By 2024, we aim to eliminate all non-recyclable or non-compostable materials from our packaging.
                  </p>
                </div>
                
                <div className="bg-card p-6 rounded-lg shadow-sm">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-brand-teal/20 flex items-center justify-center">
                    <span className="text-2xl font-bold text-brand-teal">3</span>
                  </div>
                  <h3 className="text-xl font-medium mb-2">100% Transparency</h3>
                  <p className="text-sm text-muted-foreground">
                    We're working towards complete supply chain transparency so you know exactly where your clothes come from.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Join Us */}
        <section className="py-16 bg-brand-teal text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-playfair font-bold mb-6">Join Us on Our Journey</h2>
              <p className="text-lg mb-8">
                Sustainability is a continuous journey, not a destination. We're committed to improving our practices and reducing our environmental impact with every collection.
              </p>
              <Link 
                to="/products" 
                className="bg-white hover:bg-gray-100 text-brand-teal px-6 py-3 rounded-md transition inline-block"
              >
                Shop Sustainable Fashion
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Sustainability;
