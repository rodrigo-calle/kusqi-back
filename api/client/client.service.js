const Client = require('./client.model');

/**
 * Get all clients
 * @returns all clients
 */

 async function getAllClients() {
  const clients = Client.find();
  return clients;
}



/**
 * Get client by dni
 * @param {string} dni of client to be filtered
 * @return client
 */

async function getClientByDni(dni) {
  const client = Client.find({dni: dni});
  return client;
}
/**
 * Get client by id
 * @param {string} id Indentifier of the client to be filtered
 * @returns client
*/

async function getClientById (id) {
  const client = Client.findById(id).populate('user');
  return client;
}


/**
 * Get client by user id
 * @param {string} id Indentifier of the client to be filtered
 * @returns clients
*/

async function getClientsByUserId(id) {
  const clients = await Client.find({user: id});
  return clients;

}

/**
 * Create a new client
 * @param {Object} client Client to create
 * @returns client created
 */

async function createClient(client) {
  const newClient = new Client(client);
  const savedClient = await newClient.save();
  return savedClient;
}

/**
 * Update a client
 * @param {string} id Indentifier of the client to be updated
 * @param {*} client Body of the client to be updated
 * @returns client updated
 */

async function updateClient(id, client) {
  const updateClient = await Client.findByIdAndUpdate(id, client);
  return updateClient;
}

/**
 * Delete a client
 * @param {String} id Identifier of the client to be deleted
 * @returns Client deleted
 */

async function deleteClient(id) {
  const deletedClient = await Client.findByIdAndDelete(id)
  return deletedClient;
}

module.exports = {
  getAllClients,
  getClientById,
  getClientsByUserId,
  createClient,
  updateClient,
  deleteClient,
  getClientByDni
}

