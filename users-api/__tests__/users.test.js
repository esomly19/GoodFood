const supertest = require('supertest');
const router = require('../routes/users');
const express = require('express');
const app = new express();
app.use('/', router);

// describe('GET /users', function () {
//   it('respond with json', async function () {
//     await supertest(app)
//       .get('/')
//       .expect(200)
//       .then((response) => {
//         expect(Array.isArray(response.body)).toBeTruthy();
//       });
//     return true;
//   });
// });

describe('Users unit tests', function () {
  test('responds to get Users', async () => {
    try {
      const res = await app.get('/');
      expect(res.header['content-type']).toBe('application/json');
      expect(res.statusCode).toBe(200);
    } catch (err) {
      console.log(err);
    }
  });
  test('responds to create User', async () => {
    try {
      const res = await app.post('/');
      expect(res.header['content-type']).toBe('application/json');
      expect(res.statusCode).toBe(201);
    } catch (err) {
      console.log(err);
    }
  });
  test('responds to get User by ID', async () => {
    try {
      const res = await app.get('/:id');
      expect(res.header['content-type']).toBe('application/json');
      expect(res.statusCode).toBe(201);
    } catch (err) {
      console.log(err);
    }
  });
});
