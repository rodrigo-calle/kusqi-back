const mongoose = require('mongoose');

const ClientsSchema = mongoose.Schema({
  name: {
    type: String,
  },
  lastName: {
    type: String,
  },
  phone: {
    type: String,
  },
  dni: {
    type: String,
  },
  provenance: {
    type: String,
  },
  email: {
    type: String,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Clients', ClientsSchema)
