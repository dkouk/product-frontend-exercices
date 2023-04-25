import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AppBar from '@mui/material/AppBar';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../hooks/Cart/CartContext';

const Header = () => {
  const { products } = useContext(CartContext);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position='fixed'
        color='default'
      >
        <Toolbar>
          <Box sx={{ flexGrow: 1 }} />
          <Box>
            <Link to='/products'>
              <Button
                color='primary'
                variant='text'
                component='span'
              >
                Products
              </Button>
            </Link>
          </Box>

          <Box>
            <Link to='/cart'>
              <IconButton
                size='large'
                color='primary'
              >
                <Badge
                  badgeContent={products.length}
                  color='error'
                >
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
