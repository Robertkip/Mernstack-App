const chai = require('chai');
const expect = chai.expect;
const express = require('express');
const supertest = require('supertest');

const app = express();
const request = supertest(app);

describe('Express Router Tests', function() {
    it('should return a 200 status when POST request is made', async function() {
        const res = await request.post('/').send({ email: 'test@example.com', date: '2023-01-01', time: '10:00', service: 'Test Service' });
        expect(res.status).to.equal(200);
    });

    it('should return a 200 status when GET request is made', async function() {
        const res = await request.get('/');
        expect(res.status).to.equal(200);
    });

    it('should return a 200 status when GET request with ID is made', async function() {
        const res = await request.get('/1');
        expect(res.status).to.equal(200);
    });

    it('should return a 200 status when DELETE request is made', async function() {
        const res = await request.delete('/1');
        expect(res.status).to.equal(200);
    });
});