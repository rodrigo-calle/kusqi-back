const Vehicle = require('./vehicle.model');

/**
 * Get all vehicles
 * @returns all vehicles
 */

 async function getAllVehicles() {
  const vehicles = Vehicle.find();
  return vehicles;
}



/**
 * Get vehicle by id
 * @param {string} id Indentifier of the vehicle to be filtered
 * @returns vehicle
*/

async function getVehicleById (id) {
  const vehicle = Vehicle.findById(id).populate('user');
  return vehicle;
}


/**
 * Get vehicle by user id
 * @param {string} id Indentifier of the vehicle to be filtered
 * @returns vehicles
*/

async function getVehiclesByUserId(id) {
  const vehicles = await Vehicle.find({user: id});
  return vehicles;

}

/**
 * Create a new vehicle
 * @param {Object} vehicle Vehicle to create
 * @returns vehicle created
 */

async function createVehicle(vehicle) {
  const newVehicle = new Vehicle(vehicle);
  const savedVehicle = await newVehicle.save();
  return savedVehicle;
}

/**
 * Update a vehicle
 * @param {string} id Indentifier of the vehicle to be updated
 * @param {*} vehicle Body of the vehicle to be updated
 * @returns vehicle updated
 */

async function updateVehicle(id, vehicle) {
  const updateVehicle = await Vehicle.findByIdAndUpdate(id, vehicle);
  return updateVehicle;
}

/**
 * Delete a vehicle
 * @param {String} id Identifier of the vehicle to be deleted
 * @returns Vehicle deleted
 */

async function deleteVehicle(id) {
  const deletedVehicle = await Vehicle.findByIdAndDelete(id)
  return deletedVehicle;
}

module.exports = {
  getAllVehicles,
  getVehicleById,
  getVehiclesByUserId,
  createVehicle,
  updateVehicle,
  deleteVehicle,
}

