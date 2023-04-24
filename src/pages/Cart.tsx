import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { StoreContext } from '../hooks/Store';

const Cart = () => {
  const { products, deleteFromCart } = useContext(StoreContext);

  return (
    <div>
      <Link to='/products'>Products</Link>
      {products.length > 0 ? (
        products.map((product) => (
          <div key={product.id}>
            <img
              src={product.image}
              alt={product.title}
              width={100}
            />
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>Price: {product.price}</p>

            <strong>Rating: {product.rating.rate}</strong>

            <button onClick={() => deleteFromCart(product.id)}>X</button>
          </div>
        ))
      ) : (
        <p>No Product added into card</p>
      )}
    </div>
  );
};

export default Cart;
