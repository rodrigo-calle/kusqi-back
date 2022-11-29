const {
  createTouristGuide,
  deleteTouristGuide,
  getAllTouristGuides,
  getTouristGuideById,
  getTouristGuidesByUserId,
  updateTouristGuide,
} = require('./touristGuide.service')

async function getAllTouristGuidesHandler(req, res) {
  try{
    const touristGuides = await getAllTouristGuides();
    return res.status(200).json(touristGuides)
  } catch(err) {
    return res.status(500).json({ error: err.message })
  }
}

async function createTouristGuideHandler(req, res) {
  const touristGuideData = req.body;
  try {
    const touristGuide = await createTouristGuide(touristGuideData);
    return res.status(200).json(touristGuide);
  } catch(err) {
    return res.status(500).json({ error: err.message })
  }
}

async function getTouristGuideByIdHandler(req, res) {
  const { id } = req.params;
  try {
    const touristGuide = await getTouristGuideById(id);

    if (!touristGuide) {
      return res.status(404).json({ message: `TouristGuide not found with id: ${id}` });
    }

    return res.status(200).json(touristGuide);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

async function getTouristGuideByUserIdHandler(req, res){
    const {id} = req.params;
    try {
      const touristGuide = await getTouristGuidesByUserId(id);
      if(!touristGuide) {
        return res.status(404).json({
          message: `touristGuide with user id ${id} not found`
        });
      }
      return res.status(200).json(touristGuide);
    } catch(err) {
      return res.status(500).json({
        error: err.message
      })
    }
}

async function updateTouristGuideHandler(req, res) {
  const { id } = req.params;
  try {
    const touristGuide = await updateTouristGuide(id, req.body);
    if(!touristGuide) {
      return res.status(404).json({
        message: `touristGuide with id ${id} not found`
      });
    }
    return res.status(200).json(touristGuide);
  } catch (err) {
    return res.status(500).json({
      error: err.message
    })
  }
}

async function deleteTouristGuideByIdHandler(req, res){
  const { id } = req.params;
  try {
    const touristGuide = await deleteTouristGuide(id);
    if(!touristGuide) {
      return res.status(404).json({
        message: `touristGuide with id ${id} not found`
      });
    }
    return res.status(200).json(touristGuide);
  } catch(err) {
    return res.status(500).json({
      error: err.message
    })
  }

}


module.exports = {
  getAllTouristGuidesHandler,
  createTouristGuideHandler,
  getTouristGuideByIdHandler,
  getTouristGuideByUserIdHandler,
  updateTouristGuideHandler,
  deleteTouristGuideByIdHandler,
}
