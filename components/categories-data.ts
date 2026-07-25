export type Subcategory = {
  id: string;
  name: string;
  icon: string;
  slug: string;
};

export type MainCategory = {
  id: string;
  name: string;
  icon: string;
  slug: string;
  subcategories: Subcategory[];
};

export const categoriesData: MainCategory[] = [
  {
    id: "electronics",
    name: "Electronics",
    icon: "📱",
    slug: "electronics",
    subcategories: [
      { id: "headphones", name: "Headphones", icon: "🎧", slug: "headphones" },
      { id: "speakers", name: "Speakers", icon: "🔊", slug: "speakers" },
      { id: "smartwatch", name: "Smart Watch", icon: "⌚", slug: "smartwatch" },
      { id: "gaming-chair", name: "Gaming Chair", icon: "🪑", slug: "gaming-chair" },
      { id: "laptop-stand", name: "Laptop Stand", icon: "💻", slug: "laptop-stand" },
    ],
  },
  {
    id: "fashion",
    name: "Fashion",
    icon: "👔",
    slug: "fashion",
    subcategories: [
      { id: "backpack", name: "Backpacks", icon: "🎒", slug: "backpack" },
      { id: "hoodies", name: "Hoodies", icon: "👕", slug: "hoodies" },
      { id: "sunglasses", name: "Sunglasses", icon: "😎", slug: "sunglasses" },
      { id: "sneakers", name: "Sneakers", icon: "👟", slug: "sneakers" },
    ],
  },
  {
    id: "food-dining",
    name: "Food & Dining",
    icon: "🍔",
    slug: "food-dining",
    subcategories: [
      { id: "pizza", name: "Pizza", icon: "🍕", slug: "pizza" },
      { id: "burger", name: "Burgers", icon: "🍔", slug: "burger" },
      { id: "juice", name: "Beverages", icon: "🥤", slug: "juice" },
      { id: "snacks", name: "Snacks", icon: "🍿", slug: "snacks" },
    ],
  },
  {
    id: "home-services",
    name: "Home & Services",
    icon: "🏠",
    slug: "home-services",
    subcategories: [
      { id: "cleaning", name: "Cleaning", icon: "🧹", slug: "cleaning" },
      { id: "delivery", name: "Delivery", icon: "🚚", slug: "delivery" },
      { id: "entertainment", name: "Entertainment", icon: "🎬", slug: "entertainment" },
      { id: "pet-care", name: "Pet Care", icon: "🐾", slug: "pet-care" },
    ],
  },
  {
    id: "groceries",
    name: "Groceries",
    icon: "🛒",
    slug: "groceries",
    subcategories: [
      { id: "coffee", name: "Coffee & Tea", icon: "☕", slug: "coffee" },
      { id: "snacks-grocery", name: "Snacks", icon: "🍯", slug: "snacks-grocery" },
    ],
  },
];
