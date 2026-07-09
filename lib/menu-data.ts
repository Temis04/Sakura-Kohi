export type Category = "Signature" | "Espresso" | "Pour Over" | "Tea" | "Pastry";

export type Size = { id: string; label: string; priceDelta: number };
export type Milk = { id: string; label: string; priceDelta: number };
export type Extra = { id: string; label: string; price: number };

export type MenuItem = {
  id: string;
  name: string;
  jp: string;
  category: Category;
  description: string;
  basePrice: number;
  customizable: boolean;
  tags?: string[];
};

export const sizes: Size[] = [
  { id: "short", label: "Short · 8oz", priceDelta: 0 },
  { id: "tall", label: "Tall · 12oz", priceDelta: 0.6 },
  { id: "grande", label: "Grande · 16oz", priceDelta: 1.1 },
];

export const milks: Milk[] = [
  { id: "whole", label: "Whole milk", priceDelta: 0 },
  { id: "oat", label: "Oat milk", priceDelta: 0.55 },
  { id: "soy", label: "Soy milk", priceDelta: 0.5 },
  { id: "none", label: "No milk", priceDelta: 0 },
];

export const extras: Extra[] = [
  { id: "matcha-swirl", label: "Matcha swirl", price: 0.75 },
  { id: "kuromitsu", label: "Kuromitsu drizzle", price: 0.65 },
  { id: "sakura-foam", label: "Sakura foam", price: 0.9 },
  { id: "extra-shot", label: "Extra espresso shot", price: 0.85 },
  { id: "yuzu-zest", label: "Yuzu zest", price: 0.5 },
];

export const menu: MenuItem[] = [
  {
    id: "sakura-latte",
    name: "Sakura Blossom Latte",
    jp: "桜ラテ",
    category: "Signature",
    description: "House espresso, steamed milk, cherry blossom syrup, sakura foam.",
    basePrice: 4.8,
    customizable: true,
    tags: ["Seasonal", "Signature"],
  },
  {
    id: "kuro-matcha",
    name: "Kuro Matcha",
    jp: "黒抹茶",
    category: "Signature",
    description: "Ceremonial matcha layered with kuromitsu black sugar syrup and oat milk.",
    basePrice: 5.2,
    customizable: true,
    tags: ["Signature"],
  },
  {
    id: "yuzu-americano",
    name: "Yuzu Mist Americano",
    jp: "柚子アメリカーノ",
    category: "Signature",
    description: "Double espresso, cold spring water, a whisper of yuzu zest, served over ice.",
    basePrice: 4.2,
    customizable: true,
    tags: ["Iced", "Signature"],
  },
  {
    id: "espresso",
    name: "Espresso",
    jp: "エスプレッソ",
    category: "Espresso",
    description: "Single origin, dark cacao and stone fruit notes. Pulled to order.",
    basePrice: 3.0,
    customizable: true,
  },
  {
    id: "flat-white",
    name: "Flat White",
    jp: "フラットホワイト",
    category: "Espresso",
    description: "Ristretto shots, velvet steamed milk, no foam ceremony.",
    basePrice: 4.1,
    customizable: true,
  },
  {
    id: "cortado",
    name: "Cortado",
    jp: "コルタード",
    category: "Espresso",
    description: "Equal parts espresso and warm milk. Quiet and direct.",
    basePrice: 3.8,
    customizable: true,
  },
  {
    id: "ethiopia-pourover",
    name: "Ethiopia Yirgacheffe",
    jp: "エチオピア",
    category: "Pour Over",
    description: "Hand poured, floral and bergamot, brewed a la minute at the counter.",
    basePrice: 5.5,
    customizable: false,
    tags: ["Single Origin"],
  },
  {
    id: "kyoto-pourover",
    name: "Digbeth Slow Drip",
    jp: "",
    category: "Pour Over",
    description: "Cold drip over 8 hours, dense and syrupy, served over a single ice sphere.",
    basePrice: 6.0,
    customizable: false,
    tags: ["Cold Brew"],
  },
  {
    id: "houjicha-latte",
    name: "Hojicha Latte",
    jp: "ほうじ茶ラテ",
    category: "Tea",
    description: "Roasted green tea, steamed milk, a note of toasted rice.",
    basePrice: 4.6,
    customizable: true,
  },
  {
    id: "genmaicha",
    name: "Genmaicha",
    jp: "玄米茶",
    category: "Tea",
    description: "Green tea and toasted rice, brewed loose leaf, served in a kyusu.",
    basePrice: 3.6,
    customizable: false,
  },
  {
    id: "dorayaki",
    name: "Dorayaki",
    jp: "どら焼き",
    category: "Pastry",
    description: "Two honey pancakes, sweet red bean, folded by hand each morning.",
    basePrice: 3.4,
    customizable: false,
  },
  {
    id: "matcha-basque",
    name: "Matcha Basque Cheesecake",
    jp: "抹茶バスク",
    category: "Pastry",
    description: "Burnt top, ceremonial matcha. No crust, just the cake.",
    basePrice: 5.0,
    customizable: false,
  },
];

export const categories: Category[] = ["Signature", "Espresso", "Pour Over", "Tea", "Pastry"];
