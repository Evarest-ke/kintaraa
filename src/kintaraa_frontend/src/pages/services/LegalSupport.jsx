import React, { useState } from 'react';
import ServiceLayout from '../../layouts/ServiceLayout';
import ServiceRequestForm from '../../components/forms/ServiceRequestForm';
import { ServiceType } from '../../services/serviceApi';

const MedicalCare = () => {
  const [showRequestForm, setShowRequestForm] = useState(false);

  const handleRequestSuccess = (requestId) => {
    setShowRequestForm(false);
    alert(`Medical service request submitted! Reference number: ${requestId}`);
  };

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

  return (
    <ServiceLayout
      title="Medical Care Services"
      description="Professional medical care and support"
      emergencyContact="112"
      bgColorClass="from-pink-900 to-rose-900"
    >
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
                <span className="font-semibold text-pink-600">{service.tokenCost}</span>
              </div>
            </div>
            <button 
              onClick={() => setShowRequestForm(true)}
              className="mt-4 w-full py-2 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition"
            >
              Request Service
            </button>
          </div>
        ))}
      </div>

      {showRequestForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl p-6 max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4">Request Medical Service</h2>
            <ServiceRequestForm
              serviceType={ServiceType.Medical}
              onSuccess={handleRequestSuccess}
              onCancel={() => setShowRequestForm(false)}
            />
          </div>
        </div>
      )}
    </ServiceLayout>
  );
};

export default MedicalCare;