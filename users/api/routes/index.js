const express = require('express');
const router = express.Router();

// Create User
router.post('/', require('../controllers/postUser'));

// Read ALL Users
router.get('/', require('../controllers/getUsers'));

// Read ONE User by ID
router.get('/:id', require('../controllers/getUser'));

// Read ONE User By Email
router.post('/email', require('../controllers/getUserByEmail'));

// Update User
router.put('/:id', require('../controllers/putUser'));

// Delete User
router.delete('/:id', require('../controllers/deleteUser'));

// Change User Role
router.put('/:id/:role', require('../controllers/deleteUser'));

module.exports = router;
