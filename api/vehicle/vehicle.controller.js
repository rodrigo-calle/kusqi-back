const {
  createVehicle,
  deleteVehicle,
  getAllVehicles,
  getVehicleById,
  getVehiclesByUserId,
  updateVehicle,
} = require('./vehicle.service')

async function getAllVehiclesHandler(req, res) {
  try{
    const vehicles = await getAllVehicles();
    return res.status(200).json(vehicles)
  } catch(err) {
    return res.status(500).json({ error: err.message })
  }
}

async function createVehicleHandler(req, res) {
  const vehicleData = req.body;
  try {
    const vehicle = await createVehicle(vehicleData);
    return res.status(200).json(vehicle);
  } catch(err) {
    return res.status(500).json({ error: err.message })
  }
}

async function getVehicleByIdHandler(req, res) {
  const { id } = req.params;
  try {
    const vehicle = await getVehicleById(id);

    if (!vehicle) {
      return res.status(404).json({ message: `Vehicle not found with id: ${id}` });
    }

    return res.status(200).json(vehicle);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

async function getVehicleByUserIdHandler(req, res){
    const {id} = req.params;
    try {
      const vehicle = await getVehiclesByUserId(id);
      if(!vehicle) {
        return res.status(404).json({
          message: `vehicle with user id ${id} not found`
        });
      }
      return res.status(200).json(vehicle);
    } catch(err) {
      return res.status(500).json({
        error: err.message
      })
    }
}

async function updateVehicleHandler(req, res) {
  const { id } = req.params;
  try {
    const vehicle = await updateVehicle(id, req.body);
    if(!vehicle) {
      return res.status(404).json({
        message: `vehicle with id ${id} not found`
      });
    }
    return res.status(200).json(vehicle);
  } catch (err) {
    return res.status(500).json({
      error: err.message
    })
  }
}

async function deleteVehicleByIdHandler(req, res){
  const { id } = req.params;
  try {
    const vehicle = await deleteVehicle(id);
    if(!vehicle) {
      return res.status(404).json({
        message: `vehicle with id ${id} not found`
      });
    }
    return res.status(200).json(vehicle);
  } catch(err) {
    return res.status(500).json({
      error: err.message
    })
  }

}


module.exports = {
  getAllVehiclesHandler,
  createVehicleHandler,
  getVehicleByIdHandler,
  getVehicleByUserIdHandler,
  updateVehicleHandler,
  deleteVehicleByIdHandler,
}
