const mongoose = require('mongoose');
const PaymentKindSchema = new mongoose.Schema({
  paymentType: String,
  amount: Number,
});
const TouristSellsSchema = mongoose.Schema({
  client: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Clients',
    required: true,
  },
  dni: {
    type: String,
    required: true,
  },
  phoneOne: {
    type: String,
    required: true,
  },
  phoneTwo: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  tour: {
    type: String,
    required: true,
  },
  paymentList: {
    type: [PaymentKindSchema],
    required: true,
    default: undefined,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
}, {
  timestamps: true
}, )

module.exports = mongoose.model('TourSell', TouristSellsSchema);
