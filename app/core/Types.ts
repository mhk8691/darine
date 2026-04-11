export interface ToggleItemsType {
  title: string;
  value: string;
}
export interface MenuType {
  title: string;
  link?: string;
  subMenu?: MenuType[];
}
