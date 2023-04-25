import { Container } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Header from './Header';

const Layout = () => (
  <>
    <Header />
    <Container
      maxWidth='lg'
      style={{ paddingTop: '70px' }}
    >
      <Outlet />
    </Container>
  </>
);

export default Layout;
