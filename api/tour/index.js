const { Router } = require('express');

const {
  createTourHandler,
  getAllToursHandler,
  getTourByIdHandler,
  getTourByUserIdHandler,
  deleteTourByIdHandler,
  updateTourHandler,
} = require('./tour.controller')

const router = Router();
// const { isAuthenticated } = require('../../auth/auth.tour')


router.get('/', getAllToursHandler);
router.get('/tour/:id', getTourByIdHandler);
router.post('/', createTourHandler);
router.patch('/tour/edit/:id', updateTourHandler)

router.get('/user/:id', getTourByUserIdHandler);
router.delete('/tour/:id', deleteTourByIdHandler);

module.exports = router;
