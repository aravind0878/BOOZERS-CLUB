
import React from 'react';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const SizeGuide = () => {
  const sizeGuide = {
    xsmall: { chest: "34-36", length: "26", sleeve: "8" },
    small: { chest: "36-38", length: "27", sleeve: "8.5" },
    medium: { chest: "38-40", length: "28", sleeve: "9" },
    large: { chest: "40-42", length: "29", sleeve: "9.5" },
    xlarge: { chest: "42-44", length: "30", sleeve: "10" }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-playfair font-bold mb-6 text-center">Size Guide</h1>
          
          <div className="mb-8">
            <p className="text-muted-foreground mb-6 text-center">
              Finding the perfect fit is essential. Use our detailed size guide to help you choose the right size for your Boozers Club apparel. All measurements are in inches.
            </p>
            
            <div className="overflow-x-auto bg-card p-6 rounded-lg shadow-sm">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-muted border-b">
                    <th className="p-3 text-left">Size</th>
                    <th className="p-3 text-left">Chest (inches)</th>
                    <th className="p-3 text-left">Length (inches)</th>
                    <th className="p-3 text-left">Sleeve (inches)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-3 font-medium">X-Small (XS)</td>
                    <td className="p-3">{sizeGuide.xsmall.chest}</td>
                    <td className="p-3">{sizeGuide.xsmall.length}</td>
                    <td className="p-3">{sizeGuide.xsmall.sleeve}</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 font-medium">Small (S)</td>
                    <td className="p-3">{sizeGuide.small.chest}</td>
                    <td className="p-3">{sizeGuide.small.length}</td>
                    <td className="p-3">{sizeGuide.small.sleeve}</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 font-medium">Medium (M)</td>
                    <td className="p-3">{sizeGuide.medium.chest}</td>
                    <td className="p-3">{sizeGuide.medium.length}</td>
                    <td className="p-3">{sizeGuide.medium.sleeve}</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 font-medium">Large (L)</td>
                    <td className="p-3">{sizeGuide.large.chest}</td>
                    <td className="p-3">{sizeGuide.large.length}</td>
                    <td className="p-3">{sizeGuide.large.sleeve}</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">X-Large (XL)</td>
                    <td className="p-3">{sizeGuide.xlarge.chest}</td>
                    <td className="p-3">{sizeGuide.xlarge.length}</td>
                    <td className="p-3">{sizeGuide.xlarge.sleeve}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-medium mb-4">How to Measure</h2>
              <ul className="space-y-4">
                <li>
                  <h3 className="font-medium">Chest</h3>
                  <p className="text-sm text-muted-foreground">Measure around the fullest part of your chest, keeping the measuring tape under your arms and around your shoulder blades.</p>
                </li>
                <li>
                  <h3 className="font-medium">Length</h3>
                  <p className="text-sm text-muted-foreground">Measure from the top of your shoulder to the desired length down your torso.</p>
                </li>
                <li>
                  <h3 className="font-medium">Sleeve</h3>
                  <p className="text-sm text-muted-foreground">Measure from the shoulder seam to the end of the sleeve.</p>
                </li>
              </ul>
            </div>

            <div className="bg-card p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-medium mb-4">Fit Guide</h2>
              <ul className="space-y-4">
                <li>
                  <h3 className="font-medium">Regular Fit</h3>
                  <p className="text-sm text-muted-foreground">Our regular fit t-shirts offer a comfortable, relaxed silhouette that's neither too tight nor too loose.</p>
                </li>
                <li>
                  <h3 className="font-medium">Slim Fit</h3>
                  <p className="text-sm text-muted-foreground">Our slim fit shirts are tailored closer to the body for a more contemporary look. If you're between sizes, we recommend sizing up.</p>
                </li>
                <li>
                  <h3 className="font-medium">Oversized Fit</h3>
                  <p className="text-sm text-muted-foreground">Our oversized styles are designed to be worn loose and relaxed. If you prefer a more fitted look, we recommend sizing down.</p>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-muted p-6 rounded-lg">
            <h2 className="text-xl font-medium mb-4">Additional Information</h2>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>All measurements are approximate and may vary slightly between styles.</li>
              <li>Our t-shirts are pre-shrunk, but we recommend washing in cold water and tumble drying on low to minimize any additional shrinkage.</li>
              <li>If you're between sizes, we generally recommend sizing up for a more comfortable fit.</li>
              <li>For any specific questions about sizing, please contact our customer service team.</li>
            </ul>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SizeGuide;
