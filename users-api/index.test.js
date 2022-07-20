const request = require('supertest');
const app = require('./app');

describe('Sample Test', () => {
  it('should test that true === true', () => {
    expect(true).toBe(true);
  });
});

describe('GET /users', function () {
  it('respond with json', function (done) {
    try {
      request(app)
        .get('/')
        .set('Accept', 'application/json')
        .expect(200)
        .end(function (err, res) {
          if (err) return done(err);
          done();
        });
    } catch (err) {
      console.log(err);
    }
  });
});
