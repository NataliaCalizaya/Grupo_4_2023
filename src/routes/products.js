const express = require('express');
const { productCart } = require('../controllers/products');

const router = express.Router();

router.get('/productCart', productCart);

module.exports = router;
