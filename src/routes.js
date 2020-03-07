const express = require('express');
const routes = express.Router();

const ProductController = require('./controllers/ProductController');

routes.get('/products', ProductController.index); // Route to get all
routes.get('/products/:id', ProductController.show); // Route to get one
routes.post('/products', ProductController.store); // Route to post
routes.put('/products/:id', ProductController.update); // Route to update
routes.delete('/products/:id', ProductController.destroy); // Route to delete


module.exports = routes;