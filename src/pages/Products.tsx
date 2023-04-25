import Grid from '@mui/material/Grid';
import CircularIndeterminate from '../components/CircularIndeterminate';
import ProductCard from '../components/ProductCard';
import { useAxiosInstance } from '../hooks/useAxiosInstance';
import { TProduct } from '../types/Product';

const Products = () => {
  const { data: products, loading }: { data: TProduct[]; loading: boolean } =
    useAxiosInstance({
      url: '/products',
      method: 'GET',
      initialData: [],
    });

  if (loading) {
    return <CircularIndeterminate />;
  }

  return (
    <>
      <Grid
        container
        spacing={2}
      >
        {products.map((product) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            style={{ marginBottom: 32 }}
            key={product.id}
          >
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Products;
