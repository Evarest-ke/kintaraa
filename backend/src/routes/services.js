const express = require('express');
const { body, validationResult } = require('express-validator');
const ServiceRequest = require('../models/ServiceRequest');
const Appointment = require('../models/Appointment');
const Provider = require('../models/Provider');
const { authenticate, isAdmin } = require('../middleware/auth');

const router = express.Router();

// Submit a new service request
router.post(
  '/request',
  authenticate,
  [
    body('serviceType').isIn(['Legal', 'Medical', 'Counseling', 'Police']),
    body('description').notEmpty(),
    body('priority').isIn(['Emergency', 'High', 'Medium', 'Low']),
    body('notes').optional(),
    body('preferredContact').optional(),
    body('contactDetails').optional(),
    body('dateTime').optional().isISO8601()
  ],
  async (req, res) => {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const {
        serviceType,
        description,
        priority,
        notes,
        preferredContact,
        contactDetails,
        dateTime
      } = req.body;

      // Create new service request
      const newRequest = new ServiceRequest({
        userId: req.user.id,
        serviceType,
        description,
        priority,
        notes,
        preferredContact,
        contactDetails,
        dateTime: dateTime ? new Date(dateTime) : null,
        status: 'Pending'
      });

      const request = await newRequest.save();
      res.status(201).json({ id: request.id, message: 'Service request submitted successfully' });
    } catch (error) {
      console.error('Error submitting service request:', error);
      res.status(500).json({ message: 'Server error' });
    }
  }
);

// Get all service requests (admin only)
router.get('/requests', authenticate, isAdmin, async (req, res) => {
  try {
    const requests = await ServiceRequest.find().populate('userId', 'fullName email userType');
    res.json(requests);
  } catch (error) {
    console.error('Error getting service requests:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get user's service requests
router.get('/user/requests', authenticate, async (req, res) => {
  try {
    const requests = await ServiceRequest.find({ userId: req.user.id });
    res.json(requests);
  } catch (error) {
    console.error('Error getting user service requests:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get a specific service request
router.get('/request/:id', authenticate, async (req, res) => {
  try {
    const request = await ServiceRequest.findById(req.params.id).populate('userId', 'fullName email userType');
    
    if (!request) {
      return res.status(404).json({ message: 'Request not found' });
    }
    
    // Check if user is admin or the request owner
    if (req.user.isAdmin || request.userId.equals(req.user.id)) {
      res.json(request);
    } else {
      res.status(403).json({ message: 'Unauthorized' });
    }
  } catch (error) {
    console.error('Error getting service request:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Update service request status (admin only)
router.put('/request/:id/status', authenticate, isAdmin, async (req, res) => {
  try {
    const { status } = req.body;
    
    if (!['Pending', 'InProgress', 'Completed', 'Cancelled'].includes(status)) {
      return res.status(400).json({ message: 'Invalid status' });
    }
    
    const request = await ServiceRequest.findById(req.params.id);
    
    if (!request) {
      return res.status(404).json({ message: 'Request not found' });
    }
    
    request.status = status;
    await request.save();
    
    res.json({ message: 'Request status updated successfully' });
  } catch (error) {
    console.error('Error updating request status:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Schedule a new appointment
router.post(
  '/appointment',
  authenticate,
  [
    body('serviceType').isIn(['Legal', 'Medical', 'Counseling', 'Police']),
    body('dateTime').isISO8601(),
    body('notes').optional(),
    body('location').optional()
  ],
  async (req, res) => {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { serviceType, dateTime, notes, location } = req.body;

      // Create new appointment
      const newAppointment = new Appointment({
        userId: req.user.id,
        serviceType,
        dateTime: new Date(dateTime),
        notes,
        location,
        status: 'Scheduled'
      });

      const appointment = await newAppointment.save();
      res.status(201).json({ id: appointment.id, message: 'Appointment scheduled successfully' });
    } catch (error) {
      console.error('Error scheduling appointment:', error);
      res.status(500).json({ message: 'Server error' });
    }
  }
);

// Get user's appointments
router.get('/user/appointments', authenticate, async (req, res) => {
  try {
    const appointments = await Appointment.find({ userId: req.user.id });
    res.json(appointments);
  } catch (error) {
    console.error('Error getting user appointments:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get a specific appointment
router.get('/appointment/:id', authenticate, async (req, res) => {
  try {
    const appointment = await Appointment.findById(req.params.id).populate('userId', 'fullName email userType');
    
    if (!appointment) {
      return res.status(404).json({ message: 'Appointment not found' });
    }
    
    // Check if user is admin or the appointment owner
    if (req.user.isAdmin || appointment.userId.equals(req.user.id)) {
      res.json(appointment);
    } else {
      res.status(403).json({ message: 'Unauthorized' });
    }
  } catch (error) {
    console.error('Error getting appointment:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Update appointment status
router.put('/appointment/:id/status', authenticate, async (req, res) => {
  try {
    const { status } = req.body;
    
    if (!['Scheduled', 'Confirmed', 'Completed', 'Cancelled'].includes(status)) {
      return res.status(400).json({ message: 'Invalid status' });
    }
    
    const appointment = await Appointment.findById(req.params.id);
    
    if (!appointment) {
      return res.status(404).json({ message: 'Appointment not found' });
    }
    
    // Check if user is admin or the appointment owner
    if (req.user.isAdmin || appointment.userId.equals(req.user.id)) {
      appointment.status = status;
      await appointment.save();
      
      res.json({ message: 'Appointment status updated successfully' });
    } else {
      res.status(403).json({ message: 'Unauthorized' });
    }
  } catch (error) {
    console.error('Error updating appointment status:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get all providers
router.get('/providers', async (req, res) => {
  try {
    const providers = await Provider.find().populate('userId', 'fullName email userType');
    res.json(providers);
  } catch (error) {
    console.error('Error getting providers:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Add a new provider (admin only)
router.post(
  '/provider',
  authenticate,
  isAdmin,
  [
    body('userId').notEmpty(),
    body('name').notEmpty(),
    body('serviceType').isIn(['Legal', 'Medical', 'Counseling', 'Police'])
  ],
  async (req, res) => {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { userId, name, serviceType } = req.body;

      // Check if provider already exists
      let provider = await Provider.findOne({ userId });
      if (provider) {
        return res.status(400).json({ message: 'Provider already exists' });
      }

      // Create new provider
      provider = new Provider({
        userId,
        name,
        serviceType
      });

      await provider.save();
      res.status(201).json({ message: 'Provider added successfully' });
    } catch (error) {
      console.error('Error adding provider:', error);
      res.status(500).json({ message: 'Server error' });
    }
  }
);

// Get service statistics
router.get('/stats/:serviceType', authenticate, async (req, res) => {
  try {
    const { serviceType } = req.params;
    
    if (!['Legal', 'Medical', 'Counseling', 'Police'].includes(serviceType)) {
      return res.status(400).json({ message: 'Invalid service type' });
    }
    
    const totalRequests = await ServiceRequest.countDocuments({ serviceType });
    const activeRequests = await ServiceRequest.countDocuments({ 
      serviceType, 
      status: { $in: ['Pending', 'InProgress'] } 
    });
    const availableProviders = await Provider.countDocuments({ 
      serviceType, 
      isAvailable: true 
    });
    
    res.json({
      totalRequests,
      activeRequests,
      availableProviders
    });
  } catch (error) {
    console.error('Error getting service stats:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router; 