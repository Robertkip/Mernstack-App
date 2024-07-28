import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import validation from '../SignupValidation';
import Login from './Login';
import axios from 'axios';

const Signup = () => {

    const [values, setValues] = useState({
        username: '',
        email: '',
        password: ''
      });
    
      const [errors, setErrors] = useState({});
      const navigate = useNavigate();

      
      const handleChange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors(validation(values));
        try {
          const response = await axios.post('http://localhost:9000/user', values);
          console.log(response.data);
          navigate('/login');
        } catch (error) {
          console.error('Signup error:', error);
        }
      };
    
      return (
        <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
          <div className='bg-white p-3 rounded w-25'>
            <h2>Sign-up</h2>
            <form onSubmit={handleSubmit}>
              <div className='mb-3'>
                <label htmlFor='username' className='form-label'><strong>Username</strong></label>
                <input
                  type='text'
                  onChange={handleChange}
                  value={values.username}
                  className='form-control'
                  id='username'
                  name="username"
                  placeholder='Please enter your Username'
                />
                {errors.username && <span className='text-danger'>{errors.username}</span>}
              </div>
              <div className='mb-3'>
                <label htmlFor='email' className='form-label'><strong>Email</strong></label>
                <input
                  type='email'
                  onChange={handleChange}
                  value={values.email}
                  className='form-control'
                  id='email'
                  name="email"
                  placeholder='Please enter your Email'
                />
                {errors.email && <span className='text-danger'>{errors.email}</span>}
              </div>
              <div className='mb-3'>
                <label htmlFor='password' className='form-label'><strong>Password</strong></label>
                <input
                  type='password'
                  onChange={handleChange}
                  value={values.password}
                  className='form-control'
                  id='password'
                  name="password"
                  placeholder='Please enter your Password'
                />
                {errors.password && <span className='text-danger'>{errors.password}</span>}
              </div>
              <button type='submit' className='btn btn-success' disabled={Object.keys(errors).length > 0}><strong>Sign Up</strong></button>
              <p>You agree to our terms and policies</p>
              <Link to="/login" className='btn btn-default border'>Login</Link>
            </form>
          </div>
        </div>
    );
};

export default Signup;