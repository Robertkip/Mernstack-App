import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from './../Navbar'
import BookModal from '../BookModal/BookModal'
const Booking = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/bookModal');
  };
  // const [openModal, setOpenModal] = useState(true);
  return (
    <>
    <Navbar />
    <div className="jumbotron">
      <h1 className="display-2">Learn How To Make Responsive Bootstrap Website</h1>
      <p className="lead">Register Now To Get Access To The Tutorial</p>
      <h1>React Modal</h1>
      <button className="btn btn-primary" onClick={handleButtonClick}>Book</button>
      
    </div>
  </>
);
}

export default Booking