import { PromoBannerProduct } from "@/types/promo";

export const promoBannerProducts: PromoBannerProduct[] = [
  {
    id: 1,
    name: "Smart Headphones",
    price: 2999,
    image: "headphones.jpg",
    vendor: "Electro Hub",
    discount: 45,
  },
  {
    id: 2,
    name: "Minimal Backpack",
    price: 1999,
    image: "backpack.jpg",
    vendor: "Style Shop",
    discount: 35,
  },
  {
    id: 3,
    name: "Wireless Speaker",
    price: 1599,
    image: "speaker.jpg",
    vendor: "Electro Hub",
    discount: 40,
  },
  {
    id: 4,
    name: "Pizza Combo",
    price: 999,
    image: "pizza.jpg",
    vendor: "Quick Meals",
    discount: 20,
  },
  {
    id: 5,
    name: "Smart Watch",
    price: 2499,
    image: "smartwatch.jpg",
    vendor: "Electro Hub",
    discount: 50,
  },
  {
    id: 6,
    name: "Gaming Chair",
    price: 4299,
    image: "gaming-chair.jpg",
    vendor: "Gamer Gear",
    discount: 30,
  },
];

export const promoConfig = {
  title: "MEGA END OF MONTH SALE",
  subtitle: "25 - 29 JULY",
  discount: "UPTO 80% OFF",
  featuredText: "FREE DELIVERY",
  freeShipping: true,
  backgroundColor: "bg-orange-500",
};
