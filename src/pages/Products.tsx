import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductDetail from '../components/ProductDetail';
import { API_PRODUCTS_URL } from '../constants/config';
import { TProduct } from '../types/Product';

const Products = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<TProduct[]>([]);

  const getProducts = useCallback(() => {
    axios
      .get(API_PRODUCTS_URL)
      .then(({ data }) => {
        setProducts(data);
      })
      .catch((error) => {
        // handle error
        console.error(error);
      })
      .finally(function () {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  if (loading) {
    return <>Loading...</>;
  }

  return (
    <div>
      <Link to='/cart'>Card</Link>
      {products.map((product) => (
        <ProductDetail
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
};

export default Products;
