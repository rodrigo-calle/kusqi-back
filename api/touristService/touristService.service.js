const TouristService = require('./touristService.model');

/**
 * Get all touristServices
 * @returns all touristServices
 */

 async function getAllTouristServices() {
  const touristServices = TouristService.find();
  return touristServices;
}



/**
 * Get touristService by id
 * @param {string} id Indentifier of the touristService to be filtered
 * @returns touristService
*/

async function getTouristServiceById (id) {
  const touristService = TouristService.findById(id).populate('user');
  return touristService;
}


/**
 * Get touristService by user id
 * @param {string} id Indentifier of the touristService to be filtered
 * @returns touristServices
*/

async function getTouristServicesByUserId(id) {
  const touristServices = await TouristService.find({user: id});
  return touristServices;

}

/**
 * Create a new touristService
 * @param {Object} touristService TouristService to create
 * @returns touristService created
 */

async function createTouristService(touristService) {
  const newTouristService = new TouristService(touristService);
  const savedTouristService = await newTouristService.save();
  return savedTouristService;
}

/**
 * Update a touristService
 * @param {string} id Indentifier of the touristService to be updated
 * @param {*} touristService Body of the touristService to be updated
 * @returns touristService updated
 */

async function updateTouristService(id, touristService) {
  const updateTouristService = await TouristService.findByIdAndUpdate(id, touristService);
  return updateTouristService;
}

/**
 * Delete a touristService
 * @param {String} id Identifier of the touristService to be deleted
 * @returns TouristService deleted
 */

async function deleteTouristService(id) {
  const deletedTouristService = await TouristService.findByIdAndDelete(id)
  return deletedTouristService;
}

module.exports = {
  getAllTouristServices,
  getTouristServiceById,
  getTouristServicesByUserId,
  createTouristService,
  updateTouristService,
  deleteTouristService,
}

