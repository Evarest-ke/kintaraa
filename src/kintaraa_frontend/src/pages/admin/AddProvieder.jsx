import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { serviceApi } from '../../services/serviceApi';

const AddProvider = ({ onSuccess }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    service_type: { Legal: null }
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'service_type') {
      setFormData(prev => ({
        ...prev,
        [name]: { [value.charAt(0).toUpperCase() + value.slice(1)]: null }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await serviceApi.addProvider(formData);
      onSuccess();
    } catch (error) {
      console.error('Error adding provider:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-6 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h1 className="text-3xl font-bold mb-8">Add New Provider</h1>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Provider Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-purple-500 focus:border-purple-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Service Type
                </label>
                <select
                  name="service_type"
                  value={formData.service_type.Legal ? "legal" : formData.service_type.Medical ? "medical" : formData.service_type.Counseling ? "counseling" : "police"}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-purple-500 focus:border-purple-500"
                >
                  <option value="legal">Legal</option>
                  <option value="medical">Medical</option>
                  <option value="counseling">Counseling</option>
                  <option value="police">Police</option>
                </select>
              </div>

              <div>
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    name="availability"
                    checked={formData.availability}
                    onChange={handleChange}
                    className="h-5 w-5 text-purple-600 rounded focus:ring-purple-500"
                  />
                  <span className="text-sm font-medium text-gray-700">Available for new cases</span>
                </label>
              </div>

              <div className="flex space-x-4">
                <button
                  type="submit"
                  className="flex-1 bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
                >
                  Add Provider
                </button>
                <button
                  type="button"
                  onClick={onSuccess}
                  className="flex-1 bg-gray-200 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-300 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProvider;
