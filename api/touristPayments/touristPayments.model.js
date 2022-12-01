const mongoose = require('mongoose');

const TouristPaymentsSchema = mongoose.Schema({
  status: {
    type: String,
    default: 'PENDING'
  },
  amount: {
    type: Number,
  },
  guide: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'TouristGuide',
    required: false,
  },
  vehicle: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Vehicles',
    required: false,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  dateRegistered: {
    type: Date,
  }
}, {
    timestamps: true
},)

module.exports = mongoose.model('TourPayments', TouristPaymentsSchema);
