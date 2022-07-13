const express = require('express');
const router = express.Router();

const { getUserByEmail,getAllUsers,getUserByUsername,getUserById } = require('../controllers/getUser')
const { createUser } = require('../controllers/createUser')

router.post('/email',getUserByEmail);
router.post('/id',getUserById);
router.post('/username',getUserByUsername);
router.get('/',getAllUsers);
router.post('/',createUser);


module.exports = router;
