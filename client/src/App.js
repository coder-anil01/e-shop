import './App.css';
import { Flip, Slide, ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Navbar from './component/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from './pages/Register';
import Login from './pages/Login';
import HomePage from './pages/HomePage';
import UserRoute from './routes/UserRoute';
import Dashbord from './userDashbord/Dashbord';
import ForgotPassword from './pages/ForgotPassword';
import AdminRoute from './routes/AdminRoutes';
import AdminDashbord from './pages/admin/AdminDashbord';
import MyOrder from './userDashbord/MyOrder';
import MyWishlist from './userDashbord/MyWishlist';
import MyCart from './userDashbord/MyCart';
import MyAccount from './userDashbord/MyAccount';
import AdminAccount from './pages/admin/AdminAccount';
import AllOrders from './pages/admin/AllOrders';
import AllUsers from './pages/admin/AllUsers';
import Category from './pages/admin/Category';
import Products from './pages/admin/Products';
import UpdateProduct from './pages/admin/UpdateProduct';
import ProductDetails from './pages/ProductDetails';
import Search from './pages/Search';
import CartPage from './pages/CartPage';
import Logout from './userDashbord/Logout';
import PaymentPage from './pages/PaymentPage';
import AdminLogout from './pages/admin/AdminLogout';

function App() {
  return (
    < >
    <Router>
    <Navbar/>
    <ToastContainer
    position='sticky'
    autoClose={3000}
    transition={Flip}
    />
      <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/search" element={<Search />}/>
      <Route path="/product/:id" element={<ProductDetails />}/>
      <Route path="/register" element={<Register />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/cart" element={<CartPage />}/>
      <Route path="/forgot-password" element={<ForgotPassword />}/>

      <Route path="/dashbord" element={<UserRoute/>}>
        <Route path="user" element={<Dashbord/>}/>
        <Route path="user/profile" element={<MyAccount/>}/>
        <Route path="user/order" element={<MyOrder/>}/>
        <Route path="user/wishlist" element={<MyWishlist/>}/>
        <Route path="user/Cart" element={<MyCart/>}/>
        <Route path="user/payment" element={<PaymentPage/>}/>
        <Route path="user/logout" element={<Logout/>}/>
      </Route>

      <Route path="/dashbord" element={<AdminRoute/>}>
        <Route path="/dashbord/admin/" element={<AdminDashbord/>}/>
        <Route path="/dashbord/admin/profile" element={<AdminAccount/>}/>
        <Route path="/dashbord/admin/orders" element={<AllOrders/>}/>
        <Route path="/dashbord/admin/users" element={<AllUsers/>}/>
        <Route path="/dashbord/admin/category" element={<Category/>}/>
        <Route path="/dashbord/admin/products" element={<Products/>}/>
        <Route path="/dashbord/admin/product/:id" element={<UpdateProduct/>}/>
        <Route path="/dashbord/admin/adminlogout" element={<AdminLogout/>}/>
      </Route>

      </Routes>
    </Router>
    </>
  );
}

export default App;