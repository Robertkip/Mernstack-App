import { useState } from 'react';
import axios from 'axios';
import Signup from './../components/Signup';
import Dashboard from './dashboard/dashboard';
import Login from './../components/Login';
import Home from './../components/Home';
import Booking from './../components/Booking/Booking';
import "./../Navbar.css";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState({
    userId: '',
    products: '',
  });

  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status

  const handleChange = (e) => {
    setCart({
      ...cart,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(cart);

    try {
      const response = await axios.post('http://localhost:4000/carts', cart);
      console.log(response.data);
      setCart({
        userId: '',
        products: '',
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogout = () => {
    window.localStorage.clear();
    window.location.href='/login';
    // window.localStorage.removeItem("isLoggedIn");
    // setIsLoggedIn(false);
    // navigate('/login');
  };

  const handleLogin = () => {
    // Set isLoggedIn to true when user logs in
    setIsLoggedIn(true);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-left">
          <a href="/home" className="logo">
            ShopNow
          </a>
        </div>
        <div className="navbar-center">
          <ul className="nav-links">

            {isLoggedIn && (
              <>
                <li>
                  <a href='/signup'>Signup</a>
                </li>
                <li>
                  <a href='/login' onClick={handleLogin}>Login</a>
                </li>
                </>
            )}
            <li>
              <a href='/home'>Home</a>
            </li>
            <li>
              <a href='/bookModal'>BookModal</a>
            </li>
            <li>
              <a href='/booking'>Booking</a>
            </li>
            <li>
              <a href='/dashboard'>Dashboard</a>
            </li>
            <li>
              <a href='/terms'>Terms</a>
            </li>
            {isLoggedIn && (
              <li>
                <a href='/cart'>My Cart</a>
              </li>
            )}
          </ul>
        </div>
        <div className="navbar-right">
          {!isLoggedIn && (
            <a href="/login" className="logout-icon" onClick={handleLogout}>
              <i className="fas fa-sign-out-alt"></i>
              <span className="logout">Logout</span>
            </a>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;