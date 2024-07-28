import React, { useState } from 'react';
import axios from 'axios';
import './footer.css';

const Footer = () => {

  const [message, setMessage] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setMessage({
      ...message,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(message);

    try {
      const response = await axios.post('http://localhost:4000/subscribe', message);
      console.log(response.data);
      setMessage({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 footer-info">
              <h3>BizPage</h3>
              <p>
                Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada
                terra videa magna derita valies darta donna mare fermentum iaculis
                eu non diam phasellus. Scelerisque felis imperdiet proin fermentum
                leo. Amet volutpat consequat mauris nunc congue.
              </p>
            </div>

            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <i className="bi bi-chevron-right"></i> <a href="home">Home</a>
                </li>
                <li>
                  <i className="bi bi-chevron-right"></i> <a href="login">Login</a>
                </li>
                <li>
                  <i className="bi bi-chevron-right"></i> <a href="signup">Signup</a>
                </li>
                <li>
                  <i className="bi bi-chevron-right"></i>{' '}
                  <a href="terms">Terms of service</a>
                </li>
                <li>
                  <i className="bi bi-chevron-right"></i>{' '}
                  <a href="#">Privacy policy</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 footer-contact">
              <h4>Contact Us</h4>
              <p>
                A108 Adam Street <br />
                New York, NY 535022
                <br />
                United States <br />
                <strong>Phone:</strong> +1 5589 55488 55
                <br />
                <strong>Email:</strong> info@example.com
                <br />
              </p>

              <div className="social-links">
                <a href="#" className="twitter">
                  <i className="bi bi-twitter"></i>
                </a>
                <a href="#" className="facebook">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="#" className="instagram">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="#" className="instagram">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="#" className="linkedin">
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 footer-newsletter">
              <h4>Our Newsletter</h4>
              <form onSubmit={handleSubmit}>
          <label>Name</label><br/>
          <input type="text" name="name" value={message.name} onChange={handleChange} /><br/>
          <label>Email</label><br/>
          <input type="email" name="email" value={message.email} onChange={handleChange} /><br/>
          <label>Phone</label><br/>
          <input type="number" name="phone" value={message.phone} onChange={handleChange} /><br/>
          <label>Message</label><br/>
          <textarea name="message" rows="5" value={message.message} onChange={handleChange}></textarea><br/>
          <input type="submit" value="Subscribe" />
        </form>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="copyright">
          &copy; Copyright <strong>BizPage</strong>. All Rights Reserved
        </div>
        <div className="credits">
          {/* <!--
        All the links in the footer should remain intact.
        You can delete the links only if you purchased the pro version.
        Licensing information: https://bootstrapmade.com/license/
        Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/buy/?theme=BizPage
      --> */}
          Designed by <a href="#">BootstrapMade</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;