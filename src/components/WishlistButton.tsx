
import { useState } from "react";
import { Heart, HeartOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

interface WishlistButtonProps {
  productId: string;
  className?: string;
}

const WishlistButton = ({ productId, className }: WishlistButtonProps) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const { toast } = useToast();

  const toggleWishlist = () => {
    setIsWishlisted(!isWishlisted);
    toast({
      title: isWishlisted ? "Removed from wishlist" : "Added to wishlist",
      duration: 2000,
    });
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      className={className}
      onClick={toggleWishlist}
      aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
    >
      {isWishlisted ? (
        <Heart className="h-5 w-5 fill-brand-coral text-brand-coral" />
      ) : (
        <HeartOff className="h-5 w-5" />
      )}
    </Button>
  );
};

export default WishlistButton;
