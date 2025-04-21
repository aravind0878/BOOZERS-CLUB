
import React from 'react';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-playfair font-bold mb-6">Privacy Policy</h1>
          
          <div className="prose max-w-none text-muted-foreground">
            <p className="mb-4">
              At Boozers Club, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or make a purchase.
            </p>
            
            <p className="mb-4">
              Please read this Privacy Policy carefully. By accessing and using our services, you acknowledge that you have read and understood this policy.
            </p>
            
            <h2 className="text-xl font-medium mt-8 mb-4 text-foreground">1. Information We Collect</h2>
            <p className="mb-4">
              We collect information that you provide directly to us, such as:
            </p>
            <ul className="list-disc pl-5 mb-4">
              <li>Personal information (name, email address, postal address, phone number)</li>
              <li>Account information (username, password)</li>
              <li>Transaction information (products purchased, order value, payment information)</li>
              <li>Communications (when you contact our customer service)</li>
            </ul>
            
            <p className="mb-4">
              We also automatically collect certain information about your device and how you interact with our website, including:
            </p>
            <ul className="list-disc pl-5 mb-4">
              <li>Log information (IP address, browser type, pages visited, time spent)</li>
              <li>Device information (hardware model, operating system)</li>
              <li>Location information (general location based on IP address)</li>
              <li>Cookies and similar technologies</li>
            </ul>
            
            <h2 className="text-xl font-medium mt-8 mb-4 text-foreground">2. How We Use Your Information</h2>
            <p className="mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-5 mb-4">
              <li>Process and fulfill your orders</li>
              <li>Communicate with you about your orders, products, and services</li>
              <li>Improve and personalize your shopping experience</li>
              <li>Develop new products and services</li>
              <li>Send you marketing communications (with your consent)</li>
              <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities</li>
              <li>Comply with our legal obligations</li>
            </ul>
            
            <h2 className="text-xl font-medium mt-8 mb-4 text-foreground">3. Sharing Your Information</h2>
            <p className="mb-4">
              We may share your information with:
            </p>
            <ul className="list-disc pl-5 mb-4">
              <li>Service providers who perform services on our behalf (payment processors, shipping companies)</li>
              <li>Business partners with whom we jointly offer products or services</li>
              <li>Law enforcement or other authorities if required by law</li>
              <li>In connection with a business transaction such as a merger or acquisition</li>
            </ul>
            
            <h2 className="text-xl font-medium mt-8 mb-4 text-foreground">4. Data Security</h2>
            <p className="mb-4">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized or unlawful processing, accidental loss, destruction, or damage. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
            
            <h2 className="text-xl font-medium mt-8 mb-4 text-foreground">5. Your Rights</h2>
            <p className="mb-4">
              Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            <ul className="list-disc pl-5 mb-4">
              <li>Access to your personal information</li>
              <li>Correction of inaccurate or incomplete information</li>
              <li>Deletion of your personal information</li>
              <li>Restriction of processing of your personal information</li>
              <li>Data portability</li>
              <li>Objection to processing of your personal information</li>
            </ul>
            
            <p className="mb-4">
              To exercise these rights, please contact us using the information provided in the "Contact Us" section.
            </p>
            
            <h2 className="text-xl font-medium mt-8 mb-4 text-foreground">6. Cookies</h2>
            <p className="mb-4">
              We use cookies and similar technologies to enhance your experience on our website. You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies. If you disable or refuse cookies, please note that some parts of our website may become inaccessible or not function properly.
            </p>
            
            <h2 className="text-xl font-medium mt-8 mb-4 text-foreground">7. Marketing Communications</h2>
            <p className="mb-4">
              With your consent, we may send you marketing communications about our products and services. You can opt out of receiving these communications at any time by clicking the "unsubscribe" link in the email or contacting us directly.
            </p>
            
            <h2 className="text-xl font-medium mt-8 mb-4 text-foreground">8. Children's Privacy</h2>
            <p className="mb-4">
              Our website is not intended for children under the age of 13, and we do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe we have collected information from your child, please contact us immediately.
            </p>
            
            <h2 className="text-xl font-medium mt-8 mb-4 text-foreground">9. Changes to This Privacy Policy</h2>
            <p className="mb-4">
              We may update this Privacy Policy from time to time. The updated version will be indicated by an updated "Last Updated" date, and the updated version will be effective as soon as it is accessible. We encourage you to review this Privacy Policy frequently to stay informed about how we protect your information.
            </p>
            
            <h2 className="text-xl font-medium mt-8 mb-4 text-foreground">10. Contact Us</h2>
            <p className="mb-4">
              If you have questions or concerns about this Privacy Policy or our practices, please contact us at:
            </p>
            <p className="mb-4">
              Email: boozersclub.yahoo.com
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

export default Privacy;
