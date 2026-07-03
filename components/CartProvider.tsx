"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

type CartContextValue = {
  items: CartItem[];
  total: number;
  adminEmail: string;
  addItem: (item: Omit<CartItem, "quantity">) => void;
  removeItem: (id: number) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextValue | undefined>(undefined);
const ADMIN_EMAIL = "orders@bestonlinestore.com";

function getInitialCart() {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem("bestonlinestore-cart");
    return raw ? (JSON.parse(raw) as CartItem[]) : [];
  } catch {
    return [];
  }
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    setItems(getInitialCart());
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem("bestonlinestore-cart", JSON.stringify(items));
    }
  }, [items]);

  const addItem = (item: Omit<CartItem, "quantity">) => {
    setItems((current) => {
      const existing = current.find((cartItem) => cartItem.id === item.id);
      if (existing) {
        return current.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...current, { ...item, quantity: 1 }];
    });
  };

  const removeItem = (id: number) => {
    setItems((current) => current.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setItems([]);
  };

  const total = useMemo(
    () => items.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [items]
  );

  return (
    <CartContext.Provider value={{ items, total, adminEmail: ADMIN_EMAIL, addItem, removeItem, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }
  return context;
}
