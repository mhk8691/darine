import { CartItem } from '@/app/core/Types';

const CART_KEY = 'cart';

export const getCart = (): CartItem[] => {
  if (typeof window === 'undefined') return [];
  const data = localStorage.getItem(CART_KEY);
  return data ? JSON.parse(data) : [];
};

export const saveCart = (cart: CartItem[]) => {
  if (typeof window === 'undefined') return;
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
};
