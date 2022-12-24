const {
  createTouristSell,
  deleteTouristSell,
  getAllTouristSells,
  getTouristSellById,
  getTouristSellsByUserId,
  updateTouristSell,
} = require('./touristSells.service')

async function getAllTouristSellsHandler(req, res) {
  try{
    const allTouristSells = await getAllTouristSells();
    return res.status(200).json(allTouristSells)
  } catch(err) {
    return res.status(500).json({ error: err.message })
  }
}

async function createTouristSellHandler(req, res) {
  const touristSellData = req.body;
  try {
    const touristSell = await createTouristSell(touristSellData);
    return res.status(200).json(touristSell);
  } catch(err) {
    return res.status(500).json({ error: err.message })
  }
}

async function getTouristSellByIdHandler(req, res) {
  const { id } = req.params;
  try {
    const touristSell = await getTouristSellById(id);

    if (!touristSell) {
      return res.status(404).json({ message: `TouristSell not found with id: ${id}` });
    }

    return res.status(200).json(touristSell);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

async function getTouristSellByUserIdHandler(req, res){
    const {id} = req.params;
    try {
      const touristSell = await getTouristSellsByUserId(id);
      if(!touristSell) {
        return res.status(404).json({
          message: `touristSell with user id ${id} not found`
        });
      }
      return res.status(200).json(touristSell);
    } catch(err) {
      return res.status(500).json({
        error: err.message
      })
    }
}

async function updateTouristSellHandler(req, res) {
  const { id } = req.params;
  try {
    const touristSell = await updateTouristSell(id, req.body);
    if(!touristSell) {
      return res.status(404).json({
        message: `touristSell with id ${id} not found`
      });
    }
    return res.status(200).json(touristSell);
  } catch (err) {
    return res.status(500).json({
      error: err.message
    })
  }
}

async function deleteTouristSellByIdHandler(req, res){
  const { id } = req.params;
  try {
    const touristSell = await deleteTouristSell(id);
    if(!touristSell) {
      return res.status(404).json({
        message: `touristSell with id ${id} not found`
      });
    }
    return res.status(200).json(touristSell);
  } catch(err) {
    return res.status(500).json({
      error: err.message
    })
  }

}


module.exports = {
  getAllTouristSellsHandler,
  createTouristSellHandler,
  getTouristSellByIdHandler,
  getTouristSellByUserIdHandler,
  updateTouristSellHandler,
  deleteTouristSellByIdHandler,
}
