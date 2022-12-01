const TouristPayment = require('./touristPayments.model');

/**
 * Get all touristPayments
 * @returns all touristPayments
 */

 async function getAllTouristPaymentistPayments() {
  const touristPayments = TouristPayment.find();
  return touristPayments;
}



/**
 * Get tour by id
 * @param {string} id Indentifier of the tour to be filtered
 * @returns tour
*/

async function getTouristPaymentById (id) {
  const tour = TouristPayment.findById(id).populate('user');
  return tour;
}


/**
 * Get tour by user id
 * @param {string} id Indentifier of the tour to be filtered
 * @returns touristPayments
*/

async function getTouristPaymentistPaymentsByUserId(id) {
  const touristPayments = await TouristPayment.find({user: id});
  return touristPayments;

}

/**
 * Create a new tour
 * @param {Object} tour TouristPayment to create
 * @returns tour created
 */

async function createTouristPayment(tour) {
  const newTouristPayment = new TouristPayment(tour);
  const savedTouristPayment = await newTouristPayment.save();
  return savedTouristPayment;
}

/**
 * Update a tour
 * @param {string} id Indentifier of the tour to be updated
 * @param {*} tour Body of the tour to be updated
 * @returns tour updated
 */

async function updateTouristPayment(id, tour) {
  const updateTouristPayment = await TouristPayment.findByIdAndUpdate(id, tour);
  return updateTouristPayment;
}

/**
 * Delete a tour
 * @param {String} id Identifier of the tour to be deleted
 * @returns TouristPayment deleted
 */

async function deleteTouristPayment(id) {
  const deletedTouristPayment = await TouristPayment.findByIdAndDelete(id)
  return deletedTouristPayment;
}

module.exports = {
  getAllTouristPaymentistPayments,
  getTouristPaymentById,
  getTouristPaymentistPaymentsByUserId,
  createTouristPayment,
  updateTouristPayment,
  deleteTouristPayment,
}

