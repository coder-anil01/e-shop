import './App.css';
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Navbar from './component/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from './pages/Register';
import Login from './pages/Login';
import HomePage from './pages/HomePage';

function App() {
  return (
    < >
    <Router>
    <Navbar/>
    <ToastContainer />
      <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/register" element={<Register />}/>
      <Route path="/login" element={<Login />}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;