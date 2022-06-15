const express = require('express');
const router = express.Router();


const { register } = require('../controllers/register');
const { login } = require('../controllers/login');
const { verify } = require('../controllers/verify');


router.post('/register',register);
router.post('/login',login);
router.post('/verify',verify);

module.exports = router;