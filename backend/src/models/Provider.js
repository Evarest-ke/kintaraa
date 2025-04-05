const mongoose = require('mongoose');

const ProviderSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  serviceType: {
    type: String,
    enum: ['Legal', 'Medical', 'Counseling', 'Police'],
    required: true
  },
  isAvailable: {
    type: Boolean,
    default: true
  },
  currentLoad: {
    type: Number,
    default: 0
  },
  totalCases: {
    type: Number,
    default: 0
  },
  rating: {
    type: Number,
    default: 0,
    min: 0,
    max: 5
  }
});

module.exports = mongoose.model('Provider', ProviderSchema); 