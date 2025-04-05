import React, { useState } from 'react';
import { serviceApi } from '../../services/serviceApi';

const ServiceRequestForm = ({ serviceType, onSuccess, onCancel }) => {

  const [formData, setFormData] = useState({
    serviceType: serviceType,
    description: '',
    priority: 'Medium',
    notes: '',
    preferredContact: 'phone',
    contactDetails: '',
    dateTime: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    try {
      const response = await serviceApi.submitServiceRequest(formData);
      const requestId = response.Ok;
      
      if (onSuccess) {
        onSuccess(requestId);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'priority') {
      setFormData(prev => ({
        ...prev,
        priority: Priority[value]
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && (
        <div className="bg-red-50 text-red-700 p-4 rounded-lg">
          {error}
        </div>
      )}

      <div>
        <label className="block text-sm font-medium text-gray-700">Priority Level</label>
        <select
          name="priority"
          value={Object.keys(formData.priority)[0]}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
        >
          <option value="Emergency">Emergency - Immediate assistance needed</option>
          <option value="High">High - Urgent but not immediate</option>
          <option value="Medium">Medium - Standard request</option>
          <option value="Low">Low - Non-urgent request</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows="4"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
          placeholder="Please describe your situation..."
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Preferred Contact Method</label>
        <select
          name="preferredContact"
          value={formData.preferredContact}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
        >
          <option value="phone">Phone</option>
          <option value="email">Email</option>
          <option value="inPerson">In Person</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Contact Details</label>
        <input
          type="text"
          name="contactDetails"
          value={formData.contactDetails}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
          placeholder="Phone number or email address"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Preferred Date/Time</label>
        <input
          type="datetime-local"
          name="dateTime"
          value={formData.dateTime}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
        />
      </div>

      <div className="flex justify-end space-x-4 pt-4">
        {onCancel && (
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 text-gray-600 hover:text-gray-800"
          >
            Cancel
          </button>
        )}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`px-6 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition
            ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          {isSubmitting ? 'Submitting...' : 'Submit Request'}
        </button>
      </div>
    </form>
  );
};

export default ServiceRequestForm;