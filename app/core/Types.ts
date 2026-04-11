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
