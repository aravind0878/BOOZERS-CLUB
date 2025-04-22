
import { Product } from "@/context/CartContext";

export const products: Product[] = [
  {
    id: "tshirt-abstract-waves",
    name: "Abstract Waves Tee",
    price: 29.99,
    image: "/sample.jpeg/",
    description: "Express yourself with our Abstract Waves tee, featuring a unique wave pattern design printed on premium cotton. This comfortable, stylish t-shirt is perfect for casual outings or making a subtle artistic statement.",
    colors: ["#264653", "#2A9D8F", "#E9C46A"],
    sizes: ["s", "m", "l", "xl", "xxl"]
  },
  {
    id: "tshirt-mountain-sunset",
    name: "Mountain Sunset Graphic Tee",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "Capture the beauty of nature with our Mountain Sunset graphic tee. This premium shirt features a stunning mountain silhouette against a vibrant sunset, printed using eco-friendly inks on 100% organic cotton.",
    colors: ["#264653", "#E76F51", "#F4A261", "#000000"],
    sizes: ["s", "m", "l", "xl"]
  },
  {
    id: "tshirt-geometric-minimal",
    name: "Geometric Minimal Tee",
    price: 27.99,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "Embrace modern minimalism with our Geometric tee. Featuring a clean, contemporary design with subtle geometric elements, this shirt is perfect for those who appreciate understated style and exceptional comfort.",
    colors: ["#FFFFFF", "#000000", "#E9C46A"],
    sizes: ["s", "m", "l", "xl", "xxl"]
  },
  {
    id: "tshirt-urban-explorer",
    name: "Urban Explorer Tee",
    price: 32.99,
    image: "https://images.unsplash.com/photo-1503341733017-1901578f9f1e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "Navigate the concrete jungle in style with our Urban Explorer tee. This premium shirt features a modern cityscape design that celebrates urban adventure and exploration. Made with comfort and durability in mind.",
    colors: ["#264653", "#2A9D8F", "#F4A261", "#000000"],
    sizes: ["s", "m", "l", "xl"]
  },
  {
    id: "new-tshirt-botanical-dreams",
    name: "Botanical Dreams Tee",
    price: 36.99,
    image: "https://images.unsplash.com/photo-1571455786673-9d9d6c194f90?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "Bring nature's beauty to your wardrobe with our Botanical Dreams tee. This stunning design features intricate plant illustrations that celebrate the natural world. Printed on sustainable cotton using eco-friendly methods.",
    colors: ["#FFFFFF", "#2A9D8F", "#264653"],
    sizes: ["s", "m", "l", "xl", "xxl"]
  },
  {
    id: "new-tshirt-cosmic-journey",
    name: "Cosmic Journey Tee",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "Explore the universe with our Cosmic Journey tee. This eye-catching design features a mesmerizing space-themed illustration that's sure to turn heads. Made from premium cotton for ultimate comfort and durability.",
    colors: ["#000000", "#264653", "#E76F51"],
    sizes: ["s", "m", "l", "xl"]
  },
  {
    id: "tshirt-retro-vibes",
    name: "Retro Vibes Tee",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1589902860314-e910697dea18?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "Step back in time with our Retro Vibes tee. This nostalgic design captures the essence of vintage style with a modern twist. The perfect addition to any casual wardrobe, offering both comfort and character.",
    colors: ["#F4A261", "#E76F51", "#E9C46A", "#FFFFFF"],
    sizes: ["s", "m", "l", "xl", "xxl"]
  },
  {
    id: "tshirt-ocean-waves",
    name: "Ocean Waves Tee",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1578766264605-c12d2a1b6432?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "Capture the serene power of the ocean with our Ocean Waves tee. This calming design features stylized wave patterns that evoke the peaceful rhythm of the sea. Printed on ultra-soft cotton for maximum comfort.",
    colors: ["#264653", "#2A9D8F", "#FFFFFF"],
    sizes: ["s", "m", "l", "xl"]
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getNewArrivals = (): Product[] => {
  return products.filter(product => product.id.includes('new'));
};

export const getBestSellers = (): Product[] => {
  // For demo purposes, just return some products as "best sellers"
  return products.slice(0, 4);
};

export const getProductsByCategory = (category: string): Product[] => {
  switch (category) {
    case 'new':
      return getNewArrivals();
    case 'bestsellers':
      return getBestSellers();
    default:
      return products;
  }
};

// Function to get related products (excludes current product)
export const getRelatedProducts = (currentProductId: string): Product[] => {
  return products
    .filter(product => product.id !== currentProductId)
    .slice(0, 4);
};
