const mongoose = require('mongoose');

const ToursSchema = mongoose.Schema({
  holder: {
    type: String,
  },
  quantity: {
    type: Number,
  },
  status: {
    type: String,
    default: 'PENDING'
  },
  notes: {
    type: String,
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
