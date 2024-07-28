import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar';
import axios from 'axios';
import './dashboard.css';

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const email = 'test@gmail.com'; // Replace with your actual email
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:9000/services/${email}`);
        setData(response.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this useEffect runs once when the component mounts

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <Navbar />
      <div className="row">
        <div className="col">
          <div className="left-sidebar">
            <ul className="nav flex-column sidebar-nav">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  <svg
                    className="bi bi-chevron-right"
                    width="16"
                    height="16"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.646 3.646a.5.5 0 01.708 0l6 6a.5.5 0 010 .708l-6 6a.5.5 0 01-.708-.708L12.293 10 6.646 4.354a.5.5 0 010-.708z"
                      clipRule="evenodd"
                    />
                  </svg>
                  User
                </a>
                <li>
                </li>
              </li>
            </ul>
          </div>
        </div>
        <div className="col">
          <div className='card-container me-4'>
            <div className='card'>
              <div className='card-header'>
                <h3>Bookings</h3>
              </div>
              <div className='card-body'>
                <div className='card-text'>
                  <ul>
                    {data.map((item) => (
                      <li key={item.id}>
                        <h2>Book Email</h2>
                        <p>{item.email}</p>
                        <h2>Booking Date</h2>
                        <p>{item.date}</p>
                        <h4>Booking Time</h4>
                        <p>{item.time}</p>
                        <h4>Service</h4>
                        <p>{item.service}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;