import axios from 'axios';
import { useCallback, useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { API_PRODUCTS_URL } from '../constants/config';
import { StoreContext } from '../hooks/Store';
import { TProduct } from '../types/Product';

const Product = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState<TProduct | null>(null);
  const { addToCard } = useContext<any>(StoreContext);

  const getProduct = useCallback(() => {
    axios
      .get(`${API_PRODUCTS_URL}/${id}`)
      .then(({ data }) => {
        setProduct(data);
      })
      .catch((error) => {
        // handle error
        console.error(error);
      })
      .finally(function () {
        setLoading(false);
      });
  }, [id]);

  useEffect(() => {
    getProduct();
  }, [getProduct]);

  if (loading || !product) {
    return <>Loading...</>;
  }

  return (
    <>
      <Link to='/cart'>Card</Link>

      <div style={{ padding: 16 }}>
        <img
          src={product.image}
          alt={product.title}
          width={100}
        />
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <p>Price: {product.price}</p>

        <strong>Rating: {product.rating.rate}</strong>
        <br />
        <button onClick={() => addToCard(product)}>Add to cart</button>
      </div>
    </>
  );
};

export default Product;
