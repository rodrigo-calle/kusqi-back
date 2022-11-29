const { Router } = require('express');

const {
  createTouristGuideHandler,
  getAllTouristGuidesHandler,
  getTouristGuideByIdHandler,
  getTouristGuideByUserIdHandler,
  deleteTouristGuideByIdHandler,
  updateTouristGuideHandler,
} = require('./touristGuide.controller')

const router = Router();
// const { isAuthenticated } = require('../../auth/auth.touristGuide')


router.get('/', getAllTouristGuidesHandler);
router.get('/touristGuide/:id', getTouristGuideByIdHandler);
router.post('/', createTouristGuideHandler);
router.patch('/touristGuide/edit/:id', updateTouristGuideHandler)

router.get('/user/:id', getTouristGuideByUserIdHandler);
router.delete('/touristGuide/:id', deleteTouristGuideByIdHandler);

module.exports = router;
