const { Router } = require('express');

const {
  createTouristPaymentHandler,
  getAllTouristPaymentistPaymentsHandler,
  getTouristPaymentByIdHandler,
  getTouristPaymentByUserIdHandler,
  deleteTouristPaymentByIdHandler,
  updateTouristPaymentHandler,
} = require('./touristPayments.controller')

const router = Router();
// const { isAuthenticated } = require('../../auth/auth.touristPayment')


router.get('/', getAllTouristPaymentistPaymentsHandler);
router.get('/touristPayment/:id', getTouristPaymentByIdHandler);
router.post('/', createTouristPaymentHandler);
router.patch('/touristPayment/edit/:id', updateTouristPaymentHandler)

router.get('/user/:id', getTouristPaymentByUserIdHandler);
router.delete('/touristPayment/:id', deleteTouristPaymentByIdHandler);

module.exports = router;
