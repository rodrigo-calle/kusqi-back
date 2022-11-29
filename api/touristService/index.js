const { Router } = require('express');

const {
  createTouristServiceHandler,
  getAllTouristServicesHandler,
  getTouristServiceByIdHandler,
  getTouristServiceByUserIdHandler,
  deleteTouristServiceByIdHandler,
  updateTouristServiceHandler,
} = require('./touristService.controller')

const router = Router();
// const { isAuthenticated } = require('../../auth/auth.touristService')


router.get('/', getAllTouristServicesHandler);
router.get('/touristService/:id', getTouristServiceByIdHandler);
router.post('/', createTouristServiceHandler);
router.patch('/touristService/edit/:id', updateTouristServiceHandler)

router.get('/user/:id', getTouristServiceByUserIdHandler);
router.delete('/touristService/:id', deleteTouristServiceByIdHandler);

module.exports = router;
