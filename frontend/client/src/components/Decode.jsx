import React from 'react'
import jwt_decode from 'jwt-decode';

const Decode = (token) => {
    try {
        return jwt_decode(token);
      } catch (error) {
        console.error('Invalid token', error);
        return null;
      }
    };

export default Decode