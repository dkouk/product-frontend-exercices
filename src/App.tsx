import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';
import Product from './pages/Product';
import Products from './pages/Products';

function App() {
  return (
    <Routes>
      <Route
        path='/'
        element={<Layout />}
      >
        <Route
          index
          path='/'
          element={<Navigate to='products' />}
        />
        <Route
          path='/products'
          element={<Products />}
        />
        <Route
          path='products/:id'
          element={<Product />}
        />
        <Route
          path='cart'
          element={<Cart />}
        />

        <Route
          path='*'
          element={<NotFound />}
        />
      </Route>
    </Routes>
  );
}

export default App;
