
import { Product } from "@/context/CartContext";

export const products: Product[] = [
  {
    id: "tshirt-abstract-waves",
    name: "Arise Tee Red", 
    price: 349,
    image: "/images/arise1.jpg",
    description: "Express yourself with our Abstract Waves tee, featuring a unique wave pattern design printed on premium cotton. This comfortable, stylish t-shirt is perfect for casual outings or making a subtle artistic statement.",
    colors: ["#264653", "#2A9D8F", "#E9C46A"],
    sizes: ["s", "m", "l", "xl" ],
    additionalImages: ["/images/arise2.jpg", "/images/arise3.jpg"]
  },
  {
    id: "tshirt-mountain-sunset",
    name: "TShirt",
    price: 349,
    image: "/images/opr1.jpg",
    description: "Capture the beauty of nature with our Mountain Sunset graphic tee. This premium shirt features a stunning mountain silhouette against a vibrant sunset, printed using eco-friendly inks on 100% organic cotton.",
    colors: ["#264653", "#E76F51", "#F4A261", "#000000"],
    sizes: ["s", "m", "l", "xl"],
    additionalImages: ["/images/opr2.jpg"]
  },
  {
    id: "tshirt-geometric-minimal",
    name: "Geometric Minimal Tee",
    price: 349,
    image: "/images/bzw1.jpg",
    description: "Embrace modern minimalism with our Geometric tee. Featuring a clean, contemporary design with subtle geometric elements, this shirt is perfect for those who appreciate understated style and exceptional comfort.",
    colors: ["#FFFFFF", "#000000", "#E9C46A"],
    sizes: ["s", "m", "l", "xl"],
    additionalImages: ["/images/bzw2.jpg"]
  },
  {
    id: "tshirt-urban-explorer",
    name: "Urban Explorer Tee",
    price: 349,
    image: "/images/arisew1.jpg",
    description: "Navigate the concrete jungle in style with our Urban Explorer tee. This premium shirt features a modern cityscape design that celebrates urban adventure and exploration. Made with comfort and durability in mind.",
    colors: ["#264653", "#2A9D8F", "#F4A261", "#000000"],
    sizes: ["s", "m", "l", "xl"],
    additionalImages: ["/images/arisew2.jpg"]
  },
  {
    id: "new-tshirt-botanical-dreams",
    name: "Botanical Dreams Tee",
    price: 349,
    image:"/images/bzb1.jpg",
    description: "Bring nature's beauty to your wardrobe with our Botanical Dreams tee. This stunning design features intricate plant illustrations that celebrate the natural world. Printed on sustainable cotton using eco-friendly methods.",
    colors: ["#FFFFFF", "#2A9D8F", "#264653"],
    sizes: ["s", "m", "l", "xl"],
    additionalImages: ["/images/bzb2.jpg"]
  },
  {
    id: "new-tshirt-cosmic-journey",
    name: "Cosmic Journey Tee",
    price: 349,
    image:"/images/opw1.jpg",
    description: "Explore the universe with our Cosmic Journey tee. This eye-catching design features a mesmerizing space-themed illustration that's sure to turn heads. Made from premium cotton for ultimate comfort and durability.",
    colors: ["#000000", "#264653", "#E76F51"],
    sizes: ["s", "m", "l", "xl"],
    additionalImages: ["/images/opw2.jpg"]
  },
  {
    id: "7",
    name: "Cosmic Journey Tee",
    price: 349,
    image: "/images/bs1.jpg",
    description: "Explore the universe with our Cosmic Journey tee. This eye-catching design features a mesmerizing space-themed illustration that's sure to turn heads. Made from premium cotton for ultimate comfort and durability.",
    colors: ["#000000", "#264653", "#E76F51"],
    sizes: ["s", "m", "l", "xl"],
    additionalImages: ["/images/bs2.jpg"]
  },
  {
    id: "tshirt-retro-vibes",
    name: "Retro Vibes Tee",
    price: 349,
    image: "/images/bzblue1.jpg",
    description: "Step back in time with our Retro Vibes tee. This nostalgic design captures the essence of vintage style with a modern twist. The perfect addition to any casual wardrobe, offering both comfort and character.",
    colors: ["#F4A261", "#E76F51", "#E9C46A", "#FFFFFF"],
    sizes: ["s", "m", "l", "xl"],
    additionalImages: ["/images/bzblue2.jpg"]
  },
  {
    id: "new-bsr",
    name: "bonbay saphire tee",
    price: 349,
    image: "/images/bsr1.jpg",
    description: "Make a statement with our Urban Street tee. Features bold street art-inspired graphics and premium quality cotton fabric. Perfect for those who want to stand out with an edgy urban style.",
    colors: ["#000000", "#FFFFFF", "#2A9D8F"],
    sizes: ["s", "m", "l", "xl"],
    additionalImages: ["/images/bsr2.jpg", "/images/bsr3.jpg"]
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
