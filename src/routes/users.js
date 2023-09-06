const express = require('express');
const { login, register } = require('../controllers/users');

const users = express.Router();

users.get('/login', login);

users.get('/register', register);

module.exports = users;
