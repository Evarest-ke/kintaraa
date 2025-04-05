const mongoose = require('mongoose');

const TokenBalanceSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true
  },
  balance: {
    type: Number,
    default: 0
  },
  lastUpdated: {
    type: Date,
    default: Date.now
  },
  totalEarned: {
    type: Number,
    default: 0
  },
  totalSpent: {
    type: Number,
    default: 0
  }
});

const TokenTransactionSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now
  },
  serviceType: {
    type: String
  }
});

const TokenBalance = mongoose.model('TokenBalance', TokenBalanceSchema);
const TokenTransaction = mongoose.model('TokenTransaction', TokenTransactionSchema);

module.exports = {
  TokenBalance,
  TokenTransaction
}; 