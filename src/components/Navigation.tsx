import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
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
  const location = useLocation();

  const handleCustomOrderClick = (e: React.MouseEvent) => {
    if (location.pathname !== '/') {
      return; // Let the Link component handle navigation
    }
    
    e.preventDefault();
    const element = document.getElementById('custom-order');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Add effect to scroll to top on route change
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [location.pathname, location.search]);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="mr-8">
              <span className="text-xl font-bold">
                BOOZERS<span className="text-brand-teal">CLUB</span>
              </span>
            </Link>
          </div>

          {/* Center Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-sm hover:text-brand-teal transition-all duration-300">
              HOME
            </Link>
            <Link to="/products" className="text-sm hover:text-brand-teal transition-all duration-300">
              SHOP ALL
            </Link>
            <Link to="/products?category=new" className="text-sm hover:text-brand-teal transition-all duration-300">
              NEW ARRIVALS
            </Link>
            <Link 
              to="/#custom-order" 
              onClick={handleCustomOrderClick}
              className="text-sm hover:text-brand-teal transition-all duration-300"
            >
              CUSTOM ORDER
            </Link>
          </nav>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            <Link to="/profile">
              <User className="h-5 w-5" />
            </Link>
            <Link to="/cart" className="relative">
              <ShoppingCart className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-brand-teal text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
        <SheetContent side="left">
          <nav className="flex flex-col space-y-4">
            <Link to="/" className="text-sm" onClick={() => setMobileMenuOpen(false)}>
              HOME
            </Link>
            <Link to="/products" className="text-sm" onClick={() => setMobileMenuOpen(false)}>
              SHOP ALL
            </Link>
            <Link to="/products?category=new" className="text-sm" onClick={() => setMobileMenuOpen(false)}>
              NEW ARRIVALS
            </Link>
            <Link 
              to="/#custom-order" 
              onClick={(e) => {
                handleCustomOrderClick(e);
                setMobileMenuOpen(false);
              }}
              className="text-sm"
            >
              CUSTOM ORDER
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default Navigation;
