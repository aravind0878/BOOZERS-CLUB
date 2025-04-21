
import React from 'react';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowRight, Truck, Package, RefreshCw } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Shipping = () => {
  const shippingFaqs = [
    {
      question: "How long will it take to receive my order?",
      answer: "Standard shipping within the US typically takes 3-5 business days. International orders usually take 7-14 business days, but may be subject to customs delays which are beyond our control."
    },
    {
      question: "Do you ship internationally?",
      answer: "Yes, we ship to most countries worldwide. Shipping rates and delivery times vary by location."
    },
    {
      question: "How can I track my order?",
      answer: "Once your order ships, you'll receive a tracking number via email. You can also view your order status and tracking info in your account under 'Orders'."
    },
    {
      question: "What if my package is lost or damaged?",
      answer: "If your package appears to be lost or arrives damaged, please contact us within 7 days of the estimated delivery date. We'll work with the shipping carrier to resolve the issue."
    }
  ];

  const returnFaqs = [
    {
      question: "What is your return policy?",
      answer: "We accept returns within 30 days of delivery. Items must be in original, unworn condition with tags attached."
    },
    {
      question: "How do I start a return?",
      answer: "To initiate a return, log into your account, go to your Orders section, and select the item you wish to return. Follow the prompts to generate a return shipping label. Alternatively, you can contact our customer service team for assistance."
    },
    {
      question: "How long will it take to process my refund?",
      answer: "Once we receive your return, it typically takes 3-5 business days to process. After processing, it may take an additional 5-7 business days for the refund to appear in your account, depending on your payment method."
    },
    {
      question: "Can I exchange an item instead of returning it?",
      answer: "Yes, we offer exchanges for items of equal value. Please contact our customer service team to process an exchange."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-playfair font-bold mb-6 text-center">Shipping & Returns</h1>
          
          <p className="text-muted-foreground mb-12 text-center">
            We want your shopping experience to be as smooth as possible. Here's everything you need to know about our shipping and return policies.
          </p>
          
          {/* Shipping Section */}
          <section className="mb-16">
            <div className="flex items-center mb-6">
              <Truck className="h-6 w-6 text-brand-teal mr-2" />
              <h2 className="text-2xl font-playfair font-bold">Shipping Information</h2>
            </div>
            
            <div className="bg-card p-6 rounded-lg shadow-sm mb-8">
              <h3 className="text-xl font-medium mb-4">Shipping Options</h3>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-muted border-b">
                      <th className="p-3 text-left">Service</th>
                      <th className="p-3 text-left">Estimated Time</th>
                      <th className="p-3 text-left">Cost</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-3 font-medium">Standard (US)</td>
                      <td className="p-3">3-5 business days</td>
                      <td className="p-3">Free over $50, otherwise $5.99</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3 font-medium">Express (US)</td>
                      <td className="p-3">1-2 business days</td>
                      <td className="p-3">$12.99</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3 font-medium">International Standard</td>
                      <td className="p-3">7-14 business days</td>
                      <td className="p-3">$15.99 - $25.99 (varies by location)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium">International Express</td>
                      <td className="p-3">3-5 business days</td>
                      <td className="p-3">$25.99 - $45.99 (varies by location)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="bg-muted p-6 rounded-lg mb-8">
              <h3 className="text-xl font-medium mb-4">Shipping Policy</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Orders are processed within 1-2 business days.</li>
                <li>Shipping times are estimates and not guaranteed.</li>
                <li>We ship Monday through Friday, excluding holidays.</li>
                <li>International customers may be responsible for customs fees, duties, and taxes.</li>
                <li>We ship to most countries worldwide, but some restrictions apply.</li>
              </ul>
            </div>
            
            <Accordion type="single" collapsible className="w-full">
              {shippingFaqs.map((faq, index) => (
                <AccordionItem key={index} value={`shipping-${index}`}>
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>
          
          {/* Returns Section */}
          <section>
            <div className="flex items-center mb-6">
              <RefreshCw className="h-6 w-6 text-brand-teal mr-2" />
              <h2 className="text-2xl font-playfair font-bold">Returns & Exchanges</h2>
            </div>
            
            <div className="bg-card p-6 rounded-lg shadow-sm mb-8">
              <h3 className="text-xl font-medium mb-4">Return Process</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="p-4">
                  <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="font-bold">1</span>
                  </div>
                  <h4 className="font-medium mb-2">Request Return</h4>
                  <p className="text-xs text-muted-foreground">Log into your account and select the item(s) you wish to return.</p>
                </div>
                <div className="p-4">
                  <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="font-bold">2</span>
                  </div>
                  <h4 className="font-medium mb-2">Ship Items Back</h4>
                  <p className="text-xs text-muted-foreground">Use the provided return label to ship the items back to us.</p>
                </div>
                <div className="p-4">
                  <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="font-bold">3</span>
                  </div>
                  <h4 className="font-medium mb-2">Receive Refund</h4>
                  <p className="text-xs text-muted-foreground">Once we receive and inspect your return, we'll process your refund.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-muted p-6 rounded-lg mb-8">
              <h3 className="text-xl font-medium mb-4">Return Policy</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Returns must be initiated within 30 days of delivery.</li>
                <li>Items must be unworn, unwashed, and in original condition with tags attached.</li>
                <li>Return shipping is the responsibility of the customer unless the item is defective or we made an error.</li>
                <li>Sale items and custom orders are final sale and cannot be returned unless defective.</li>
                <li>Refunds will be issued to the original payment method.</li>
              </ul>
            </div>
            
            <Accordion type="single" collapsible className="w-full">
              {returnFaqs.map((faq, index) => (
                <AccordionItem key={index} value={`return-${index}`}>
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>
          
          <div className="mt-12 p-6 bg-brand-light rounded-lg text-center">
            <h3 className="text-xl font-medium mb-2">Need Help?</h3>
            <p className="text-muted-foreground mb-4">
              If you have any questions about your order, shipping, or returns, our customer service team is here to help.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center text-brand-teal hover:underline"
            >
              Contact Us <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Shipping;
