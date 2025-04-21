
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
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      checkWishlistStatus();
    } else {
      setIsWishlisted(false);
    }
  }, [user, productId]);

  const checkWishlistStatus = async () => {
    if (!user) return;

    try {
      setIsLoading(true);
      const { data, error } = await supabase
        .from('wishlist_items')
        .select()
        .eq('user_id', user.id)
        .eq('product_id', productId)
        .maybeSingle();

      if (error) {
        console.error("Error checking wishlist status:", error);
      } else {
        setIsWishlisted(!!data);
      }
    } catch (err) {
      console.error("Error in wishlist check:", err);
    } finally {
      setIsLoading(false);
    }
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
      setIsLoading(true);
      
      if (isWishlisted) {
        // Remove from wishlist
        const { error } = await supabase
          .from('wishlist_items')
          .delete()
          .eq('user_id', user.id)
          .eq('product_id', productId);

        if (error) throw error;
        
        setIsWishlisted(false);
        toast({
          title: "Removed from wishlist",
          duration: 2000,
        });
      } else {
        // Add to wishlist
        const { error } = await supabase
          .from('wishlist_items')
          .insert([{ 
            user_id: user.id, 
            product_id: productId 
          }]);

        if (error) {
          // Check if it's a unique constraint error (item already in wishlist)
          if (error.code === '23505') {
            toast({
              title: "Item already in wishlist",
              duration: 2000,
            });
            setIsWishlisted(true);
            return;
          }
          throw error;
        }
        
        setIsWishlisted(true);
        toast({
          title: "Added to wishlist",
          duration: 2000,
        });
      }
    } catch (error) {
      console.error("Wishlist operation error:", error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        duration: 3000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      className={className}
      onClick={toggleWishlist}
      disabled={isLoading}
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
