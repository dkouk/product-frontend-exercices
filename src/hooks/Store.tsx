import React, { ReactNode, useCallback, useState } from 'react';
import { TProduct } from '../types/Product';

export type TStore = {
  products: TProduct[];
  addToCard: (product: TProduct) => void;
  deleteFromCart: (productId: number) => void;
};

const defaultStore: TStore = {
  products: [],
  addToCard: () => {},
  deleteFromCart: () => {},
};

export const StoreContext = React.createContext<TStore>(defaultStore);

export const StoreProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<TProduct[]>([]);

  const addToCard = useCallback(
    (product: TProduct) => {
      const productExist = products.find((pr) => pr.id === product.id);
      let newProducts = [...products];

      if (productExist) {
        newProducts = products.map((product) => {
          if (product.id === productExist.id) {
            return {
              ...productExist,
              quantity: (productExist.quantity ?? 1) + 1,
            };
          } else {
            return product;
          }
        });
      } else {
        newProducts.push(product);
      }

      setProducts(newProducts);
    },
    [products]
  );

  console.log({ products });

  const deleteFromCart = useCallback(
    (productId: number) => {
      const newProducts = products.filter(
        (product) => product.id !== productId
      );
      setProducts(newProducts);
    },
    [products]
  );

  return (
    <StoreContext.Provider value={{ products, addToCard, deleteFromCart }}>
      {children}
    </StoreContext.Provider>
  );
};
