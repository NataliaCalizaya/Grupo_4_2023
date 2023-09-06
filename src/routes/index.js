const express = require('express');
const { indexControl } = require('../controllers/index');

const router = express.Router();

router.get(['/', '/home'], indexControl);

module.exports = router;
