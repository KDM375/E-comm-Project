import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Shop from './pages/Customer/Shop';
import ProductDetail from './pages/Customer/ProductDetail';
import Checkout from './pages/Customer/Checkout';
import About from './pages/Customer/About';
import AddProduct from './pages/Admin/AddProduct';
import Dashboard from './pages/Admin/Dashboard';
import AuthScreen from './pages/Auth/AuthScreen';

function AppWrapper() {
  const location = useLocation();
  const hideHeaderRoutes = ['/login', '/signup'];
  const hideHeader = hideHeaderRoutes.includes(location.pathname);

  return (
    <>
      {!hideHeader && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<AuthScreen />} />
        <Route path="/signup" element={<AuthScreen />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/about" element={<About />} />

        {/* Admin routes */}
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/add-product" element={<AddProduct />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;
