// import { Link } from 'react-router-dom';
import Login from './components/Login'
import Signup from './components/Signup'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Booking from './components/Booking/Booking'
import Dashboard from './components/dashboard/dashboard'
import Terms from './components/terms/terms'
import BookModal from './components/BookModal/BookModal'

import "./Navbar.css";

import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from 'react-router-dom'
import Footer from './components/Footer/Footer'

const PrivateRoute = ({ element: Component }) => {
  const isAuthenticated = window.localStorage.getItem("isLoggedIn");
  return isAuthenticated ? <Component /> : <Navigate to="/login" />;
};
function App() {
  const login = window.localStorage.getItem("isLoggedIn");
  console.log(login, "login");

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/login" element={login ? <Home /> : <Login />} />
      <Route path="/dashboard" element={<PrivateRoute element={Dashboard} />} />
      <Route path="/" element={<Navbar />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/home" element={<Home />} />
      <Route path="/booking" element={<PrivateRoute element={Booking} />} />
      <Route path="/terms" element={<Terms/>} />
      <Route path='/bookModal' element={<BookModal />} />
    </Routes>
    <Footer />
    </BrowserRouter>
  )
}

export default App
