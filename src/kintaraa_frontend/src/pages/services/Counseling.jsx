import React, { useState } from 'react';
import ServiceLayout from '../../layouts/ServiceLayout';
import ServiceRequestForm from '../../components/forms/ServiceRequestForm';
import { ServiceType } from '../../services/serviceApi';

const Counseling = () => {
  const [showRequestForm, setShowRequestForm] = useState(false);

  const handleRequestSuccess = (requestId) => {
    setShowRequestForm(false);
    alert(`Counseling request submitted! Reference number: ${requestId}`);
  };

  const counselingServices = [
    {
      title: "Crisis Counseling",
      description: "Immediate emotional support and crisis intervention",
      availability: "24/7",
      tokenCost: "Free"
    },
    {
      title: "Individual Therapy",
      description: "One-on-one sessions with professional therapists",
      availability: "Flexible scheduling",
      tokenCost: "100 KINT"
    },
    {
      title: "Group Support",
      description: "Facilitated group therapy sessions",
      availability: "Weekly sessions",
      tokenCost: "50 KINT"
    }
  ];

  return (
    <ServiceLayout
      title="Mental Health Support"
      description="Professional counseling and therapy services"
      emergencyContact="0800-CRISIS"
      bgColorClass="from-purple-900 to-indigo-900"
    >
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {counselingServices.map((service, index) => (
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
              onClick={() => setShowRequestForm(true)}
              className="mt-4 w-full py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition"
            >
              Request Session
            </button>
          </div>
        ))}
      </div>

      {showRequestForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl p-6 max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4">Schedule Counseling Session</h2>
            <ServiceRequestForm
              serviceType={ServiceType.Counseling}
              onSuccess={handleRequestSuccess}
              onCancel={() => setShowRequestForm(false)}
            />
          </div>
        </div>
      )}
    </ServiceLayout>
  );
};

export default Counseling;