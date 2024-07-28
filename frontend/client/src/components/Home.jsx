import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import axios from 'axios';
import Service from './Service';
import BookModal from './BookModal/BookModal';
// import Button from 'react-bootstrap/Button';

const Home = () => {
  const navigate = useNavigate();
  const [services, setServices] = useState([]);
  const [selectedService, setSelectedService] = useState('');

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get('http://localhost:9000/available'); // Adjust URL accordingly
        setServices(response.data);
      } catch (error) {
        console.error('Error fetching services:', error);
      }
    };

    fetchServices();
  }, []);

  const handleServiceChange = (e) => {
    setSelectedService(e.target.value);
  };
  const handleButtonClick = () => {
    navigate('/bookModal');
  };

  return (
    <>
    <Navbar />
    <div class="container">
      <div class="row">
        <div class="col-md-6">
            <div class="card-body">
        <img
          src="https://plus.unsplash.com/premium_photo-1683133530586-c30de7aa9124?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2Fsb25zfGVufDB8fDB8fHww"
          alt="Barber"
          className="mb-3"
        />
        <p className="mb-2">Blaze Salon and Barber Shop is a one-stop shop for all your grooming needs.</p>
        <p className="mb-2">Our services include haircuts, shaves, facials, and much more.</p>
        <p className="mb-2">Our experienced staff will make sure you look your best.</p>
        <p className="mb-4">So what are you waiting for? Book an appointment now!</p>
        <button className="btn btn-primary" onClick={handleButtonClick}>Book</button>
            </div>
          </div>

          <div className="col-md-6">
            <div className='row'>
 {services.map((service) => (<div key={service._id}>
      <div className="col col-md-4">
        <img
          src="https://plus.unsplash.com/premium_photo-1682098317954-252ddfcda75e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHNhbG9uc3xlbnwwfHwwfHx8MA%3D%3D"
          alt="Haircut"
          className="mb-3"
        />
  
            <h3 className="mb-2">{service.service}</h3>
            <p className="mb-2">Get a fresh new look with a haircut from one of our professional stylists.</p>
            <p className="mb-2">Our stylists are trained to give you the best results, whether you're looking for a classic cut or a more modern look.</p>
            <span className="mb-3">Price: ${service.price}</span><br />
            <button className="btn btn-primary" onClick={() => setSelectedService(service._id)}>Select</button>
          </div>
        </div>))}
      </div>
        </div>
        </div>
        </div>

        
    <div className="home d-flex flex-column align-items-center justify-content-center">
    <h1 className="mb-4">Welcome to Blaze Salon and Barber Shop</h1>
    <div className="row w-100 justify-content-center">
      <div className="col">
        <img
          src="https://plus.unsplash.com/premium_photo-1683133530586-c30de7aa9124?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2Fsb25zfGVufDB8fDB8fHww"
          alt="Barber"
          className="mb-3"
        />
        <p className="mb-2">Blaze Salon and Barber Shop is a one-stop shop for all your grooming needs.</p>
        <p className="mb-2">Our services include haircuts, shaves, facials, and much more.</p>
        <p className="mb-2">Our experienced staff will make sure you look your best.</p>
        <p className="mb-3">So what are you waiting for? Book an appointment now!</p>
        <button className="btn btn-primary" onClick={handleButtonClick}>Book</button>

      </div>
      
      </div>
     
        {/* <div className="col-md-9 d-flex flex-column align-items-center">
 {services.map((service) => (<div key={service._id}>
      <div className="col  d-flex flex-column align-items-center">
        <img
          src="https://plus.unsplash.com/premium_photo-1682098317954-252ddfcda75e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHNhbG9uc3xlbnwwfHwwfHx8MA%3D%3D"
          alt="Haircut"
          className="mb-3"
        />
  
            <h3 className="mb-2">{service.service}</h3>
            <p className="mb-2">Get a fresh new look with a haircut from one of our professional stylists.</p>
            <p className="mb-2">Our stylists are trained to give you the best results, whether you're looking for a classic cut or a more modern look.</p>
            <span className="mb-3">Price: ${service.price}</span><br />
            <button className="btn btn-primary" onClick={() => setSelectedService(service._id)}>Select</button>
          </div>
        </div>))}
      </div> */}
    
    
      {/* <div className="col-md-4 d-flex flex-column align-items-center">
        <img
          src="https://plus.unsplash.com/premium_photo-1682098317954-252ddfcda75e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHNhbG9uc3xlbnwwfHwwfHx8MA%3D%3D"
          alt="Haircut"
          className="mb-3"
        />
        <h3 className="mb-2">Haircut</h3>
        <p className="mb-2">Get a fresh new look with a haircut from one of our professional stylists.</p>
        <span className="mb-3">$20</span>
        <button className="btn btn-primary">Select</button>
      </div> */}
      </div>
  <Service />
    </>
  );
};

export default Home;
