import { useContext } from 'react';
import { TProduct } from '../types/Product';

import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { CartContext } from '../hooks/Cart/CartContext';

const ProductCard = ({ product }: { product: TProduct }) => {
  const { addToCard } = useContext(CartContext);

  return (
    <Card>
      <CardMedia
        component='img'
        height='194'
        image={product.image}
        alt={product.title}
      />
      <CardContent>
        <Typography
          variant='h6'
          color='text.secondary'
          noWrap
        >
          {product.title}
        </Typography>
        <Typography
          variant='body2'
          color='text.secondary'
          noWrap
        >
          {product.description}
        </Typography>
        <Typography
          variant='body2'
          color='text.secondary'
        >
          {product.price}
        </Typography>
        <Typography
          variant='body2'
          color='text.secondary'
        >
          {product.rating.rate}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size='small'
          color='primary'
          variant='contained'
          onClick={() => addToCard(product)}
          style={{ marginRight: 8 }}
        >
          Add to cart
        </Button>
        <Link to={`/products/${product.id}`}>
          <Button
            size='small'
            color='secondary'
            variant='contained'
          >
            View details
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
