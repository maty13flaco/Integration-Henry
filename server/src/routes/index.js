const express = require('express')
const route = express.Router();

const getCharById = require('../controllers/getCharById')
const login = require('../controllers/login')
const handleFavorites = require('../controllers/handleFavorites')

route.get('/characters/:id', getCharById);

route.get('/login', login);

route.post('/fav', handleFavorites.postFav);
route.delete('/fav/:id', handleFavorites.deleteFav);

module.exports = route;