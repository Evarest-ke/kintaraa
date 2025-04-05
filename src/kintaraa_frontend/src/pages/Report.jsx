import React, { useState } from 'react';
import { api } from '../services/api';



const Report = () => {
  const [formData, setFormData] = useState({
    description: '',
    location: '',
    date: '',
    type: 'legal'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const request = {
        service_type: formData.type.charAt(0).toUpperCase() + formData.type.slice(1),
        description: formData.description,
        priority: "Medium"
      };

     await api.submitReport(request);
      
      setSuccess(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="container mx-auto px-6 py-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Report an Incident</h1>
        
        {success && (
          <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg">
            Report submitted successfully. Thank you for your courage in reporting this incident.
          </div>
        )}

        {error && (
          <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-lg">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-2 font-semibold">Type of Report</label>
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500"
            >
              <option value="legal">Legal</option>
              <option value="medical">Medical</option>
              <option value="counseling">Counseling</option>
              <option value="police">Police</option>
            </select>
          </div>

          <div>
            <label className="block mb-2 font-semibold">Date of Incident</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">Location</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Where did this happen?"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="6"
              placeholder="Please describe what happened..."
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3 px-6 rounded-lg text-white font-semibold
              ${isSubmitting 
                ? 'bg-purple-400 cursor-not-allowed' 
                : 'bg-purple-600 hover:bg-purple-700'}`}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Report'}
          </button>

          <p className="text-sm text-gray-600 mt-4">
            Your report will be handled with complete confidentiality. If you're in immediate danger,
            please contact emergency services or use our emergency help button.
          </p>
        </form>
      </div>
    </div>
  );
};

export default Report;