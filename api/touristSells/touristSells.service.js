const TouristSell = require('./touristSells.model');

/**
 * Get all touristSells
 * @returns all touristSells
 */

 async function getAllTouristSells() {
  const touristSells = TouristSell.find();
  return touristSells;
}



/**
 * Get tour by id
 * @param {string} id Indentifier of the tour to be filtered
 * @returns tour
*/

async function getTouristSellById (id) {
  const tour = TouristSell.findById(id)
    .populate({path: 'user'})
    .populate({path: 'client'});
  return tour;
}


/**
 * Get tour by user id
 * @param {string} id Indentifier of the tour to be filtered
 * @returns touristSells
*/

async function getTouristSellstByUserId(id) {
  const touristSells = await TouristSell
    .find({user: id})
    .populate({path: 'client'})
    .populate({path: 'user'});
  return touristSells;

}

/**
 * Create a new tour
 * @param {Object} tour TouristSell to create
 * @returns tour created
 */

async function createTouristSell(tour) {
  const newTouristSell = new TouristSell(tour);
  const savedTouristSell = await newTouristSell.save();
  return savedTouristSell;
}

/**
 * Update a tour
 * @param {string} id Indentifier of the tour to be updated
 * @param {*} tour Body of the tour to be updated
 * @returns tour updated
 */

async function updateTouristSell(id, tour) {
  const updateTouristSell = await TouristSell.findByIdAndUpdate(id, tour);
  return updateTouristSell;
}

/**
 * Delete a tour
 * @param {String} id Identifier of the tour to be deleted
 * @returns TouristSell deleted
 */

async function deleteTouristSell(id) {
  const deletedTouristSell = await TouristSell.findByIdAndDelete(id)
  return deletedTouristSell;
}

module.exports = {
  getAllTouristSells,
  getTouristSellById,
  getTouristSellstByUserId,
  createTouristSell,
  updateTouristSell,
  deleteTouristSell,
}

