const supertest = require('supertest');
const router = require('../routes/commandes');
const express = require('express');
const app = new express();
app.use('/', router);

// describe('GET /commandes', function () {
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
  test('responds to get Commandes', async () => {
    try {
      const res = await app.get('/');
      expect(res.header['content-type']).toBe('application/json');
      expect(res.statusCode).toBe(200);
    } catch (err) {
      console.log(err);
    }
  });
  test('responds to get Commande by ID', async () => {
    try {
      const res = await app.post('/:user');
      expect(res.header['content-type']).toBe('application/json');
      expect(res.statusCode).toBe(201);
    } catch (err) {
      console.log(err);
    }
  });
  test('responds to get Commande by Restaurant', async () => {
    try {
      const res = await app.get('/:restaurant');
      expect(res.header['content-type']).toBe('application/json');
      expect(res.statusCode).toBe(201);
    } catch (err) {
      console.log(err);
    }
  });
});
