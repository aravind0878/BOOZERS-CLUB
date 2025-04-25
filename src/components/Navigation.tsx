import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { Menu, ShoppingCart, User, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger
} from "@/components/ui/sheet";

const Navigation = () => {
  const { totalItems } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="py-4 border-b sticky top-0 z-50 bg-white">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="font-bold text-2xl">
          <span className="uppercase tracking-wider">Boozers</span>
          <span className="text-brand-teal uppercase tracking-wider">Club</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-sm font-medium hover:text-brand-teal transition-all duration-300 uppercase tracking-wider">
            Home
          </Link>
          <Link to="/products" className="text-sm font-medium hover:text-brand-teal transition-all duration-300 uppercase tracking-wider">
            Shop All
          </Link>
          <Link to="/products?category=new" className="text-sm font-medium hover:text-brand-teal transition-all duration-300 uppercase tracking-wider">
            New Arrivals
          </Link>
          <Link to="/products?category=bestsellers" className="text-sm font-medium hover:text-brand-teal transition-all duration-300 uppercase tracking-wider">
            Best Sellers
          </Link>
          <Link to="/contact" className="text-sm font-medium hover:text-brand-teal transition-all duration-300 uppercase tracking-wider">
            Contact
          </Link>
        </nav>

        {/* User Actions */}
        <div className="flex items-center space-x-4">
          <Link
            to="/profile"
            className="p-2 rounded-full hover:bg-secondary transition"
            title="My Profile"
          >
            <User className="h-5 w-5" />
          </Link>

          {/* Cart Icon with Item Count */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-brand-coral text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between py-4 border-b">
                  <h2 className="font-medium text-lg">Your Cart ({totalItems})</h2>
                </div>

                {totalItems === 0 ? (
                  <div className="flex-1 flex items-center justify-center flex-col">
                    <ShoppingCart className="h-12 w-12 text-muted-foreground mb-4" />
                    <p className="text-muted-foreground">Your cart is empty</p>
                    <Button asChild className="mt-4 bg-brand-teal hover:bg-brand-teal/90">
                      <Link to="/products">Shop Now</Link>
                    </Button>
                  </div>
                ) : (
                  <div className="flex-1 overflow-auto py-4">
                    {/* Cart items would be rendered here */}
                  </div>
                )}

                {totalItems > 0 && (
                  <div className="border-t py-4">
                    <Button asChild className="w-full bg-brand-teal hover:bg-brand-teal/90">
                      <Link to="/cart">View Cart</Link>
                    </Button>
                  </div>
                )}
              </div>
            </SheetContent>
          </Sheet>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden p-4 border-t bg-white">
          <nav className="flex flex-col space-y-4">
            <Link
              to="/"
              className="text-sm font-medium py-2 hover:text-brand-teal transition-all duration-300 uppercase tracking-wider"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/products"
              className="text-sm font-medium py-2 hover:text-brand-teal transition-all duration-300 uppercase tracking-wider"
              onClick={() => setMobileMenuOpen(false)}
            >
              Shop All
            </Link>
            <Link
              to="/products?category=new"
              className="text-sm font-medium py-2 hover:text-brand-teal transition-all duration-300 uppercase tracking-wider"
              onClick={() => setMobileMenuOpen(false)}
            >
              New Arrivals
            </Link>
            <Link
              to="/products?category=bestsellers"
              className="text-sm font-medium py-2 hover:text-brand-teal transition-all duration-300 uppercase tracking-wider"
              onClick={() => setMobileMenuOpen(false)}
            >
              Best Sellers
            </Link>
            <Link
              to="/contact"
              className="text-sm font-medium py-2 hover:text-brand-teal transition-all duration-300 uppercase tracking-wider"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navigation;
