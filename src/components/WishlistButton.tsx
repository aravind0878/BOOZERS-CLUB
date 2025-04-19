
import { useState, useEffect } from "react";
import { Heart, HeartOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/context/AuthContext";

interface WishlistButtonProps {
  productId: string;
  className?: string;
}

const WishlistButton = ({ productId, className }: WishlistButtonProps) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const { toast } = useToast();
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      checkWishlistStatus();
    }
  }, [user, productId]);

  const checkWishlistStatus = async () => {
    if (!user) return;

    const { data } = await supabase
      .from('wishlist_items')
      .select()
      .eq('user_id', user.id)
      .eq('product_id', productId)
      .maybeSingle();

    setIsWishlisted(!!data);
  };

  const toggleWishlist = async () => {
    if (!user) {
      toast({
        title: "Please login first",
        description: "You need to be logged in to add items to your wishlist",
        duration: 3000,
      });
      return;
    }

    try {
      if (isWishlisted) {
        await supabase
          .from('wishlist_items')
          .delete()
          .eq('user_id', user.id)
          .eq('product_id', productId);
      } else {
        await supabase
          .from('wishlist_items')
          .insert([{ user_id: user.id, product_id: productId }]);
      }

      setIsWishlisted(!isWishlisted);
      toast({
        title: isWishlisted ? "Removed from wishlist" : "Added to wishlist",
        duration: 2000,
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        duration: 3000,
      });
    }
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
