
import { Link } from "react-router-dom";
import { Product } from "@/context/CartContext";
import { cn } from "@/lib/utils";
import WishlistButton from "./WishlistButton";
import { formatIndianRupees } from "@/lib/formatters";

interface ProductCardProps {
  product: Product;
  className?: string;
}

const ProductCard = ({ product, className }: ProductCardProps) => {
  return (
    <Link
      to={`/product/${product.id}`}
      className={cn(
        "group flex flex-col overflow-hidden rounded-lg border border-white/10 bg-black/20 backdrop-blur-sm transition-all hover:shadow-lg hover:shadow-brand-teal/20 hover:border-brand-teal/30",
        className
      )}
    >
      <div className="relative aspect-square overflow-hidden bg-secondary">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {/* New badge if needed */}
        {product.id.includes('new') && (
          <div className="absolute top-2 right-2 bg-brand-teal text-white text-xs px-2 py-1 rounded shadow-lg shadow-brand-teal/50 animate-pulse">
            New
          </div>
        )}
        {/* Add Wishlist Button */}
        <div className="absolute top-2 left-2">
          <WishlistButton productId={product.id} />
        </div>
      </div>

      <div className="flex flex-col p-4">
        <h3 className="font-medium text-base text-white mb-1">
          {product.name}
        </h3>
        <p className="text-sm font-semibold text-brand-teal" style={{ textShadow: '0 0 5px rgba(42, 157, 143, 0.5)' }}>
          {formatIndianRupees(product.price)}
        </p>

        {/* Color variants preview */}
        {product.colors.length > 0 && (
          <div className="flex mt-2 space-x-1">
            {product.colors.slice(0, 4).map((color) => (
              <div
                key={color}
                className="w-3 h-3 rounded-full border border-gray-200"
                style={{ backgroundColor: color }}
              />
            ))}
            {product.colors.length > 4 && (
              <div className="w-3 h-3 flex items-center justify-center rounded-full bg-gray-100 text-[8px] font-medium">
                +{product.colors.length - 4}
              </div>
            )}
          </div>
        )}
      </div>
    </Link>
  );
};

export default ProductCard;
