import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import jwt_decode from 'jwt-decode';
import axios from 'axios';
import validation from '../LoginValidation'; // Make sure this import is correctly set

const Login = () => {
    const [values, setValues] = useState({
      email: '',
      password: ''
    });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
  
    const loginUrl = 'http://localhost:9000/user/login';
  
    const handleChange = (e) => {
      setValues({
        ...values,
        [e.target.name]: e.target.value
      });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setErrors(validation(values));
  
      try {
        const response = await axios.post(loginUrl, values);
        console.log(response);

        // Ensure to set a proper token
        const token = response.data.accessToken; // Adjust this according to your API response
        if (token) {
          window.localStorage.setItem("token", token);
          window.localStorage.setItem("isLoggedIn", "true");

          //save the token in localStorage
          // const decodedToken = jwt.decode(token);
          // console.log('User details:', decodedToken);
          // Redirect to home page or another route
          navigate('/home');
        } else {
          console.error('Login error: Token not found in response');
        }
      } catch (error) {
        console.error('Login error:', error);
        // Handle specific errors or set error state
      }
    };
    
    return (
        <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
            <div className='bg-white p-3 rounded w-25'>
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor='email' className='form-label'><strong>Email</strong></label>
                        <input type='email' className='form-control' id='email' name="email" onChange={handleChange} value={values.email} placeholder='Please enter your Email' />
                        {errors.email && <span className='text-danger'>{errors.email}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='password' className='form-label'><strong>Password</strong></label>
                        <input type='password' className='form-control' id='password' name="password" onChange={handleChange} value={values.password}  placeholder='Please enter your Password' />
                        {errors.password && <span className='text-danger'>{errors.password}</span>}
                    </div>
                    <button type='submit' className='btn btn-success'><strong>Login</strong></button>
                    <p>You agree to our terms and policies</p>
                    <Link to="/signup" className='btn btn-default border'>Create Account</Link>
                </form>
            </div>
        </div>
    );
};

export default Login;