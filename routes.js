const user = require('./api/user');
const post = require('./api/post');
const product = require('./api/product');
const service = require('./api/service');
const authLocal = require('./auth/local');
const upload = require('./api/upload');
const cart = require('./api/cart');
const offer = require('./api/offer');
const tour = require('./api/tour')
const client = require('./api/client');
const vehicle = require('./api/vehicle');
const touristGuide = require('./api/touristGuide');
const touristService = require('./api/touristService');
const touristPayment = require('./api/touristPayments')
//defining routes

function routes (app) {
  app.use('/api/users', user);
  app.use('/api/posts', post);
  app.use('/api/products', product);
  app.use('/api/services', service);
  app.use('/auth/local', authLocal);
  app.use('/api/tours', tour);
  // route to upload images
  app.use('/api/uploads', upload);
  app.use('/api/carts', cart);
  app.use('/api/offers', offer);
  app.use('/api/clients', client);
  app.use('/api/vehicles', vehicle);
  app.use('/api/touristGuides', touristGuide);
  app.use('/api/touristService', touristService);
  app.use('/api/touristPayment', touristPayment);
}

module.exports = routes;
