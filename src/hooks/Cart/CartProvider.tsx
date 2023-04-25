import { ReactNode, useCallback, useState } from 'react';
import { TProduct } from '../../types/Product';
import { CartContext } from './CartContext';

export const CartProvider = ({ children }: { children: ReactNode }) => {
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
    <CartContext.Provider value={{ products, addToCard, deleteFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
