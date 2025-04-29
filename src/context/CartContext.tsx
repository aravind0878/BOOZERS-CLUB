
import React, { createContext, useContext, useState } from 'react';

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description?: string;
  sizes: string[];
  additionalImages?: string[];
}

export type CartItem = {
  product: Product;
  quantity: number;
  size: string;
};

type CartContextType = {
  items: CartItem[];
  addToCart: (product: Product, quantity: number, size: string) => void;
  removeFromCart: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [totalItems, setTotalItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  React.useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setItems(JSON.parse(savedCart));
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(items));
    setTotalItems(items.reduce((sum, item) => sum + item.quantity, 0));
    setTotalPrice(items.reduce((sum, item) => sum + (item.product.price * item.quantity), 0));
  }, [items]);

  const addToCart = (product: Product, quantity: number, size: string) => {
    setItems(prevItems => {
      const existingItemIndex = prevItems.findIndex(
        item => item.product.id === product.id && item.size === size
      );

      if (existingItemIndex > -1) {
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex].quantity += quantity;
        return updatedItems;
      } else {
        return [...prevItems, { product, quantity, size }];
      }
    });
  };

  const removeFromCart = (itemId: string) => {
    setItems(prevItems => prevItems.filter(item => item.product.id !== itemId));
  };

  const updateQuantity = (itemId: string, quantity: number) => {
    setItems(prevItems =>
      prevItems.map(item =>
        item.product.id === itemId
          ? { ...item, quantity: Math.max(1, quantity) }
          : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  return (
    <CartContext.Provider 
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
