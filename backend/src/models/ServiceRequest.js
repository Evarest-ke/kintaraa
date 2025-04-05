const mongoose = require('mongoose');

const ServiceRequestSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  serviceType: {
    type: String,
    enum: ['Legal', 'Medical', 'Counseling', 'Police'],
    required: true
  },
  description: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['Pending', 'InProgress', 'Completed', 'Cancelled'],
    default: 'Pending'
  },
  priority: {
    type: String,
    enum: ['Emergency', 'High', 'Medium', 'Low'],
    default: 'Medium'
  },
  notes: {
    type: String
  },
  preferredContact: {
    type: String
  },
  contactDetails: {
    type: String
  },
  dateTime: {
    type: Date
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('ServiceRequest', ServiceRequestSchema); 