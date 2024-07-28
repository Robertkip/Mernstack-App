import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import Navbar from '../Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const BookModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [values, setValues] = useState({
    email: '',
    date: '',
    time: '',
    service: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
  setValues({ ...values, [event.target.name]: event.target.value });
};

const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors((values));
    try {
        const response = await axios.post('http://localhost:9000/services', values);
        console.log(response.data);
    } catch (error) {
        console.error('Error:', error);
    }

};

  return (
    <div>
      <Navbar />
      <Button variant="primary" onClick={handleShow}>
        Make A Booking
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Book A Slot</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" onChange={handleChange} name="email" value={values.email} placeholder="Enter email" />
              {/* <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text> */}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicDate">
              <Form.Label>Date</Form.Label>
              <Form.Control type="date" onChange={handleChange} name="date" value={values.date} placeholder="Enter the date you will like to get our service." />
              {/* <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text> */}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicDate">
              <Form.Label>Time</Form.Label>
              <Form.Control type="time" onChange={handleChange} name='time' value={values.time} placeholder="Enter the time you will like to get our service." />
              {/* <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text> */}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicService">
              <Form.Label>Service</Form.Label>
              <Form.Control as="select" onChange={handleChange} name="service" value={values.service}>
                <option value="">Select a service</option>
                <option value="menicure">Menicure</option>
                <option value="haircut">Haircut</option>
                <option value="massage">Massage</option>
              </Form.Control>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose && handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default BookModal;