const express = require('express');
const router = express.Router();
const bookControl = require('../controllers/booksControl');

router.get('/:id', bookControl.bookGet);
router.post('/', bookControl.bookCreate);
router.delete('/:id', bookControl.bookDelete);

module.exports = router;