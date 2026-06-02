// cart.ts

import { CartItem } from "@/app/core/Types";

const STORAGE_KEY = "cart";

export const getCart = (): CartItem[] => {
  const cart = localStorage?.getItem(STORAGE_KEY);

  if (!cart) return [];

  return JSON.parse(cart);
};

const saveCart = (cart: CartItem[]) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
};

export const addToCart = (product: Omit<CartItem, "quantity">) => {
  const cart = getCart();

  const existingItem = cart.find((item) => item.id === product.id);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      ...product,
      quantity: 1,
    });
  }

  saveCart(cart);

  return cart;
};

export const removeFromCart = (productId: number | string) => {
  const cart = getCart();

  const updatedCart = cart.filter((item) => item.id !== productId);

  saveCart(updatedCart);

  return updatedCart;
};

export const increaseQuantity = (productId: number | string) => {
  const cart = getCart();

  const item = cart.find((item) => item.id === productId);

  if (item) {
    item.quantity += 1;
  }

  saveCart(cart);

  return cart;
};

export const decreaseQuantity = (productId: number | string) => {
  const cart = getCart();

  const item = cart.find((item) => item.id === productId);

  if (!item) return cart;

  if (item.quantity > 1) {
    item.quantity -= 1;
  } else {
    const updatedCart = cart.filter((item) => item.id !== productId);

    saveCart(updatedCart);

    return updatedCart;
  }

  saveCart(cart);

  return cart;
};

export const clearCart = () => {
  localStorage.removeItem(STORAGE_KEY);
};


// export const getTotalQuantity = (): number => {
//   const cart = getCart();

//   return cart.reduce((total, item) => {
//     return total + item.quantity;
//   }, 0);
// };


// export const getTotalPrice = (): number => {
//   const cart = getCart();

//   return cart.reduce((total, item) => {
//     return total + item.total_price * item.quantity;
//   }, 0);
// };


// export const getTotalWeight = (): number => {
//   const cart = getCart();

//   return cart.reduce((total, item) => {
//     return total + item.weight * item.quantity;
//   }, 0);
// };