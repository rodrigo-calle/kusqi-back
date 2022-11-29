const {
  createTouristService,
  deleteTouristService,
  getAllTouristServices,
  getTouristServiceById,
  getTouristServicesByUserId,
  updateTouristService,
} = require('./touristService.service')

async function getAllTouristServicesHandler(req, res) {
  try{
    const touristServices = await getAllTouristServices();
    return res.status(200).json(touristServices)
  } catch(err) {
    return res.status(500).json({ error: err.message })
  }
}

async function createTouristServiceHandler(req, res) {
  const touristServiceData = req.body;
  try {
    const touristService = await createTouristService(touristServiceData);
    return res.status(200).json(touristService);
  } catch(err) {
    return res.status(500).json({ error: err.message })
  }
}

async function getTouristServiceByIdHandler(req, res) {
  const { id } = req.params;
  try {
    const touristService = await getTouristServiceById(id);

    if (!touristService) {
      return res.status(404).json({ message: `TouristService not found with id: ${id}` });
    }

    return res.status(200).json(touristService);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

async function getTouristServiceByUserIdHandler(req, res){
    const {id} = req.params;
    try {
      const touristService = await getTouristServicesByUserId(id);
      if(!touristService) {
        return res.status(404).json({
          message: `touristService with user id ${id} not found`
        });
      }
      return res.status(200).json(touristService);
    } catch(err) {
      return res.status(500).json({
        error: err.message
      })
    }
}

async function updateTouristServiceHandler(req, res) {
  const { id } = req.params;
  try {
    const touristService = await updateTouristService(id, req.body);
    if(!touristService) {
      return res.status(404).json({
        message: `touristService with id ${id} not found`
      });
    }
    return res.status(200).json(touristService);
  } catch (err) {
    return res.status(500).json({
      error: err.message
    })
  }
}

async function deleteTouristServiceByIdHandler(req, res){
  const { id } = req.params;
  try {
    const touristService = await deleteTouristService(id);
    if(!touristService) {
      return res.status(404).json({
        message: `touristService with id ${id} not found`
      });
    }
    return res.status(200).json(touristService);
  } catch(err) {
    return res.status(500).json({
      error: err.message
    })
  }

}


module.exports = {
  getAllTouristServicesHandler,
  createTouristServiceHandler,
  getTouristServiceByIdHandler,
  getTouristServiceByUserIdHandler,
  updateTouristServiceHandler,
  deleteTouristServiceByIdHandler,
}
