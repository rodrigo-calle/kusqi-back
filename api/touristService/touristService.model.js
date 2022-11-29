const mongoose = require('mongoose');

const TouristServicesSchema = mongoose.Schema({
  name: {
    type: String,
  },
  price: {
    type: Number,
  },
  description: {
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

module.exports = mongoose.model('TouristServices', TouristServicesSchema)
