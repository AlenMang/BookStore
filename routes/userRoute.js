const express = require('express');
const router = express.Router();
const userControl = require('../controllers/usersControl.js');

router.post('/register', userControl.regUser);
router.post('/:id', userControl.loginUser);

module.exports = router;