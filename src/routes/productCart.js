const express = require('express');
const { productCart } = require('../controllers/productCart');

const router = express.Router();

router.get('/', productCart);

module.exports = router;
