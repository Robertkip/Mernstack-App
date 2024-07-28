// const request = require('supertest');
// const app = require('../index'); // Assuming your app is in a file called app.js

// describe('App', () => {
//   describe('GET /', () => {
//     it('should return a welcome message', async () => {
//       const res = await request(app).get('/');
//       expect(res.status).toBe(200);
//       expect(res.body).toEqual({ message: 'Welcome to my Shop application' });
//     });
//   });

//   describe('POST /subscribe', () => {
//     it('should return an error for invalid email', async () => {
//       const res = await request(app).post('/subscribe').send({ name: 'John Doe', email: 'invalidemail', phone: '+1234567890', message: 'Hello' });
//       expect(res.status).toBe(400);
//       expect(res.text).toBe('Invalid email address');
//     });

//     it('should return an error for invalid phone number', async () => {
//       const res = await request(app).post('/subscribe').send({ name: 'John Doe', email: 'johndoe@example.com', phone: '1234567890', message: 'Hello' });
//       expect(res.status).toBe(400);
//       expect(res.text).toBe('Invalid phone number');
//     });

//     it('should return a success message for valid request', async () => {
//       const res = await request(app).post('/subscribe').send({ name: 'John Doe', email: 'johndoe@example.com', phone: '+1234567890', message: 'Hello' });
//       expect(res.status).toBe(200);
//       expect(res.text).toBe('Message sent successfully!');
//     });
//   });

//   describe('GET /booking', () => {
//     it('should return a 404 error', async () => {
//       const res = await request(app).get('/booking');
//       expect(res.status).toBe(404);
//     });
//   });
// });
