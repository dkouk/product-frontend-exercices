import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { StoreContext } from '../hooks/Store';
import { TProduct } from '../types/Product';

const ProductDetails = ({ product }: { product: TProduct }) => {
  const { addToCard } = useContext<any>(StoreContext);
  return (
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

      <button onClick={() => addToCard(product)}>Add to cart</button>

      <Link to={`${product.id}`}>Details</Link>
    </div>
  );
};

export default ProductDetails;
