const mongoose = require('mongoose');

const TouristGuideSchema = mongoose.Schema({
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
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('TouristGuide', TouristGuideSchema)
