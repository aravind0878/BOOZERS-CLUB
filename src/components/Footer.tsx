import { Link } from "react-router-dom";
import { Facebook, Instagram, whatsapp, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-brand-light border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="inline-block font-bold text-2xl mb-4">
              <span className="font-playfair">Boozers</span>
              <span className="text-brand-teal">Club</span>
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              We’re not just a brand, We're a movement.
              Fashion that defies trends and creates culture. 
            </p>
            
            <div className="flex space-x-4">
              <a href="#" className="p-2 rounded-full hover:bg-secondary transition">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/boozers_club?igsh=dWphc3NobW5kaXNr" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-secondary transition">
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://wa.me/918985909600"
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 rounded-full hover:bg-secondary transition"
              >
                <whatsapp className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Shop Links */}
          <div className="col-span-1">
            <h3 className="font-semibold text-base mb-4">Shop</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/products" className="hover:text-brand-teal transition">
                  All Products
                </Link>
              </li>
              <li>
                <Link to="/products?category=new" className="hover:text-brand-teal transition">
                  New Arrivals
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div className="col-span-1">
            <h3 className="font-semibold text-base mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/contact" className="hover:text-brand-teal transition">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/size-guide" className="hover:text-brand-teal transition">
                  Size Guide
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="col-span-1">
            <h3 className="font-semibold text-base mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="hover:text-brand-teal transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/sustainability" className="hover:text-brand-teal transition">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-brand-teal transition">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-brand-teal transition">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-4 text-center space-y-2">
          <p className="text-sm text-muted-foreground">
            Email us at: <a href="mailto:boozersclub@yahoo.com" className="hover:text-brand-teal transition">boozersclub@yahoo.com</a>
          </p>
          <p className="text-sm text-muted-foreground">
            WhatsApp: <a href="https://wa.me/918985909600" className="hover:text-brand-teal transition">+91 8985909600</a>
          </p>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-sm text-muted-foreground text-center">
          <p>&copy; GUNS DON'T NEED AGREEMENTS!</p>
          <p>&copy; {new Date().getFullYear()} BOOZER'S CLUB. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
