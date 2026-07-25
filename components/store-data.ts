export type Product = {
  id: number;
  name: string;
  price: number;
  vendor: string;
  category: string;
};

export const products: Product[] = [
  { id: 1, name: "Smart Headphones", price: 89, vendor: "Electro Hub", category: "Electronics" },
  { id: 2, name: "Minimal Backpack", price: 59, vendor: "Style Shop", category: "Fashion" },
  { id: 3, name: "Cozy Hoodie", price: 45, vendor: "Style Shop", category: "Fashion" },
  { id: 4, name: "Wireless Speaker", price: 48, vendor: "Electro Hub", category: "Electronics" },
  { id: 5, name: "Smart Watch", price: 75, vendor: "Electro Hub", category: "Electronics" },
  { id: 6, name: "Sunglasses Set", price: 34, vendor: "Style Shop", category: "Fashion" },
  { id: 7, name: "Pizza Combo", price: 29, vendor: "Quick Meals", category: "Fast Food" },
  { id: 8, name: "Burger Meal", price: 24, vendor: "Quick Meals", category: "Fast Food" },
  { id: 9, name: "Express Delivery", price: 12, vendor: "Delivery Pros", category: "Services" },
  { id: 10, name: "Home Cleaning", price: 65, vendor: "Home Services", category: "Services" },
  { id: 11, name: "Coffee Pack", price: 18, vendor: "Cafe Corner", category: "Groceries" },
  { id: 12, name: "Movie Ticket", price: 14, vendor: "Entertainment Co.", category: "Services" },
  { id: 13, name: "Gaming Chair", price: 129, vendor: "Gamer Gear", category: "Electronics" },
  { id: 14, name: "Fashion Sneakers", price: 62, vendor: "Style Shop", category: "Fashion" },
  { id: 15, name: "Juice Bundle", price: 22, vendor: "Juice Bar", category: "Groceries" },
  { id: 16, name: "Snack Box", price: 16, vendor: "Quick Meals", category: "Fast Food" },
  { id: 17, name: "Laptop Stand", price: 39, vendor: "Electro Hub", category: "Electronics" },
  { id: 18, name: "Pet Care Kit", price: 28, vendor: "Pet Care Plus", category: "Health" },
];

export const vendorName = "Electro Hub";

export const getVendorProducts = () => products.filter((product) => product.vendor === vendorName);
