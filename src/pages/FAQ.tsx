
import React from 'react';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";

const FAQ = () => {
  const faqCategories = [
    {
      category: "Orders & Shipping",
      questions: [
        {
          question: "How do I track my order?",
          answer: "Once your order has shipped, you'll receive a tracking number via email. You can also view your order status and tracking details in your account under the Orders section."
        },
        {
          question: "How long does shipping take?",
          answer: "Standard shipping typically takes 3-5 business days within the US. International shipping can take 7-14 business days depending on the destination."
        },
        {
          question: "Do you ship internationally?",
          answer: "Yes, we ship to most countries worldwide. International shipping rates and delivery times vary by location."
        },
        {
          question: "How much is shipping?",
          answer: "Standard shipping is free on all orders over $50 within the US. For orders under $50, shipping costs $5.99. International shipping rates vary by destination."
        },
        {
          question: "Can I change or cancel my order?",
          answer: "We process orders quickly to ensure fast shipping. If you need to change or cancel your order, please contact us immediately at boozersclub.yahoo.com. We cannot guarantee that we can make changes once an order has been placed."
        }
      ]
    },
    {
      category: "Returns & Exchanges",
      questions: [
        {
          question: "What is your return policy?",
          answer: "We accept returns within 30 days of delivery. Items must be in original, unworn condition with tags attached. Please contact our customer service to initiate a return."
        },
        {
          question: "How do I return an item?",
          answer: "To initiate a return, sign in to your account, go to your Orders section, and select the item you wish to return. Follow the prompts to generate a return shipping label. Alternatively, you can contact customer service for assistance."
        },
        {
          question: "Can I exchange an item for a different size or color?",
          answer: "Yes, we offer exchanges for items of equal value. Please contact our customer service to process an exchange."
        },
        {
          question: "Will I get refunded for my return?",
          answer: "Once we receive and inspect your return, your refund will be processed to your original payment method. This typically takes 5-7 business days to reflect in your account."
        }
      ]
    },
    {
      category: "Products & Sizing",
      questions: [
        {
          question: "Are your t-shirts true to size?",
          answer: "Yes, our t-shirts are true to size and follow standard sizing. For detailed measurements, please refer to our Size Guide section."
        },
        {
          question: "What materials are your products made from?",
          answer: "Our t-shirts are made from 100% organic cotton, ensuring comfort and durability. We use eco-friendly water-based inks for all our prints."
        },
        {
          question: "How do I care for my Boozers Club apparel?",
          answer: "We recommend machine washing cold, inside out, with like colors, and tumble dry on low. Avoid using bleach and high heat to preserve the print quality and fabric."
        },
        {
          question: "Do your shirts shrink after washing?",
          answer: "Our t-shirts are pre-shrunk, but we recommend washing in cold water and tumble drying on low to minimize any additional shrinkage."
        }
      ]
    },
    {
      category: "Account & Payment",
      questions: [
        {
          question: "How do I create an account?",
          answer: "You can create an account by clicking on the 'Sign Up' button in the top right corner of our website. You'll need to provide your email address and create a password."
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept all major credit cards (Visa, Mastercard, American Express, Discover), PayPal, and various digital wallets. We'll soon be adding UPI and GPay payment options."
        },
        {
          question: "Is my payment information secure?",
          answer: "Yes, we use industry-standard encryption and security measures to protect your payment information. We do not store your credit card details on our servers."
        },
        {
          question: "Can I save my shipping address for future orders?",
          answer: "Yes, you can save multiple shipping addresses in your account for convenient checkout on future orders."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-playfair font-bold mb-6 text-center">Frequently Asked Questions</h1>
          
          <p className="text-muted-foreground mb-8 text-center">
            Find answers to common questions about our products, ordering, shipping, and more. 
            Can't find what you're looking for? <Link to="/contact" className="text-brand-teal hover:underline">Contact us</Link>.
          </p>
          
          <div className="space-y-8">
            {faqCategories.map((category, index) => (
              <div key={index} className="bg-card p-6 rounded-lg shadow-sm">
                <h2 className="text-xl font-medium mb-4">{category.category}</h2>
                
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((faq, faqIndex) => (
                    <AccordionItem key={faqIndex} value={`${index}-${faqIndex}`}>
                      <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
          
          <div className="mt-12 p-6 bg-muted rounded-lg text-center">
            <h2 className="text-xl font-medium mb-2">Still have questions?</h2>
            <p className="text-muted-foreground mb-4">
              Our customer service team is here to help. Reach out to us at boozersclub.yahoo.com
            </p>
            <Link 
              to="/contact" 
              className="inline-block bg-brand-teal text-white px-6 py-2 rounded-md hover:bg-brand-teal/90 transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default FAQ;
