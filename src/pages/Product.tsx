import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import CircularIndeterminate from '../components/CircularIndeterminate';
import { CartContext } from '../hooks/Cart/CartContext';
import { useAxiosInstance } from '../hooks/useAxiosInstance';
import { TProduct } from '../types/Product';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const Product = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCard } = useContext<any>(CartContext);
  const { data: product, loading }: { data: TProduct; loading: boolean } =
    useAxiosInstance({
      url: `products/${id}`,
      method: 'GET',
      initialData: null,
    });

  if (loading || !product) {
    return <CircularIndeterminate />;
  }

  return (
    <>
      <Button
        size='small'
        color='primary'
        variant='outlined'
        onClick={() => navigate(-1)}
      >
        <ArrowBackIosIcon style={{ marginRight: 4 }} />
        Back to Products
      </Button>

      <Grid container>
        <Grid
          item
          xs={12}
          md={6}
        >
          <div style={{ padding: 16 }}>
            <img
              src={product.image}
              alt={product.title}
              width={'100%'}
              height='auto'
            />
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
        >
          <Typography
            variant='h2'
            color='text.secondary'
          >
            {product.title}
          </Typography>
          <Typography
            variant='subtitle1'
            color='text.secondary'
            style={{ marginBottom: 8 }}
          >
            {product.description}
          </Typography>
          <Typography
            variant='body2'
            color='text.secondary'
            style={{ marginBottom: 8 }}
          >
            Price: {product.price}
          </Typography>

          <Typography
            variant='body2'
            color='text.primary'
            style={{ marginBottom: 8 }}
          >
            Rating: {product.rating.rate}
          </Typography>
          <Button
            size='large'
            color='secondary'
            variant='contained'
            onClick={() => addToCard(product)}
          >
            Add to cart
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default Product;
