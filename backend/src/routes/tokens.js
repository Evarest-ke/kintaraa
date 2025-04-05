const express = require('express');
const { TokenBalance, TokenTransaction } = require('../models/Token');
const { authenticate } = require('../middleware/auth');

const router = express.Router();

// Initialize user tokens
router.post('/initialize', authenticate, async (req, res) => {
  try {
    // Check if user already has a token balance
    let tokenBalance = await TokenBalance.findOne({ userId: req.user.id });
    
    if (tokenBalance) {
      return res.status(400).json({ message: 'User tokens already initialized' });
    }
    
    // Create new token balance with initial amount of 0
    tokenBalance = new TokenBalance({
      userId: req.user.id,
      balance: 0,
      totalEarned: 0,
      totalSpent: 0
    });
    
    await tokenBalance.save();
    
    res.json({ message: 'User tokens initialized successfully', balance: 0 });
  } catch (error) {
    console.error('Error initializing user tokens:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get token balance
router.get('/balance', authenticate, async (req, res) => {
  try {
    const tokenBalance = await TokenBalance.findOne({ userId: req.user.id });
    
    if (!tokenBalance) {
      return res.status(404).json({ message: 'Token balance not found' });
    }
    
    res.json(tokenBalance);
  } catch (error) {
    console.error('Error getting token balance:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Add tokens
router.post('/add', authenticate, async (req, res) => {
  try {
    const { amount, description, serviceType } = req.body;
    
    if (!amount || amount <= 0) {
      return res.status(400).json({ message: 'Invalid amount' });
    }
    
    // Find or create token balance
    let tokenBalance = await TokenBalance.findOne({ userId: req.user.id });
    
    if (!tokenBalance) {
      tokenBalance = new TokenBalance({
        userId: req.user.id,
        balance: 0,
        totalEarned: 0,
        totalSpent: 0
      });
    }
    
    // Update balance
    tokenBalance.balance += amount;
    tokenBalance.totalEarned += amount;
    tokenBalance.lastUpdated = Date.now();
    
    // Create transaction record
    const transaction = new TokenTransaction({
      userId: req.user.id,
      amount,
      description: description || 'Token reward',
      serviceType
    });
    
    await Promise.all([tokenBalance.save(), transaction.save()]);
    
    res.json({ 
      message: 'Tokens added successfully',
      balance: tokenBalance.balance,
      amount,
      transaction: transaction._id
    });
  } catch (error) {
    console.error('Error adding tokens:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Spend tokens
router.post('/spend', authenticate, async (req, res) => {
  try {
    const { amount, description, serviceType } = req.body;
    
    if (!amount || amount <= 0) {
      return res.status(400).json({ message: 'Invalid amount' });
    }
    
    // Find token balance
    const tokenBalance = await TokenBalance.findOne({ userId: req.user.id });
    
    if (!tokenBalance) {
      return res.status(404).json({ message: 'Token balance not found' });
    }
    
    // Check if user has enough tokens
    if (tokenBalance.balance < amount) {
      return res.status(400).json({ message: 'Insufficient token balance' });
    }
    
    // Update balance
    tokenBalance.balance -= amount;
    tokenBalance.totalSpent += amount;
    tokenBalance.lastUpdated = Date.now();
    
    // Create transaction record
    const transaction = new TokenTransaction({
      userId: req.user.id,
      amount: -amount,
      description: description || 'Token spend',
      serviceType
    });
    
    await Promise.all([tokenBalance.save(), transaction.save()]);
    
    res.json({ 
      message: 'Tokens spent successfully',
      balance: tokenBalance.balance,
      amount,
      transaction: transaction._id
    });
  } catch (error) {
    console.error('Error spending tokens:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get transaction history
router.get('/transactions', authenticate, async (req, res) => {
  try {
    const transactions = await TokenTransaction.find({ userId: req.user.id })
      .sort({ timestamp: -1 });
    
    res.json(transactions);
  } catch (error) {
    console.error('Error getting transaction history:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Reward daily engagement
router.post('/reward/daily', authenticate, async (req, res) => {
  try {
    const amount = 5; // Daily engagement reward amount
    
    // Find or create token balance
    let tokenBalance = await TokenBalance.findOne({ userId: req.user.id });
    
    if (!tokenBalance) {
      tokenBalance = new TokenBalance({
        userId: req.user.id,
        balance: 0,
        totalEarned: 0,
        totalSpent: 0
      });
    }
    
    // Update balance
    tokenBalance.balance += amount;
    tokenBalance.totalEarned += amount;
    tokenBalance.lastUpdated = Date.now();
    
    // Create transaction record
    const transaction = new TokenTransaction({
      userId: req.user.id,
      amount,
      description: 'Daily engagement reward'
    });
    
    await Promise.all([tokenBalance.save(), transaction.save()]);
    
    res.json({ 
      message: 'Daily engagement reward received',
      balance: tokenBalance.balance,
      amount,
      transaction: transaction._id
    });
  } catch (error) {
    console.error('Error rewarding daily engagement:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Reward for report submission
router.post('/reward/report', authenticate, async (req, res) => {
  try {
    const amount = 10; // Report submission reward amount
    
    // Find or create token balance
    let tokenBalance = await TokenBalance.findOne({ userId: req.user.id });
    
    if (!tokenBalance) {
      tokenBalance = new TokenBalance({
        userId: req.user.id,
        balance: 0,
        totalEarned: 0,
        totalSpent: 0
      });
    }
    
    // Update balance
    tokenBalance.balance += amount;
    tokenBalance.totalEarned += amount;
    tokenBalance.lastUpdated = Date.now();
    
    // Create transaction record
    const transaction = new TokenTransaction({
      userId: req.user.id,
      amount,
      description: 'Report submission reward'
    });
    
    await Promise.all([tokenBalance.save(), transaction.save()]);
    
    res.json({ 
      message: 'Report submission reward received',
      balance: tokenBalance.balance,
      amount,
      transaction: transaction._id
    });
  } catch (error) {
    console.error('Error rewarding report submission:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router; 