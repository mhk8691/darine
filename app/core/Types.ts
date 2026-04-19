export interface ToggleItemsType {
  title: string;
  value: string;
  id: number;
  emptyMessage?: string;
}
export interface MenuType {
  id?: number;
  title: string;
  link?: string;
  subMenu?: MenuType[];
}
export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}
export interface TableGoldDataType {
  typeGold?: string;
  currentRate: number;
  minPriceDay: number;
  maxPriceDay: number;
  dayChange: string;
  monthChange: string;
  weeklyChart: number;
}

export interface NotifItemsType {
  title: string;
  message: string;
  date: string;
}

// types/cart.ts

export interface Product {
  id: string;
  title: string;
  price: number;
}

export interface CartItem extends Product {
  quantity: number;
}