import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { serviceApi } from '../../services/serviceApi';

const MedicalCare = () => {
  const [showAppointmentForm, setShowAppointmentForm] = useState(false);
  const [appointmentDetails, setAppointmentDetails] = useState({
    serviceType: 'Emergency Medical Care',
    location: 'Central Hospital',
    date: '',
    notes: ''
  });

  const medicalServices = [
    {
      title: "Emergency Medical Care",
      description: "Immediate medical attention for urgent situations",
      availability: "24/7",
      tokenCost: "100 KINT"
    },
    {
      title: "Medical Examination",
      description: "Comprehensive medical examination and documentation",
      availability: "Same-day appointments",
      tokenCost: "150 KINT"
    },
    {
      title: "Follow-up Care",
      description: "Ongoing medical support and treatment",
      availability: "Scheduled",
      tokenCost: "75 KINT"
    }
  ];

  const locations = [
    {
      name: "Central Hospital",
      address: "123 Main Street",
      phone: "555-0123",
      services: ["Emergency Care", "Examination", "Treatment"]
    },
    {
      name: "Women's Health Clinic",
      address: "456 Care Lane",
      phone: "555-0456",
      services: ["Medical Support", "Counseling", "Treatment"]
    },
    {
      name: "Community Health Center",
      address: "789 Healing Road",
      phone: "555-0789",
      services: ["Basic Care", "Referrals", "Support"]
    }
  ];

  const handleAppointmentSubmit = async (e) => {
    e.preventDefault();
    
    // Validation checks
    if (!appointmentDetails.serviceType) {
      alert('Please select a service type.');
      return;
    }
    if (!appointmentDetails.location) {
      alert('Please select a location.');
      return;
    }
    if (isNaN(new Date(appointmentDetails.date).getTime())) {
      alert('Please enter a valid date.');
      return;
    }
    if (!appointmentDetails.notes) {
      alert('Please enter notes.');
      return;
    }

    try {
      const timestamp = new Date(appointmentDetails.date).getTime();
      const formattedAppointment = {
        datetime: timestamp,
        location: appointmentDetails.location,
        notes: appointmentDetails.notes,
        service_type: appointmentDetails.serviceType
      };
      
      const result = await serviceApi.scheduleAppointment(formattedAppointment);
      console.log('Appointment Details:', result.Ok);
      setShowAppointmentForm(false);
      alert('Appointment scheduled successfully!');
    } catch (error) {
      console.error('Error scheduling appointment:', error);
      alert('Failed to schedule appointment. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-purple-900 to-pink-900 text-white py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold mb-4">Medical Care Services</h1>
          <p className="text-xl">Professional medical care and support</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12">
        {/* Emergency Notice */}
        <div className="bg-red-100 border-l-4 border-red-500 p-4 mb-8">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-red-700">
                If you're experiencing a medical emergency, call <strong>911</strong> immediately.
              </p>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {medicalServices.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Availability:</span>
                  <span className="font-semibold">{service.availability}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Cost:</span>
                  <span className="font-semibold text-purple-600">{service.tokenCost}</span>
                </div>
              </div>
              <button 
                onClick={() => setShowAppointmentForm(true)}
                className="mt-4 w-full py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition"
              >
                Schedule Appointment
              </button>
            </div>
          ))}
        </div>

        {/* Locations */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-12">
          <h2 className="text-2xl font-bold mb-6">Medical Locations</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {locations.map((location, index) => (
              <div key={index} className="border rounded-lg p-4">
                <h3 className="font-semibold text-lg mb-2">{location.name}</h3>
                <p className="text-gray-600 mb-2">{location.address}</p>
                <p className="text-purple-600 font-semibold mb-2">{location.phone}</p>
                <div className="flex flex-wrap gap-2">
                  {location.services.map((service, sIndex) => (
                    <span 
                      key={sIndex}
                      className="text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded-full"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Resources */}
        <div className="bg-purple-50 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-6">Medical Resources</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link 
              to="/resources/medical-documentation"
              className="bg-white p-6 rounded-lg hover:shadow-md transition"
            >
              <h3 className="font-semibold text-purple-600 mb-2">Documentation Guide</h3>
              <p className="text-gray-600">Important medical documentation procedures</p>
            </Link>
            <Link 
              to="/resources/treatment-options"
              className="bg-white p-6 rounded-lg hover:shadow-md transition"
            >
              <h3 className="font-semibold text-purple-600 mb-2">Treatment Options</h3>
              <p className="text-gray-600">Understanding available treatment options</p>
            </Link>
            <Link 
              to="/resources/aftercare"
              className="bg-white p-6 rounded-lg hover:shadow-md transition"
            >
              <h3 className="font-semibold text-purple-600 mb-2">Aftercare Guide</h3>
              <p className="text-gray-600">Post-treatment care and recovery</p>
            </Link>
          </div>
        </div>
      </div>

      {/* Appointment Form Modal */}
      {showAppointmentForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl p-6 max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4">Schedule Medical Appointment</h2>
            <form className="space-y-4" onSubmit={handleAppointmentSubmit}>
              <div>
                <label className="block text-sm font-medium text-gray-700">Service Type</label>
                <select 
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                  value={appointmentDetails.serviceType}
                  onChange={(e) => setAppointmentDetails({ ...appointmentDetails, serviceType: e.target.value })}
                >
                  <option value="">Select a service</option>
                  {medicalServices.map((service, index) => (
                    <option key={index} value={service.title}>{service.title}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Preferred Location</label>
                <select 
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                  value={appointmentDetails.location}
                  onChange={(e) => setAppointmentDetails({ ...appointmentDetails, location: e.target.value })}
                >
                  <option value="">Select a location</option>
                  {locations.map((location, index) => (
                    <option key={index} value={location.name}>{location.name}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Preferred Date</label>
                <input 
                  type="date"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                  value={appointmentDetails.date}
                  onChange={(e) => setAppointmentDetails({ ...appointmentDetails, date: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Additional Notes</label>
                <textarea 
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                  rows="3"
                  value={appointmentDetails.notes}
                  onChange={(e) => setAppointmentDetails({ ...appointmentDetails, notes: e.target.value })}
                ></textarea>
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setShowAppointmentForm(false)}
                  className="px-4 py-2 text-gray-600 hover:text-gray-800"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700"
                >
                  Schedule Appointment
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default MedicalCare;