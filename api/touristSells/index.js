const { Router } = require('express');

const {
  createTouristSellHandler,
  deleteTouristSellByIdHandler,
  getAllTouristSellsHandler,
  getTouristSellByIdHandler,
  getTouristSellByUserIdHandler,
  updateTouristSellHandler
} = require('./touristSells.controller')

const router = Router();
// const { isAuthenticated } = require('../../auth/auth.touristPayment')


router.get('/', getAllTouristSellsHandler);
router.get('/touristPayment/:id', getTouristSellByIdHandler);
router.post('/', createTouristSellHandler);
router.patch('/touristPayment/edit/:id', updateTouristSellHandler)

router.get('/user/:id', getTouristSellByUserIdHandler);
router.delete('/touristPayment/:id', deleteTouristSellByIdHandler);

module.exports = router;
