export interface ToggleItemsType {
  title: string;
  value: string;
  id: number;
}
export interface MenuType {
  id?:number
  title: string;
  link?: string;
  subMenu?: MenuType[];
}
export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}