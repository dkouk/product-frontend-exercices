import React from 'react';
import { TProduct } from '../../types/Product';

export type TCartContext = {
  products: TProduct[];
  addToCard: (product: TProduct) => void;
  deleteFromCart: (productId: number) => void;
};

const initialCartContext: TCartContext = {
  products: [],
  addToCard: () => {},
  deleteFromCart: () => {},
};

export const CartContext =
  React.createContext<TCartContext>(initialCartContext);
