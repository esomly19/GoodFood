const express = require('express');
const router = express.Router();

//Login
router.post('/login', require('../controllers/login'));
//Logout
router.post('/logout', require('../controllers/logout'));
//Register
router.post('/signup', require('../controllers/signup'));
//Refresh Token
router.post('/refresh', require('../controllers/refreshToken'));

module.exports = router;
