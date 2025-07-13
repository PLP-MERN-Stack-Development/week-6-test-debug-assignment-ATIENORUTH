const request = require('supertest');
const express = require('express');
const bugRoutes = require('../routes/bugRoutes');

const app = express();
app.use(express.json());
app.use('/api/bugs', bugRoutes);

describe('Bug Routes', () => {
  it('should return status 400 for missing title on POST', async () => {
    const res = await request(app).post('/api/bugs').send({ status: 'open' });
    expect(res.statusCode).toBe(400);
    expect(res.body).toHaveProperty('message');
  });
});
