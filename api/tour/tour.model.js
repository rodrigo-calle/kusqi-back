const mongoose = require('mongoose');

const ToursSchema = mongoose.Schema({
  capacity: {
    type: Number,
  },
  status: {
    type: String,
    default: 'PENDING'
  },
  phone: {
    type: String,
    require: true
  },
  notes: {
    type: String,
  },
  key: {
    type: String,
  },
  client: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Clients',
    required: true,
  },
  vehicle: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Vehicles',
    required: true,
  },
  service: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'TouristServices',
    required: true,
  },
  touristGuide: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'TouristGuide',
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  }
}, {
    timestamps: true
},)

module.exports = mongoose.model('Tours', ToursSchema);
