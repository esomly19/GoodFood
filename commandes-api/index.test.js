const supertest = require('supertest');
const app = require('./app');

describe('Sample Test', () => {
  it('should test that true === true', () => {
    expect(true).toBe(true);
  });
});

describe('GET /commandes', function () {
  it('respond with json', async function () {
      await supertest(app)
        .get('/')
        .expect(200).then((response)=>{
            expect(Array.isArray(response.body)).toBeTruthy();
          });
      return true;
  });
});
