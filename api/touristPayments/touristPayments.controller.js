const {
  createTouristPayment,
  deleteTouristPayment,
  getAllTouristPaymentistPayments,
  getTouristPaymentById,
  getTouristPaymentistPaymentsByUserId,
  updateTouristPayment,
} = require('./touristPayments.service')

async function getAllTouristPaymentistPaymentsHandler(req, res) {
  try{
    const touristPaymentistPayments = await getAllTouristPaymentistPayments();
    return res.status(200).json(touristPaymentistPayments)
  } catch(err) {
    return res.status(500).json({ error: err.message })
  }
}

async function createTouristPaymentHandler(req, res) {
  const touristPaymentData = req.body;
  try {
    const touristPayment = await createTouristPayment(touristPaymentData);
    return res.status(200).json(touristPayment);
  } catch(err) {
    return res.status(500).json({ error: err.message })
  }
}

async function getTouristPaymentByIdHandler(req, res) {
  const { id } = req.params;
  try {
    const touristPayment = await getTouristPaymentById(id);

    if (!touristPayment) {
      return res.status(404).json({ message: `TouristPayment not found with id: ${id}` });
    }

    return res.status(200).json(touristPayment);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

async function getTouristPaymentByUserIdHandler(req, res){
    const {id} = req.params;
    try {
      const touristPayment = await getTouristPaymentistPaymentsByUserId(id);
      if(!touristPayment) {
        return res.status(404).json({
          message: `touristPayment with user id ${id} not found`
        });
      }
      return res.status(200).json(touristPayment);
    } catch(err) {
      return res.status(500).json({
        error: err.message
      })
    }
}

async function updateTouristPaymentHandler(req, res) {
  const { id } = req.params;
  try {
    const touristPayment = await updateTouristPayment(id, req.body);
    if(!touristPayment) {
      return res.status(404).json({
        message: `touristPayment with id ${id} not found`
      });
    }
    return res.status(200).json(touristPayment);
  } catch (err) {
    return res.status(500).json({
      error: err.message
    })
  }
}

async function deleteTouristPaymentByIdHandler(req, res){
  const { id } = req.params;
  try {
    const touristPayment = await deleteTouristPayment(id);
    if(!touristPayment) {
      return res.status(404).json({
        message: `touristPayment with id ${id} not found`
      });
    }
    return res.status(200).json(touristPayment);
  } catch(err) {
    return res.status(500).json({
      error: err.message
    })
  }

}


module.exports = {
  getAllTouristPaymentistPaymentsHandler,
  createTouristPaymentHandler,
  getTouristPaymentByIdHandler,
  getTouristPaymentByUserIdHandler,
  updateTouristPaymentHandler,
  deleteTouristPaymentByIdHandler,
}
