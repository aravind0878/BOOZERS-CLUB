import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail } from "lucide-react";

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
              Guns Don't Need Agreement - Where Style Meets Attitude
            </p>
            
            <div className="flex space-x-4">
              <a href="#" className="p-2 rounded-full hover:bg-secondary transition">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-full hover:bg-secondary transition">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-full hover:bg-secondary transition">
                <Twitter className="h-5 w-5" />
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
              <li>
                <Link to="/products?category=bestsellers" className="hover:text-brand-teal transition">
                  Best Sellers
                </Link>
              </li>
              <li>
                <Link to="/products?category=sale" className="hover:text-brand-teal transition">
                  Sale
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
                <Link to="/faq" className="hover:text-brand-teal transition">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="hover:text-brand-teal transition">
                  Shipping & Returns
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
                <Link to="/blog" className="hover:text-brand-teal transition">
                  Blog
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

        <div className="border-t border-border mt-8 pt-8 text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} ThreadBoutique. All rights reserved.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-4 text-center">
        <p className="text-sm text-muted-foreground">
          Contact us: <a href="mailto:boozersclub.yahoo.com" className="hover:text-brand-teal transition">boozersclub.yahoo.com</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
