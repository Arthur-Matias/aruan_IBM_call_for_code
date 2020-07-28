const express = require('express');


const login = require('./controllers/login');
const register = require('./controllers/register');

const routes = express.Router();

routes.post('/login', login.store);

routes.post('/register', register.store);

module.exports = routes;