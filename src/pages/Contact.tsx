
import React from 'react';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Contact = () => {
  const faqs = [
    {
      question: "How do I track my order?",
      answer: "Once your order has shipped, you'll receive a tracking number via email. You can also view your order status and tracking details in your account under the Orders section."
    },
    {
      question: "What is your return policy?",
      answer: "We accept returns within 30 days of delivery. Items must be in original, unworn condition with tags attached. Please contact our customer service to initiate a return."
    },
    {
      question: "How long does shipping take?",
      answer: "Standard shipping typically takes 3-5 business days within the US. International shipping can take 7-14 business days depending on the destination."
    },
    {
      question: "Are your t-shirts true to size?",
      answer: "Yes, our t-shirts are true to size and follow standard sizing. For detailed measurements, please refer to our Size Guide section."
    },
    {
      question: "Do you ship internationally?",
      answer: "Yes, we ship to most countries worldwide. International shipping rates and delivery times vary by location."
    },
    {
      question: "How do I care for my Boozers Club apparel?",
      answer: "We recommend machine washing cold, inside out, with like colors, and tumble dry on low. Avoid using bleach and high heat to preserve the print quality and fabric."
    }
  ];

  const sizeGuide = {
    small: { chest: "36-38", length: "27-28", sleeve: "8-8.5" },
    medium: { chest: "39-41", length: "28-29", sleeve: "8.5-9" },
    large: { chest: "42-44", length: "29-30", sleeve: "9-9.5" },
    xlarge: { chest: "45-47", length: "30-31", sleeve: "9.5-10" },
    xxlarge: { chest: "48-50", length: "31-32", sleeve: "10-10.5" }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-playfair font-bold mb-6 text-center">Contact Us</h1>
          
          <div className="bg-brand-light rounded-lg p-8 shadow-sm mb-12">
            <div className="flex flex-col space-y-6">
              <div className="flex items-center justify-center space-x-4">
                <Mail className="h-6 w-6 text-brand-teal" />
                <a 
                  href="mailto:boozersclub@yahoo.com" 
                  className="text-lg hover:text-brand-teal transition"
                >
                  boozersclub@yahoo.com
                </a>
              </div>
              
              <div className="border-t border-border my-4"></div>
              
              <p className="text-muted-foreground text-center">
                We'd love to hear from you! Feel free to reach out with any questions about our products, orders, or just to say hello.
              </p>
            </div>
          </div>

          {/* FAQs Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-playfair font-bold mb-6">Frequently Asked Questions</h2>
            
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>

          {/* Size Guide Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-playfair font-bold mb-6">Size Guide</h2>
            
            <div className="overflow-x-auto">
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
                  <tr className="border-b">
                    <td className="p-3 font-medium">X-Large (XL)</td>
                    <td className="p-3">{sizeGuide.xlarge.chest}</td>
                    <td className="p-3">{sizeGuide.xlarge.length}</td>
                    <td className="p-3">{sizeGuide.xlarge.sleeve}</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">XX-Large (XXL)</td>
                    <td className="p-3">{sizeGuide.xxlarge.chest}</td>
                    <td className="p-3">{sizeGuide.xxlarge.length}</td>
                    <td className="p-3">{sizeGuide.xxlarge.sleeve}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="mt-4 p-4 bg-muted rounded-md">
              <h3 className="text-lg font-medium mb-2">How to Measure</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li><strong>Chest:</strong> Measure around the fullest part of your chest, keeping the measuring tape under your arms and around your shoulder blades.</li>
                <li><strong>Length:</strong> Measure from the top of your shoulder to the desired length down your torso.</li>
                <li><strong>Sleeve:</strong> Measure from the shoulder seam to the end of the sleeve.</li>
              </ul>
              <p className="mt-3 text-sm text-muted-foreground">Note: All measurements are approximate and may vary slightly between styles.</p>
            </div>
          </section>

          {/* Company Information */}
          <section>
            <h2 className="text-2xl font-playfair font-bold mb-6">About Boozers Club</h2>
            
            <div className="prose max-w-none text-muted-foreground">
              <p className="mb-4">
                Boozers Club is a premium street fashion brand founded on the principle that style should make a statement. Our "Guns Don't Need Agreement" philosophy encapsulates our belief in bold self-expression and unapologetic individuality.
              </p>
              
              <p className="mb-4">
                Established in 2020, we've quickly grown from a small local brand to a recognized name in street fashion. Our designs combine edgy aesthetics with premium quality materials to deliver clothing that not only looks great but stands the test of time.
              </p>
              
              <h3 className="text-xl font-medium mt-6 mb-3 text-foreground">Our Mission</h3>
              <p className="mb-4">
                To empower individuals to express their unique identity through clothing that combines attitude, quality, and style.
              </p>
              
              <h3 className="text-xl font-medium mt-6 mb-3 text-foreground">Sustainability Commitment</h3>
              <p className="mb-4">
                We're committed to reducing our environmental footprint. Our t-shirts are made from 100% organic cotton, and we use eco-friendly water-based inks for all our prints. We've also implemented sustainable packaging solutions to minimize waste.
              </p>
              
              <h3 className="text-xl font-medium mt-6 mb-3 text-foreground">Community</h3>
              <p>
                Boozers Club is more than just a clothing brand—it's a community of like-minded individuals who value self-expression and authenticity. Join us on social media to become part of our growing family.
              </p>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
