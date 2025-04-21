
import React from 'react';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-playfair font-bold mb-6">Terms & Conditions</h1>
          
          <div className="prose max-w-none text-muted-foreground">
            <p className="mb-4">
              These terms and conditions outline the rules and regulations for the use of Boozers Club's website and services.
            </p>
            
            <p className="mb-4">
              By accessing this website, we assume you accept these terms and conditions. Do not continue to use Boozers Club if you do not agree to take all of the terms and conditions stated on this page.
            </p>
            
            <h2 className="text-xl font-medium mt-8 mb-4 text-foreground">1. Terminology</h2>
            <p className="mb-4">
              The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: "Client", "You" and "Your" refers to you, the person log on this website and compliant to the Company's terms and conditions. "The Company", "Ourselves", "We", "Our" and "Us", refers to Boozers Club. "Party", "Parties", or "Us", refers to both the Client and ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client's needs in respect of provision of the Company's stated services, in accordance with and subject to, prevailing law of India. Any use of the above terminology or other words in the singular, plural, capitalization and/or he/she or they, are taken as interchangeable and therefore as referring to same.
            </p>
            
            <h2 className="text-xl font-medium mt-8 mb-4 text-foreground">2. Products</h2>
            <p className="mb-4">
              All products displayed on our website are subject to availability. We reserve the right to discontinue any product at any time. We do not warrant that the quality of any products, services, information, or other material purchased or obtained by you will meet your expectations, or that any errors in the service will be corrected.
            </p>
            
            <h2 className="text-xl font-medium mt-8 mb-4 text-foreground">3. Pricing and Payment</h2>
            <p className="mb-4">
              All prices are displayed in USD and are inclusive of applicable taxes. We reserve the right to modify prices at any time. Payment can be made using the methods specified on the website. All payments are processed securely through our payment processor.
            </p>
            
            <h2 className="text-xl font-medium mt-8 mb-4 text-foreground">4. Shipping and Delivery</h2>
            <p className="mb-4">
              We ship to most countries worldwide. Shipping times and costs vary depending on your location and the shipping method selected. We are not responsible for delays in delivery caused by customs, weather conditions, or other factors beyond our control.
            </p>
            
            <h2 className="text-xl font-medium mt-8 mb-4 text-foreground">5. Returns and Refunds</h2>
            <p className="mb-4">
              We accept returns within 30 days of delivery. Items must be in original, unworn condition with tags attached. Please refer to our Return Policy for detailed information on the return process and eligibility.
            </p>
            
            <h2 className="text-xl font-medium mt-8 mb-4 text-foreground">6. Intellectual Property</h2>
            <p className="mb-4">
              The content on our website, including but not limited to text, graphics, logos, images, and software, is the property of Boozers Club and is protected by copyright and other intellectual property laws. You may not use, reproduce, distribute, or create derivative works based upon our content without express written permission.
            </p>
            
            <h2 className="text-xl font-medium mt-8 mb-4 text-foreground">7. User Accounts</h2>
            <p className="mb-4">
              When you create an account with us, you must provide accurate, complete, and current information. You are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer. You agree to accept responsibility for all activities that occur under your account.
            </p>
            
            <h2 className="text-xl font-medium mt-8 mb-4 text-foreground">8. Limitation of Liability</h2>
            <p className="mb-4">
              In no event shall Boozers Club, our directors, officers, employees, affiliates, agents, contractors, interns, suppliers, service providers or licensors be liable for any injury, loss, claim, or any direct, indirect, incidental, punitive, special, or consequential damages of any kind, including, without limitation lost profits, lost revenue, lost savings, loss of data, replacement costs, or any similar damages, whether based in contract, tort, strict liability or otherwise, arising from your use of any of the service or any products procured using the service, or for any other claim related in any way to your use of the service or any product.
            </p>
            
            <h2 className="text-xl font-medium mt-8 mb-4 text-foreground">9. Governing Law</h2>
            <p className="mb-4">
              These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.
            </p>
            
            <h2 className="text-xl font-medium mt-8 mb-4 text-foreground">10. Changes to Terms</h2>
            <p className="mb-4">
              We reserve the right to modify these terms at any time. Your continued use of the website after such modifications shall constitute your acceptance of the modified terms.
            </p>
            
            <p className="mt-8">
              Last updated: {new Date().toLocaleDateString('en-US', {month: 'long', day: 'numeric', year: 'numeric'})}
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Terms;
