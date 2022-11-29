const mongoose = require('mongoose');

const VehiclesSchema = mongoose.Schema({
  name: {
    type: String,
  },
  lastName: {
    type: String,
  },
  phone: {
    type: String,
  },
  license_plate: {
    type: String,
  },
  seats_number:{
    type: Number,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Vehicles', VehiclesSchema)
