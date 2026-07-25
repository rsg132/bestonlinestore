"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

export interface CartItem {
  id: number;
  name: string;
  price: number;
  vendor: string;
  image: string;
  quantity: number;
}

type CartContextType = {
  items: CartItem[];
  total: number;
  isCartOpen: boolean;

  addItem: (item: Omit<CartItem, "quantity">) => void;

  removeItem: (id: number) => void;

  increaseQuantity: (id: number) => void;

  decreaseQuantity: (id: number) => void;

  clearCart: () => void;

  openCart: () => void;

  closeCart: () => void;
};

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({
  children,
}: {
  children: React.ReactNode;
}) {

  const [items, setItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {

    const cart = localStorage.getItem("cart");

    if (cart) {
      setItems(JSON.parse(cart));
    }

  }, []);

  useEffect(() => {

    localStorage.setItem("cart", JSON.stringify(items));

  }, [items]);

  function addItem(item: Omit<CartItem, "quantity">) {

    setIsCartOpen(true);

    setItems((current) => {

      const exists = current.find((i) => i.id === item.id);

      if (exists) {

        const updatedItem = {
          ...exists,
          quantity: exists.quantity + 1,
        };

        return [
          updatedItem,
          ...current.filter((i) => i.id !== item.id),
        ];

      }

      return [

        {
          ...item,
          quantity: 1,
        },

        ...current,

      ];

    });

  }

  function removeItem(id: number) {

    setItems((current) =>
      current.filter((item) => item.id !== id)
    );

  }

  function increaseQuantity(id: number) {

    setItems((current) =>
      current.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );

  }

  function decreaseQuantity(id: number) {

    setItems((current) =>
      current
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );

  }

  function clearCart() {

    setItems([]);

  }

  function openCart() {

    setIsCartOpen(true);

  }

  function closeCart() {

    setIsCartOpen(false);

  }

  const total = useMemo(() => {

    return items.reduce(

      (sum, item) =>

        sum + item.price * item.quantity,

      0

    );

  }, [items]);

  return (

    <CartContext.Provider

      value={{

        items,

        total,

        isCartOpen,

        addItem,

        removeItem,

        increaseQuantity,

        decreaseQuantity,

        clearCart,

        openCart,

        closeCart,

      }}

    >

      {children}

    </CartContext.Provider>

  );

}

export function useCart() {

  const context = useContext(CartContext);

  if (!context) {

    throw new Error("useCart must be used inside CartProvider");

  }

  return context;

}
