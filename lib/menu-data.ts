export type CategoryId = "all" | "pizza" | "fried" | "appetizer" | "drink"

export type Badge = {
  label: string
  tone: "spicy" | "hot" | "new" | "veggie"
}

export type Product = {
  id: string
  title: string
  description: string
  price: number
  image: string
  category: Exclude<CategoryId, "all">
  badges?: Badge[]
  featured?: boolean
}

export const categories: { id: CategoryId; label: string }[] = [
  { id: "all", label: "همه" },
  { id: "pizza", label: "پیتزا" },
  { id: "fried", label: "سوخاری" },
  { id: "appetizer", label: "پیش‌غذا" },
  { id: "drink", label: "نوشیدنی" },
]

export const products: Product[] = [
  {
    id: "todd-special",
    title: "پیتزا پپرونی آتشین تاد",
    description: "پپرونی دودی، موتزارلای کش‌دار، فلفل چیلی و سس مخصوص تاد روی خمیر ترد سنگی",
    price: 489000,
    image: "/images/pizza-pepperoni.png",
    category: "pizza",
    featured: true,
    badges: [
      { label: "🔥 پرفروش", tone: "hot" },
      { label: "🌶️ تند", tone: "spicy" },
    ],
  },
  {
    id: "chicken-mushroom",
    title: "مرغ و قارچ",
    description: "فیله مرغ گریل، قارچ تازه و پنیر پیتزا",
    price: 412000,
    image: "/images/pizza-mushroom.png",
    category: "pizza",
    badges: [{ label: "⭐ محبوب", tone: "new" }],
  },
  {
    id: "veggie",
    title: "سبزیجات",
    description: "فلفل دلمه، زیتون، گوجه گیلاسی و ریحان",
    price: 365000,
    image: "/images/pizza-veggie.png",
    category: "pizza",
    badges: [{ label: "🌱 گیاهی", tone: "veggie" }],
  },
  {
    id: "fried-bucket",
    title: "سطل سوخاری کرانچی",
    description: "۶ تکه مرغ سوخاری با پوسته ترد طلایی، سیب‌زمینی و دو سس دلخواه",
    price: 545000,
    image: "/images/fried-chicken.png",
    category: "fried",
    featured: true,
    badges: [
      { label: "🔥 پرفروش", tone: "hot" },
      { label: "⭐ جدید", tone: "new" },
    ],
  },
  {
    id: "hot-strips",
    title: "استریپس تند",
    description: "۵ تکه فیله سوخاری با ادویه چیلی",
    price: 298000,
    image: "/images/chicken-strips.png",
    category: "fried",
    badges: [{ label: "🌶️ تند", tone: "spicy" }],
  },
  {
    id: "cheese-fries",
    title: "سیب‌زمینی پنیری",
    description: "سیب‌زمینی ترد، سس چدار و هالاپینو",
    price: 189000,
    image: "/images/fries.png",
    category: "appetizer",
    badges: [{ label: "🌶️ تند", tone: "spicy" }],
  },
  {
    id: "garlic-bread",
    title: "نان سیر",
    description: "نان برشته با کره سیر و موتزارلا",
    price: 149000,
    image: "/images/garlic-bread.png",
    category: "appetizer",
  },
  {
    id: "cola",
    title: "نوشابه یخ",
    description: "نوشابه کولا با یخ فراوان",
    price: 49000,
    image: "/images/cola.png",
    category: "drink",
  },
  {
    id: "lemonade",
    title: "لیموناد نعنا",
    description: "لیموی تازه، نعنا و یخ خرد شده",
    price: 89000,
    image: "/images/lemonade.png",
    category: "drink",
    badges: [{ label: "🌱 تازه", tone: "veggie" }],
  },
]

const tomanFormatter = new Intl.NumberFormat("fa-IR")

export function formatToman(value: number) {
  return `${tomanFormatter.format(value)} تومان`
}

export function toPersianDigits(value: number) {
  return tomanFormatter.format(value)
}
