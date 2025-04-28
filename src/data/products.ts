import { Product } from "@/context/CartContext";

export const products: Product[] = [
  {
    id: "Arise-mgrey",
    name: "Arise Soft Printed T-shirt Milange-Grey", 
    price: 349,
    image: "/images/arise1.jpg",
    description: " Embrace a fresh start every day with The Everbloom Tee. Crafted for exceptional comfort and lasting wear, this t-shirt features a subtle yet inspiring Arise graphic. It's a gentle reminder of continuous growth and the beauty of new beginnings. Perfect for adding a touch of positive energy to your everyday style.",
    colors: ["#888888"],
    sizes: ["s", "m", "l", "xl" ],
    additionalImages: ["/images/arise2.jpg", "/images/arise3.jpg"]
  },
  {
    id: "onepiece black",
    name: "One Piece Black Graphic Red T-Shirt",
    price: 349,
    image: "/images/opr1.jpg",
    description: " Gear up with this eye-catching red t-shirt featuring the classic One Piece Jolly Roger logo. Made for comfort and perfect for expressing your fandom.",
    colors: ["#880000"],
    sizes: ["s", "m", "l"],
    additionalImages: ["/images/opr2.jpg"]
  },
  {
    id: "boozersclub white graphic tshirt",
    name: "Boozers club Graphic White T-Shirt",
    price: 349,
    image: "/images/bzw1.jpg",
    description: "Show off your fun side with this white t-shirt displaying the unique Boozers Club design. Comfortable and eye-catching.",
    colors: ["#FFFAF0"],
    sizes: ["s", "m", "l", "xl"],
    additionalImages: ["/images/bzw2.jpg"]
  },
  {
    id: "Arise-white",
    name: "Arise Soft Printed WhiteT-shirt",
    price: 349,
    image: "/images/arisew1.jpg",
    description: "Navigate the concrete jungle in style with our Urban Explorer tee. This premium shirt features a modern cityscape design that celebrates urban adventure and exploration. Made with comfort and durability in mind.",
    colors: ["#FFFAF0"],
    sizes: ["s", "m", "l", "xl"],
    additionalImages: ["/images/arisew2.jpg"]
  },
  {
    id: "boozersclub Black graphic tshirt",
    name: "Boozers club Graphic Black T-Shirt",
    price: 349,
    image:"/images/bzb1.jpg",
    description: "Show off your fun side with this white t-shirt displaying the unique Boozers Club design. Comfortable and eye-catching.",
    colors: ["#000000"],
    sizes: ["s", "m", "l"],
    additionalImages: ["/images/bzb2.jpg"]
  },
  {
    id: "onepiece White",
    name: "One Piece Black Graphic White T-Shirt",
    price: 349,
    image:"/images/opw1.jpg",
    description: "Explore the universe with our Cosmic Journey tee. This eye-catching design features a mesmerizing space-themed illustration that's sure to turn heads. Made from premium cotton for ultimate comfort and durability.",
    colors: ["#FFFAF0"],
    sizes: ["s", "m", "l", "xl"],
    additionalImages: ["/images/opw2.jpg"]
  },
  {
    id: "Bombay Supphair white",
    name: "The Connoisseur's Choice: Bombay Sapphire Graphic White T-Shirt",
    price: 349,
    image: "/images/bs1.jpg",
    description: " For those who appreciate the finer things, this light grey t-shirt subtly showcases your affinity for the iconic Bombay Sapphire brand. Crafted for comfort and designed with a touch of sophistication.",
    colors: ["#FFFAF0"],
    sizes: ["s", "m", "l", "xl"],
    additionalImages: ["/images/bs2.jpg"]
  },
  {
    id: "boozersclub navy blue graphic tshirt",
    name: "Boozers club Graphic Navy-Blue T-Shirt",
    price: 349,
    image: "/images/bzblue1.jpg",
    description: "Step back in time with our Retro Vibes tee. This nostalgic design captures the essence of vintage style with a modern twist. The perfect addition to any casual wardrobe, offering both comfort and character.",
    colors: ["#000080"],
    sizes: ["s", "m", "l", "xl"],
    additionalImages: ["/images/bzblue2.jpg"]
  },
  {
    id: "Bombay Supphair Red",
    name: "The Connoisseur's Choice: Bombay Sapphire Graphic Red T-Shirt",
    price: 349,
    image: "/images/bsr1.jpg",
    description: "Make a statement with our Urban Street tee. Features bold street art-inspired graphics and premium quality cotton fabric. Perfect for those who want to stand out with an edgy urban style.",
    colors: ["#880000"],
    sizes: ["s", "m", "l"],
    additionalImages: ["/images/bsr2.jpg", "/images/bsr3.jpg"]
  },
  {
    id: "BANKAI WARRIOR WHITE",
    name: "BANKAI Warrior White T-Shirt (Anime-Inspired)",
    price: 349,
    image: "/images/bw-w1.jpg",
    description: "Unleash your inner warrior with the BANKAI Warrior white T-Shirt, inspired by legendary anime battles!
Made from premium, breathable cotton, it offers unbeatable comfort with a stylish regular fit — perfect for anime fans, streetwear lovers, and anyone who lives life at full power.",
    colors: ["#FFFAF0"],
    sizes: ["s", "m", "l","XL"],
    additionalImages: ["/images/bw-w2.jpg"]
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products;
};

// Function to get related products (excludes current product)
export const getRelatedProducts = (currentProductId: string): Product[] => {
  return products
    .filter(product => product.id !== currentProductId)
    .slice(0, 4);
};
