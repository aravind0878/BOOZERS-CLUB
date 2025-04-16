
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { getProductsByCategory, products } from "@/data/products";
import { Filter, X } from "lucide-react";

const Products = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category") || "all";
  const [displayedProducts, setDisplayedProducts] = useState(products);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  // Filter states
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100]);
  
  useEffect(() => {
    // Filter products based on the category
    let filteredProducts = getProductsByCategory(category);
    
    // Apply size filter if any sizes are selected
    if (selectedSizes.length > 0) {
      filteredProducts = filteredProducts.filter(product => 
        product.sizes.some(size => selectedSizes.includes(size))
      );
    }
    
    // Apply price filter
    filteredProducts = filteredProducts.filter(product => 
      product.price >= priceRange[0] && product.price <= priceRange[1]
    );
    
    setDisplayedProducts(filteredProducts);
  }, [category, selectedSizes, priceRange]);
  
  const toggleSize = (size: string) => {
    setSelectedSizes(prev => 
      prev.includes(size) 
        ? prev.filter(s => s !== size) 
        : [...prev, size]
    );
  };
  
  const resetFilters = () => {
    setSelectedSizes([]);
    setPriceRange([0, 100]);
  };
  
  const getCategoryTitle = () => {
    switch (category) {
      case 'new':
        return 'New Arrivals';
      case 'bestsellers':
        return 'Best Sellers';
      default:
        return 'All Products';
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-playfair font-bold">{getCategoryTitle()}</h1>
            
            <Button 
              variant="outline" 
              size="sm" 
              className="md:hidden"
              onClick={() => setIsFilterOpen(!isFilterOpen)}
            >
              {isFilterOpen ? <X className="mr-2 h-4 w-4" /> : <Filter className="mr-2 h-4 w-4" />}
              {isFilterOpen ? "Close" : "Filter"}
            </Button>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8">
            {/* Filters - Desktop (always visible) and Mobile (toggled) */}
            <aside 
              className={`md:w-64 bg-white rounded-lg border p-4 ${
                isFilterOpen ? 'block' : 'hidden md:block'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-medium">Filters</h2>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-xs h-8 px-2"
                  onClick={resetFilters}
                >
                  Reset
                </Button>
              </div>
              
              {/* Size Filter */}
              <div className="mb-6">
                <h3 className="text-sm font-medium mb-2">Size</h3>
                <div className="flex flex-wrap gap-2">
                  {['s', 'm', 'l', 'xl', 'xxl'].map(size => (
                    <Button
                      key={size}
                      variant={selectedSizes.includes(size) ? "default" : "outline"}
                      size="sm"
                      className={`
                        h-8 min-w-8 px-3 text-xs uppercase
                        ${selectedSizes.includes(size) ? 'bg-brand-teal hover:bg-brand-teal/90' : ''}
                      `}
                      onClick={() => toggleSize(size)}
                    >
                      {size}
                    </Button>
                  ))}
                </div>
              </div>
              
              {/* Price Filter */}
              <div>
                <h3 className="text-sm font-medium mb-2">Price Range</h3>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full"
                  />
                </div>
              </div>
            </aside>
            
            {/* Products Grid */}
            <div className="flex-1">
              {displayedProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {displayedProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <h3 className="text-lg font-medium mb-2">No products found</h3>
                  <p className="text-muted-foreground mb-4">
                    Try adjusting your filters or browse our entire collection.
                  </p>
                  <Button onClick={resetFilters}>
                    Reset Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Products;
