const TouristGuide = require('./touristGuide.model');

/**
 * Get all touristGuides
 * @returns all touristGuides
 */

 async function getAllTouristGuides() {
  const touristGuides = TouristGuide.find();
  return touristGuides;
}



/**
 * Get touristGuide by id
 * @param {string} id Indentifier of the touristGuide to be filtered
 * @returns touristGuide
*/

async function getTouristGuideById (id) {
  const touristGuide = TouristGuide.findById(id).populate('user');
  return touristGuide;
}


/**
 * Get touristGuide by user id
 * @param {string} id Indentifier of the touristGuide to be filtered
 * @returns touristGuides
*/

async function getTouristGuidesByUserId(id) {
  const touristGuides = await TouristGuide.find({user: id});
  return touristGuides;

}

/**
 * Create a new touristGuide
 * @param {Object} touristGuide TouristGuide to create
 * @returns touristGuide created
 */

async function createTouristGuide(touristGuide) {
  const newTouristGuide = new TouristGuide(touristGuide);
  const savedTouristGuide = await newTouristGuide.save();
  return savedTouristGuide;
}

/**
 * Update a touristGuide
 * @param {string} id Indentifier of the touristGuide to be updated
 * @param {*} touristGuide Body of the touristGuide to be updated
 * @returns touristGuide updated
 */

async function updateTouristGuide(id, touristGuide) {
  const updateTouristGuide = await TouristGuide.findByIdAndUpdate(id, touristGuide);
  return updateTouristGuide;
}

/**
 * Delete a touristGuide
 * @param {String} id Identifier of the touristGuide to be deleted
 * @returns TouristGuide deleted
 */

async function deleteTouristGuide(id) {
  const deletedTouristGuide = await TouristGuide.findByIdAndDelete(id)
  return deletedTouristGuide;
}

module.exports = {
  getAllTouristGuides,
  getTouristGuideById,
  getTouristGuidesByUserId,
  createTouristGuide,
  updateTouristGuide,
  deleteTouristGuide,
}

