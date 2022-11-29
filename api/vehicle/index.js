const { Router } = require('express');

const {
  createVehicleHandler,
  getAllVehiclesHandler,
  getVehicleByIdHandler,
  getVehicleByUserIdHandler,
  deleteVehicleByIdHandler,
  updateVehicleHandler,
} = require('./vehicle.controller')

const router = Router();
// const { isAuthenticated } = require('../../auth/auth.vehicle')


router.get('/', getAllVehiclesHandler);
router.get('/vehicle/:id', getVehicleByIdHandler);
router.post('/', createVehicleHandler);
router.patch('/vehicle/edit/:id', updateVehicleHandler)

router.get('/user/:id', getVehicleByUserIdHandler);
router.delete('/vehicle/:id', deleteVehicleByIdHandler);

module.exports = router;
