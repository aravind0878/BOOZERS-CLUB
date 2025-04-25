
import { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProductGallery from "@/components/ProductGallery";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getProductById, getRelatedProducts } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { Minus, Plus, ShoppingBag } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { addToCart } = useCart();

  // Get product details
  const product = id ? getProductById(id) : undefined;
  const relatedProducts = id ? getRelatedProducts(id) : [];

  // State for product options
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(product?.colors[0] || "");
  const [selectedSize, setSelectedSize] = useState(product?.sizes[0] || "");

  // Handle quantity changes
  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  // Handle add to cart
  const handleAddToCart = () => {
    if (!product) return;

    addToCart(product, quantity, selectedSize, selectedColor);

    toast({
      title: "Added to cart",
      description: `${product.name} (${selectedSize.toUpperCase()}, Qty: ${quantity}) has been added to your cart.`,
      duration: 3000,
    });
  };

  // If product not found
  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-semibold mb-4">Product Not Found</h1>
            <p className="text-muted-foreground mb-6">
              The product you're looking for doesn't exist or has been removed.
            </p>
            <Button onClick={() => navigate("/products")}>
              Browse Products
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Create array of product images using the product's main image and additionalImages
  const productImages = [
    product.image,
    ...(product.additionalImages || [])
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          {/* Breadcrumbs */}
          <div className="text-sm text-muted-foreground mb-6">
            <Link to="/" className="hover:text-brand-teal">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/products" className="hover:text-brand-teal">Products</Link>
            <span className="mx-2">/</span>
            <span>{product.name}</span>
          </div>

          {/* Product Detail */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Product Gallery */}
            <div>
              <ProductGallery images={productImages} productName={product.name} />
            </div>

            {/* Product Info */}
            <div>
              <h1 className="text-3xl font-playfair font-bold mb-2">
                {product.name}
              </h1>
              <div className="text-2xl font-medium text-brand-teal mb-4">
                ₹{product.price.toFixed(2)}
              </div>

              {/* Product Description */}
              <p className="text-muted-foreground mb-6">
                {product.description}
              </p>

              <div className="space-y-6">
                {/* Color Selection */}
                <div>
                  <h3 className="text-sm font-medium mb-2">Color</h3>
                  <div className="flex gap-2">
                    {product.colors.map((color) => (
                      <button
                        key={color}
                        className={`w-8 h-8 rounded-full border-2 transition ${
                          selectedColor === color
                            ? 'border-brand-teal'
                            : 'border-transparent hover:border-gray-300'
                        }`}
                        style={{ backgroundColor: color }}
                        onClick={() => setSelectedColor(color)}
                        aria-label={`Select color ${color}`}
                      />
                    ))}
                  </div>
                </div>

                {/* Size Selection */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-sm font-medium">Size</h3>
                    <Link to="/size-guide" className="text-xs text-brand-teal hover:underline">
                      Size Guide
                    </Link>
                  </div>
                  <Select
                    value={selectedSize}
                    onValueChange={setSelectedSize}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select size" />
                    </SelectTrigger>
                    <SelectContent>
                      {product.sizes.map((size) => (
                        <SelectItem key={size} value={size} className="uppercase">
                          {size.toUpperCase()}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Quantity Selector */}
                <div>
                  <h3 className="text-sm font-medium mb-2">Quantity</h3>
                  <div className="flex items-center">
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-10 w-10 rounded-r-none"
                      onClick={decrementQuantity}
                      disabled={quantity <= 1}
                    >
                      <Minus className="h-3 w-3" />
                    </Button>
                    <div className="h-10 w-12 flex items-center justify-center border-t border-b">
                      {quantity}
                    </div>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-10 w-10 rounded-l-none"
                      onClick={incrementQuantity}
                    >
                      <Plus className="h-3 w-3" />
                    </Button>
                  </div>
                </div>

                {/* Add to Cart Button */}
                <Button
                  className="w-full py-6 bg-brand-teal hover:bg-brand-teal/90"
                  onClick={handleAddToCart}
                >
                  <ShoppingBag className="mr-2 h-5 w-5" />
                  Add to Cart
                </Button>

                {/* Additional Details */}
                <div className="border-t pt-6 text-sm space-y-2">
                  <div className="flex">
                    <span className="w-24 font-medium">Material:</span>
                    <span className="text-muted-foreground">100% Organic Cotton</span>
                  </div>
                  <div className="flex">
                    <span className="w-24 font-medium">Care:</span>
                    <span className="text-muted-foreground">Machine wash cold, tumble dry low</span>
                  </div>
                  <div className="flex">
                    <span className="w-24 font-medium">Shipping:</span>
                    <span className="text-muted-foreground">Free shipping on orders over $50</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Related Products */}
          <div className="border-t pt-12">
            <h2 className="text-2xl font-playfair font-bold mb-8">You May Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;
