const {
  createTour,
  deleteTour,
  getAllTours,
  getTourById,
  getToursByUserId,
  updateTour,
} = require('./tour.service')

async function getAllToursHandler(req, res) {
  try{
    const tours = await getAllTours();
    return res.status(200).json(tours)
  } catch(err) {
    return res.status(500).json({ error: err.message })
  }
}

async function createTourHandler(req, res) {
  const tourData = req.body;
  try {
    const tour = await createTour(tourData);
    return res.status(200).json(tour);
  } catch(err) {
    return res.status(500).json({ error: err.message })
  }
}

async function getTourByIdHandler(req, res) {
  const { id } = req.params;
  try {
    const tour = await getTourById(id);

    if (!tour) {
      return res.status(404).json({ message: `Tour not found with id: ${id}` });
    }

    return res.status(200).json(tour);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

async function getTourByUserIdHandler(req, res){
    const {id} = req.params;
    try {
      const tour = await getToursByUserId(id);
      if(!tour) {
        return res.status(404).json({
          message: `tour with user id ${id} not found`
        });
      }
      return res.status(200).json(tour);
    } catch(err) {
      return res.status(500).json({
        error: err.message
      })
    }
}

async function updateTourHandler(req, res) {
  const { id } = req.params;
  try {
    const tour = await updateTour(id, req.body);
    if(!tour) {
      return res.status(404).json({
        message: `tour with id ${id} not found`
      });
    }
    return res.status(200).json(tour);
  } catch (err) {
    return res.status(500).json({
      error: err.message
    })
  }
}

async function deleteTourByIdHandler(req, res){
  const { id } = req.params;
  try {
    const tour = await deleteTour(id);
    if(!tour) {
      return res.status(404).json({
        message: `tour with id ${id} not found`
      });
    }
    return res.status(200).json(tour);
  } catch(err) {
    return res.status(500).json({
      error: err.message
    })
  }

}


module.exports = {
  getAllToursHandler,
  createTourHandler,
  getTourByIdHandler,
  getTourByUserIdHandler,
  updateTourHandler,
  deleteTourByIdHandler,
}
