const Tour = require('./tour.model');

/**
 * Get all tours
 * @returns all tours
 */

 async function getAllTours() {
  const tours = Tour.find();
  return tours;
}



/**
 * Get tour by id
 * @param {string} id Indentifier of the tour to be filtered
 * @returns tour
*/

async function getTourById (id) {
  const tour = Tour.findById(id).populate('user');
  return tour;
}


/**
 * Get tour by user id
 * @param {string} id Indentifier of the tour to be filtered
 * @returns tours
*/

async function getToursByUserId(id) {
  const tours = await Tour.find({user: id});
  return tours;

}

/**
 * Create a new tour
 * @param {Object} tour Tour to create
 * @returns tour created
 */

async function createTour(tour) {
  const newTour = new Tour(tour);
  const savedTour = await newTour.save();
  return savedTour;
}

/**
 * Update a tour
 * @param {string} id Indentifier of the tour to be updated
 * @param {*} tour Body of the tour to be updated
 * @returns tour updated
 */

async function updateTour(id, tour) {
  const updateTour = await Tour.findByIdAndUpdate(id, tour);
  return updateTour;
}

/**
 * Delete a tour
 * @param {String} id Identifier of the tour to be deleted
 * @returns Tour deleted
 */

async function deleteTour(id) {
  const deletedTour = await Tour.findByIdAndDelete(id)
  return deletedTour;
}

module.exports = {
  getAllTours,
  getTourById,
  getToursByUserId,
  createTour,
  updateTour,
  deleteTour,
}

