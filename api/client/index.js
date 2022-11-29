const { Router } = require('express');

const {
  createClientHandler,
  getAllClientsHandler,
  getClientByIdHandler,
  getClientByUserIdHandler,
  deleteClientByIdHandler,
  updateClientHandler,
} = require('./client.controller')

const router = Router();
// const { isAuthenticated } = require('../../auth/auth.client')


router.get('/', getAllClientsHandler);
router.get('/client/:id', getClientByIdHandler);
router.post('/', createClientHandler);
router.patch('/client/edit/:id', updateClientHandler)

router.get('/user/:id', getClientByUserIdHandler);
router.delete('/client/:id', deleteClientByIdHandler);

module.exports = router;
