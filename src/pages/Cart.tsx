import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useContext } from 'react';
import { CartContext } from '../hooks/Cart/CartContext';

const Cart = () => {
  const { products, deleteFromCart } = useContext(CartContext);

  return (
    <Grid container>
      {products.length > 0 ? (
        products.map((product) => (
          <Grid
            item
            key={product.id}
          >
            <Grid
              container
              display='flex'
              flexDirection='row'
              alignContent='space-between'
              alignSelf='flex-start'
              alignItems='center'
            >
              <Grid
                item
                xs={12}
                sm={1}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  width={100}
                />
              </Grid>
              <Grid
                item
                flex={'1'}
              >
                <Typography
                  variant='h6'
                  color='text.secondary'
                >
                  {product.title}
                </Typography>
                <Typography
                  variant='body2'
                  color='text.secondary'
                >
                  {product.description}
                </Typography>
                <Typography
                  variant='body2'
                  color='text.secondary'
                >
                  Price: {product.price}
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                sm={1}
              >
                <Button
                  color='error'
                  variant='contained'
                  onClick={() => deleteFromCart(product.id)}
                >
                  <DeleteForeverIcon />
                </Button>
              </Grid>
            </Grid>
          </Grid>
        ))
      ) : (
        <Typography
          variant='body2'
          color='text.secondary'
        >
          No Product added into cart.
        </Typography>
      )}
    </Grid>
  );
};

export default Cart;
