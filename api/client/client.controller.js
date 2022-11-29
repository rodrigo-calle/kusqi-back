const {
  createClient,
  deleteClient,
  getAllClients,
  getClientById,
  getClientsByUserId,
  updateClient,
} = require('./client.service')

async function getAllClientsHandler(req, res) {
  try{
    const clients = await getAllClients();
    return res.status(200).json(clients)
  } catch(err) {
    return res.status(500).json({ error: err.message })
  }
}

async function createClientHandler(req, res) {
  const clientData = req.body;
  try {
    const client = await createClient(clientData);
    return res.status(200).json(client);
  } catch(err) {
    return res.status(500).json({ error: err.message })
  }
}

async function getClientByIdHandler(req, res) {
  const { id } = req.params;
  try {
    const client = await getClientById(id);

    if (!client) {
      return res.status(404).json({ message: `Client not found with id: ${id}` });
    }

    return res.status(200).json(client);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

async function getClientByUserIdHandler(req, res){
    const {id} = req.params;
    try {
      const client = await getClientsByUserId(id);
      if(!client) {
        return res.status(404).json({
          message: `client with user id ${id} not found`
        });
      }
      return res.status(200).json(client);
    } catch(err) {
      return res.status(500).json({
        error: err.message
      })
    }
}

async function updateClientHandler(req, res) {
  const { id } = req.params;
  try {
    const client = await updateClient(id, req.body);
    if(!client) {
      return res.status(404).json({
        message: `client with id ${id} not found`
      });
    }
    return res.status(200).json(client);
  } catch (err) {
    return res.status(500).json({
      error: err.message
    })
  }
}

async function deleteClientByIdHandler(req, res){
  const { id } = req.params;
  try {
    const client = await deleteClient(id);
    if(!client) {
      return res.status(404).json({
        message: `client with id ${id} not found`
      });
    }
    return res.status(200).json(client);
  } catch(err) {
    return res.status(500).json({
      error: err.message
    })
  }

}


module.exports = {
  getAllClientsHandler,
  createClientHandler,
  getClientByIdHandler,
  getClientByUserIdHandler,
  updateClientHandler,
  deleteClientByIdHandler,
}
