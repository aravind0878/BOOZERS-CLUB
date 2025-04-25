
import { Product } from "@/context/CartContext";

export const products: Product[] = [
  {
    id: "arise1",
    name: "Arise Mélange Gray T-Shirt",
    price: 349,
    image: "/images/arise1.jpg",
    description: "Experience comfort and style with our Mélange Gray T-Shirt. Made from a premium cotton-blend fabric, this tee offers a relaxed fit, subtle texture, and versatile look perfect for everyday wear. Dress it up or keep it casual — it’s a must-have essential in any wardrobe.

",
   
    sizes: ["s", "m", "l", "xl" ],
    additionalImages: ["/images/arise2.jpg", "/images/arise3.jpg"]
  },
  {
    id: "opr1",
    name: "One Piece Jolly Roger Red T-Shirt",
    price: 349,
    image: "/images/opr1.jpg",
    description: "Show your love for the globally popular anime and manga series One Piece with this vibrant red t-shirt, a comfortable and stylish way to express your fandom. Featuring the iconic Jolly Roger, the skull and crossbones symbol of the Straw Hat Pirates, this shirt is a must-have for any fan.This t-shirt is typically crafted from a soft and breathable fabric.",
   
    sizes: ["s", "m", "l", "xl"],
    additionalImages: ["/images/opr2.jpg"]
  },
  {
    id: "bzw1",
    name: "Boozers Club Graphic White T-Shirt",
    price: 349,
    image: "/images/bzw1.jpg",
    description: "Show off a cool and casual vibe with this white t-shirt featuring a vibrant graphic that reads "Boozers Club" This tee is perfect for everyday wear and adding a touch of urban style to your look.",
    
    sizes: ["s", "m", "l", "xl"],
    additionalImages: ["/images/bzw2.jpg"]
  },
  {
    id: "arisew1",
    name: "Arise White T-shirt,
    price: 349,
    image: "/images/arisew1.jpg",
    description: "Experience comfort and style with our Mélange Gray T-Shirt. Made from a premium cotton-blend fabric, this tee offers a relaxed fit, subtle texture, and versatile look perfect for everyday wear. Dress it up or keep it casual — it’s a must-have essential in any wardrobe.",
    
    sizes: ["s", "m", "l", "xl"],
    additionalImages: ["/images/arisew2.jpg"]
  },
  {
    id: "bzb1",
    name: "Boozers Club Graphic Black T-Shirt",
    price: 349,
    image:"/images/bzb1.jpg",
    description: "Show off a cool and casual vibe with this white t-shirt featuring a vibrant graphic that reads "Boozers Club" This tee is perfect for everyday wear and adding a touch of urban style to your look.",
   
    sizes: ["s", "m", "l", "xl"],
    additionalImages: ["/images/bzb2.jpg"]
  },
  {
    id: "opw1",
    name: "One Piece Jolly Roger White T-Shirt",
    price: 349,
    image:"/images/opw1.jpg",
    description: "Show your love for the globally popular anime and manga series One Piece with this vibrant red t-shirt, a comfortable and stylish way to express your fandom. Featuring the iconic Jolly Roger, the skull and crossbones symbol of the Straw Hat Pirates, this shirt is a must-have for any fan.This t-shirt is typically crafted from a soft and breathable fabric.",
   
    sizes: ["s", "m", "l", "xl"],
    additionalImages: ["/images/opw2.jpg"]
  },
  {
    id: "bs1",
    name: "Bombay Sapphire Graphic Milange Gray T-Shirt",
    price: 349,
    image: "/images/bs1.jpg",
    description: "Show your appreciation for the iconic Bombay Sapphire gin with this stylish gray t-shirt. Featuring the distinctive Bombay Sapphire logo, this tee offers a subtle yet sophisticated way to express your taste. It's a comfortable and casual piece perfect for everyday wear.",
   
    sizes: ["s", "m", "l", "xl"],
    additionalImages: ["/images/bs2.jpg"]
  },
  {
    id: "bzblue1",
    name: "Boozers Club Graphic Navy-Blue T-Shirt",
    price: 349,
    image: "/images/bzblue1.jpg",
    description: "Show off a cool and casual vibe with this white t-shirt featuring a vibrant graphic that reads "Boozers Club" This tee is perfect for everyday wear and adding a touch of urban style to your look.",
   
    sizes: ["s", "m", "l", "xl"],
    additionalImages: ["/images/bzblue2.jpg"]
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
