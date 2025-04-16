
import { useState } from "react";
import { Link } from "react-router-dom";
import { Minus, Plus, Trash2 } from "lucide-react";
import { CartItem as CartItemType, useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";

interface CartItemProps {
  item: CartItemType;
}

const CartItem = ({ item }: CartItemProps) => {
  const { product, quantity, size, color } = item;
  const { updateQuantity, removeFromCart } = useCart();
  const [isRemoving, setIsRemoving] = useState(false);

  const handleIncrement = () => {
    updateQuantity(product.id, quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      updateQuantity(product.id, quantity - 1);
    }
  };

  const handleRemove = () => {
    setIsRemoving(true);
    // Delay removal for animation
    setTimeout(() => {
      removeFromCart(product.id);
    }, 300);
  };

  return (
    <div 
      className={`flex border-b border-border py-4 transition-all ${
        isRemoving ? "opacity-0 transform -translate-x-4" : "opacity-100"
      }`}
    >
      {/* Product Image */}
      <Link to={`/product/${product.id}`} className="w-20 h-20 rounded-md overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="h-full w-full object-cover"
        />
      </Link>

      {/* Product Info */}
      <div className="ml-4 flex-1">
        <div className="flex justify-between">
          <Link to={`/product/${product.id}`} className="font-medium hover:text-brand-teal transition">
            {product.name}
          </Link>
          <span className="font-medium text-brand-teal">
            ${(product.price * quantity).toFixed(2)}
          </span>
        </div>

        <div className="mt-1 text-xs text-muted-foreground">
          <span className="capitalize">{color}</span>
          {size && <span> / Size {size.toUpperCase()}</span>}
        </div>

        <div className="mt-3 flex items-center justify-between">
          {/* Quantity Selector */}
          <div className="flex items-center">
            <Button
              variant="outline"
              size="icon"
              className="h-7 w-7 rounded-md"
              onClick={handleDecrement}
              disabled={quantity <= 1}
            >
              <Minus className="h-3 w-3" />
            </Button>
            <span className="w-8 text-center text-sm">{quantity}</span>
            <Button
              variant="outline"
              size="icon"
              className="h-7 w-7 rounded-md"
              onClick={handleIncrement}
            >
              <Plus className="h-3 w-3" />
            </Button>
          </div>

          {/* Remove Button */}
          <Button
            variant="ghost"
            size="icon"
            className="h-7 w-7 text-muted-foreground hover:text-destructive"
            onClick={handleRemove}
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
