export interface ToggleItemsType {
  title: string;
  value: string;
}
export interface MenuType {
  id?:number
  title: string;
  link?: string;
  subMenu?: MenuType[];
}
