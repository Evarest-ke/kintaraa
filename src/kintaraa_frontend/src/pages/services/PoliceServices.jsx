import React, { useState } from 'react';
import ServiceLayout from '../../layouts/ServiceLayout';
import ServiceRequestForm from '../../components/forms/ServiceRequestForm';
import { ServiceType } from '../../services/serviceApi';

const PoliceServices = () => {
  const [showRequestForm, setShowRequestForm] = useState(false);

  const handleRequestSuccess = (requestId) => {
    setShowRequestForm(false);
    alert(`Police service request submitted! Reference number: ${requestId}`);
  };

  const policeServices = [
    {
      title: "Emergency Response",
      description: "Immediate police response for urgent situations",
      availability: "24/7",
      contact: "999"
    },
    {
      title: "Report Filing",
      description: "File official police reports and documentation",
      availability: "24/7",
      contact: "101"
    },
    {
      title: "Victim Support",
      description: "Connect with police victim support units",
      availability: "Office hours",
      contact: "Support Line"
    }
  ];

  return (
    <ServiceLayout
      title="Police Services"
      description="Official police support and protection services"
      emergencyContact="999"
      bgColorClass="from-blue-900 to-indigo-900"
    >
      <div className="bg-red-50 p-6 rounded-xl mb-8">
        <h2 className="text-xl font-bold text-red-700 mb-2">Emergency Contact</h2>
        <p className="text-red-600">For immediate police assistance, call 999</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {policeServices.map((service, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600 mb-4">{service.description}</p>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Availability:</span>
                <span className="font-semibold">{service.availability}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Contact:</span>
                <span className="font-semibold text-blue-600">{service.contact}</span>
              </div>
            </div>
            <button 
              onClick={() => setShowRequestForm(true)}
              className="mt-4 w-full py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
            >
              Request Service
            </button>
          </div>
        ))}
      </div>

      {showRequestForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl p-6 max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4">Request Police Service</h2>
            <ServiceRequestForm
              serviceType={ServiceType.Police}
              onSuccess={handleRequestSuccess}
              onCancel={() => setShowRequestForm(false)}
            />
          </div>
        </div>
      )}
    </ServiceLayout>
  );
};

export default PoliceServices;