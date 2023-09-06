const express = require('express');
const { productCart, productDetail } = require('../controllers/products');

const products = express.Router();

products.get('/productCart', productCart);

products.get('/productDetail', productDetail);

module.exports = products;
