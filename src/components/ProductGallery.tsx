
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface ProductGalleryProps {
  images: string;
  productName: string;
}

const ProductGallery = ({ images, productName }: ProductGalleryProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  if (!images.length) return null;

  return (
    <div className="relative">
      {/* Main large image */}
      <div className="aspect-square relative bg-secondary rounded-lg overflow-hidden">
        <img
          src={images[currentIndex]}
          alt={`${productName} - Image ${currentIndex + 1}`}
          className="h-full w-full object-cover"
        />
        
        {/* Navigation arrows (display on larger screens and on hover) */}
        {images.length > 1 && (
          <>
            <Button
              variant="secondary"
              size="icon"
              className="absolute left-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 md:opacity-80 hover:opacity-100 transition"
              onClick={handlePrevious}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="secondary"
              size="icon"
              className="absolute right-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 md:opacity-80 hover:opacity-100 transition"
              onClick={handleNext}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </>
        )}
      </div>

      {/* Thumbnail gallery */}
      {images.length > 1 && (
        <div className="flex mt-4 space-x-2 overflow-x-auto py-1">
          {images.map((image, index) => (
            <button
              key={index}
              className={cn(
                "w-16 h-16 rounded-md overflow-hidden border-2 transition",
                index === currentIndex 
                  ? "border-brand-teal" 
                  : "border-transparent hover:border-gray-300"
              )}
              onClick={() => setCurrentIndex(index)}
            >
              <img
                src={image}
                alt={`${productName} - Thumbnail ${index + 1}`}
                className="h-full w-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductGallery;
