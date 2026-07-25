"use client";

import { createContext, useContext, useMemo, useState } from "react";
import type { CartItem } from "@/components/CartProvider";

export type OrderRecord = {
  id: number;
  customer: string;
  vendor: string;
  items: CartItem[];
  total: number;
  status: "Processing" | "Out for delivery" | "Delivered";
};

const initialOrders: OrderRecord[] = [
  {
    id: 10001,
    customer: "Ayesha Khan",
    vendor: "Electro Hub",
    items: [{ id: 5, name: "Smart Watch", price: 75, quantity: 1, vendor: "Electro Hub", image: "https://placehold.co/400x400?text=SmartWatch" }],
    total: 75,
    status: "Delivered",
  },
  {
    id: 10002,
    customer: "Bilal Ahmed",
    vendor: "Quick Meals",
    items: [{ id: 7, name: "Pizza Combo", price: 29, quantity: 2, vendor: "Quick Meals", image: "https://placehold.co/400x400?text=Pizza" }],
    total: 58,
    status: "Processing",
  },
  {
    id: 10003,
    customer: "Sana Malik",
    vendor: "Home Services",
    items: [{ id: 10, name: "Home Cleaning", price: 65, quantity: 1, vendor: "Home Services", image: "https://placehold.co/400x400?text=Cleaning" }],
    total: 65,
    status: "Out for delivery",
  },
];

type OrderContextValue = {
  orders: OrderRecord[];
  addOrder: (order: Omit<OrderRecord, "id">) => void;
  processingOrders: OrderRecord[];
};

const OrderContext = createContext<OrderContextValue | undefined>(undefined);

export function OrderProvider({ children }: { children: React.ReactNode }) {
  const [orders, setOrders] = useState<OrderRecord[]>(initialOrders);

  const addOrder = (order: Omit<OrderRecord, "id">) => {
    setOrders((current) => [
      { id: Date.now(), ...order },
      ...current,
    ]);
  };

  const processingOrders = useMemo(
    () => orders.filter((order) => order.status === "Processing" || order.status === "Out for delivery"),
    [orders]
  );

  return (
    <OrderContext.Provider value={{ orders, addOrder, processingOrders }}>
      {children}
    </OrderContext.Provider>
  );
}

export function useOrders() {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error("useOrders must be used within OrderProvider");
  }
  return context;
}
