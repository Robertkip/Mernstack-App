import React from 'react'
import { useNavigate } from 'react-router-dom';
// import BookModal from './BookModal/BookModal';

const Service = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/bookModal');
  };
  return (
    <>
    <div className="home d-flex flex-column align-items-center justify-content-center">
    <h1 className="mb-4">Our Team</h1>
        <div className="row w-100 justify-content-center">
        <div className="col-md-4 d-flex flex-column align-items-center">
  <img
    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGVvcGxlfGVufDB8fDB8fHww"
    alt="Barber"
    className="mb-3"
    style={{ width: "350px", height: "350px" }}
  />
  <p className="mb-2"><strong>Name:</strong> Jane Doe</p>
  <p className="mb-2"><strong>Services offered:</strong></p>
  <ul>
    <li>Manicure</li>
    <li>Pedicure</li>
    <li>Facial</li>
    {/* Add more services as needed */}
  </ul>
    <p className="mb-3">Price
    <button className="btn btn-primary">$30</button></p>

  <p className="mb-3">For bookings and inquiries, book now!</p>
  <button className="btn btn-primary" onClick={handleButtonClick}>Book now</button>
</div>

      <div className="col-md-4 d-flex flex-column align-items-center">
        <img
          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVvcGxlfGVufDB8fDB8fHww"
          alt="Haircut"
          className="mb-3"
          style={{ width: "350px", height: "350px" }}
        />
  <p className="mb-2"><strong>Name:</strong> Mary Rose</p>
  <p className="mb-2"><strong>Services offered:</strong></p>
  <ul>
    <li>Manicure</li>
    <li>Pedicure</li>
    <li>Facial</li>
    {/* Add more services as needed */}
  </ul>
  <p className="mb-3">Price
  <button className="btn btn-primary">$40</button></p>
  <p className="mb-3">For bookings and inquiries, book now!</p>
  <button className="btn btn-primary" onClick={handleButtonClick}>Book now</button>
      </div>

      <div className="col-md-4 d-flex flex-column align-items-center">
        <img
          src="https://cdn.pixabay.com/photo/2015/04/13/12/07/business-720429_640.jpg"
          alt="Haircut"
          className="mb-3"
          style={{ width: "350px", height: "350px" }}
        />
  <p className="mb-2"><strong>Name:</strong> Dell Well</p>
  <p className="mb-2"><strong>Services offered:</strong></p>
  <ul>
    <li>Manicure</li>
    <li>Pedicure</li>
    <li>Facial</li>
    {/* Add more services as needed */}
  </ul>
  <p className="mb-3">Price
  <button className="btn btn-primary">$50</button></p>
  <p className="mb-3">For bookings and inquiries, book now!</p>
  <button className="btn btn-primary" onClick={handleButtonClick}>Book now</button>
      </div>
      </div>
      </div>
      </>
  )
}

export default Service