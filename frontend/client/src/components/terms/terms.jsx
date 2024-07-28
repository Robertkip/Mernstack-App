import React from 'react';
import Navbar from '../Navbar';

const Terms = () => {
    return (
        <>
        <Navbar />
        <div className="container mt-5">
            <h1>Terms and Conditions</h1>
            <p>
            Welcome to Bizz shop! These terms and conditions outline the rules and regulations for the use of Bizz shop's website, located at [Website URL] </p>
            <div className="home d-flex flex-column align-items-center justify-content-center">
                <h1 className="mb-4">Our Terms of Service</h1>
                <div className="row w-100 justify-content-center">
                    <div className="col-md-4 d-flex flex-column align-items-center">
                        <img
                            src="https://images.unsplash.com/photo-1593702295094-aea22597af65?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGFpcmRyZXNzZXJ8ZW58MHx8MHx8fDA%3D"
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
                        <button className="btn btn-primary">Book now</button>
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
                        <button className="btn btn-primary">Book now</button>
                    </div>

                    <div className="col-md-4 d-flex flex-column align-items-center">
                        <img
                        src="https://images.unsplash.com/photo-1593702295094-aea22597af65?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGFpcmRyZXNzZXJ8ZW58MHx8MHx8fDA%3D"
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
                                <button className="btn btn-primary">Book now</button>
                                </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Terms;