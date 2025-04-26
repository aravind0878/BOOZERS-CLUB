
import React from 'react';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-brand-light py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6">About Boozer's Club</h1>
              <p className="text-lg text-muted-foreground">
                Where style meets attitude. We create bold, unapologetic apparel for those who dare to express themselves.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-playfair font-bold mb-6">Our Story</h2>
              
              <div className="prose max-w-none text-muted-foreground">
                <p className="mb-4">
                  Boozers Club was born from a simple yet powerful idea: fashion should make a statement. Founded in 2025, we started as a small collective of designers and street culture enthusiasts who were tired of bland, meaningless clothing.
                </p>
                
                <p className="mb-4">
                  Our "Guns Don't Need Agreement" philosophy encapsulates our belief in bold self-expression and unapologetic individuality. We believe that true style comes from confidence and authenticity, not following trends.
                </p>
                
                <p className="mb-4">
                  What began as a passion project quickly grew into a recognized brand in the street fashion scene. Today, Boozers Club continues to push boundaries with designs that combine edgy aesthetics with premium quality materials.
                </p>
              </div>
              
              <div className="my-10 relative rounded-lg overflow-hidden aspect-video">
                <img 
                  src="/images/hero.jpg" 
                  alt="Boozers Club team at work" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-playfair font-bold mb-10 text-center">Our Values</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-card p-6 rounded-lg text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-brand-teal/20 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium mb-2">Authenticity</h3>
                  <p className="text-sm text-muted-foreground">
                    We create designs that reflect genuine self-expression without compromise. No trends, just truth.
                  </p>
                </div>
                
                <div className="bg-card p-6 rounded-lg text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-brand-teal/20 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium mb-2">Quality</h3>
                  <p className="text-sm text-muted-foreground">
                    Premium materials and attention to detail in every piece. We create clothing that lasts.
                  </p>
                </div>
                
                <div className="bg-card p-6 rounded-lg text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-brand-teal/20 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium mb-2">Community</h3>
                  <p className="text-sm text-muted-foreground">
                    We're building more than a brand—we're creating a community of individuals who dare to stand out.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Join Us */}
        <section className="py-16 bg-brand-navy text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-playfair font-bold mb-6">Join the Movement</h2>
              <p className="text-lg mb-8">
                Boozers Club is more than just a clothing brand—it's a community of individuals who dare to stand out and express themselves.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  to="/products" 
                  className="bg-brand-teal hover:bg-brand-teal/90 text-white px-6 py-3 rounded-md transition"
                >
                  Shop Collection
                </Link>
                <a 
                  href="https://www.instagram.com/boozers_club?igsh=dWphc3NobW5kaXNr" 
                  className="bg-white hover:bg-gray-100 text-brand-navy px-6 py-3 rounded-md transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Follow Us on Instagram
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
