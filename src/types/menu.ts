export type MenuCategory =
  | "desayunos"
  | "brunch"
  | "cafeteria"
  | "panini"
  | "arepas"
  | "sabores-latinos"
  | "dulces"
  | "bebidas"
  | "cocteleria"
  | "ensaladas"
  | "infantil"
  | "karaoke"
  | "combos"
  | "delivery";

export type MenuTag =
  | "popular"
  | "vegetarian"
  | "vegan"
  | "spicy"
  | "new"
  | "signature"
  | "hero"
  | "viral"
  | "alcohol"
  | "seasonal"
  | "delivery-friendly";

export interface MenuItem {
  id: string;
  name: string;
  nameIt?: string;
  description: string;
  descriptionIt?: string;
  price: number;
  category: MenuCategory;
  image?: string;
  tags: MenuTag[];
  isPopular?: boolean;
  isVegetarian?: boolean;
  isNew?: boolean;
  allergens?: string[];
  isHero?: boolean;
  isViral?: boolean;
  isDeliveryFriendly?: boolean;
}

export interface MenuCategoryMeta {
  id: MenuCategory;
  label: string;
  labelIt?: string;
  icon: string;
  description: string;
  emoji?: string;
}
