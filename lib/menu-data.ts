
import menuData from "../public/data/menu.json";

export type CategoryId = "all" | "pizza" | "fried" | "burger" | "sandwich" | "salad" | "sides";
export type Badge = { label: string; tone: "spicy" | "hot" | "new" | "veggie" };
export type ProductSize = { label: string; price: number };
export type Product = {
  id: string;
  title: string;
  description: string;
  category: string;
  price: number;
  image: string;
  badges?: Badge[];
  sizes?: ProductSize[];
  featured?: boolean;
};

export const categories: { id: CategoryId; title: string; icon?: string }[] = [
  { id: "all", title: "همه" },
  { id: "pizza", title: "پیتزا", icon: "/images/icons/pizza.png" },
  { id: "fried", title: "سوخاری", icon: "/images/icons/fried.png" },
  { id: "burger", title: "برگر", icon: "/images/icons/burger.png" },
  { id: "sandwich", title: "ساندویچ", icon: "/images/icons/sandwich.png" },
  { id: "salad", title: "سالاد", icon: "/images/icons/salad.png" },
  { id: "sides", title: "پیش‌غذا", icon: "/images/icons/fries.png" },
];

export const products: Product[] = menuData.products as Product[];

export function formatToman(price: number) {
  return new Intl.NumberFormat("fa-IR").format(price) + " تومان";
}

export function toPersianDigits(str: string | number) {
  const farsiDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  return str.toString().replace(/\d/g, (x) => farsiDigits[parseInt(x)]);
}
