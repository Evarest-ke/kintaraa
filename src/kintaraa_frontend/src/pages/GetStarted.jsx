import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../services/api';

const GetStarted = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [userData, setUserData] = useState({
    name: '',
    contactPreference: '',
    preferredLanguage: '',
    emergencyContact: '',
    safeToContact: false
  });

  const steps = [
    {
      title: "Welcome to Kintaraa",
      description: "Start your journey to healing and support",
    },
    {
      title: "Personal Preferences",
      description: "Help us understand how to best support you",
    },
    {
      title: "Safety Settings",
      description: "Configure your safety and privacy preferences",
    },
    {
      title: "Get Your KINT Tokens",
      description: "Receive your initial tokens for services",
    }
  ];

  const handleNext = async () => {
    if (step < steps.length) {
      setStep(step + 1);
    } else {
      try {
        // Initialize tokens for new user
        await api.initializeUserTokens();
        // Navigate to dashboard after successful token initialization
        navigate('/');
      } catch (error) {
        console.error('Error initializing tokens:', error);
        // You might want to add error handling UI here
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-pink-900 text-white">
      <div className="container mx-auto px-6 py-12">
        {/* Progress Steps */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center space-x-4">
            {steps.map((_, index) => (
              <React.Fragment key={index}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  index + 1 <= step ? 'bg-white text-purple-600' : 'bg-purple-800'
                }`}>
                  {index + 1}
                </div>
                {index < steps.length - 1 && (
                  <div className={`w-16 h-1 ${
                    index + 1 < step ? 'bg-white' : 'bg-purple-800'
                  }`} />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold mb-4">{steps[step - 1].title}</h1>
          <p className="mb-8 text-lg opacity-90">{steps[step - 1].description}</p>

          {/* Step Content */}
          {step === 1 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold mb-4">Welcome Gift</h2>
                <div className="bg-white/10 rounded-lg p-6">
                  <p className="text-lg mb-4">You'll receive:</p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>500 KINT tokens for immediate use</li>
                    <li>Access to all support services</li>
                    <li>24/7 emergency support</li>
                    <li>Community support network</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Preferred Contact Method</label>
                <select 
                  className="w-full bg-white/10 border border-white/20 rounded-lg p-3 text-white"
                  value={userData.contactPreference}
                  onChange={e => setUserData({...userData, contactPreference: e.target.value})}
                >
                  <option value="">Select a method</option>
                  <option value="email">Email</option>
                  <option value="phone">Phone</option>
                  <option value="app">In-App Only</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Preferred Language</label>
                <select 
                  className="w-full bg-white/10 border border-white/20 rounded-lg p-3 text-white"
                  value={userData.preferredLanguage}
                  onChange={e => setUserData({...userData, preferredLanguage: e.target.value})}
                >
                  <option value="">Select a language</option>
                  <option value="en">English</option>
                  <option value="es">Spanish</option>
                  <option value="fr">French</option>
                </select>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Emergency Contact (Optional)</label>
                <input 
                  type="text"
                  className="w-full bg-white/10 border border-white/20 rounded-lg p-3 text-white"
                  placeholder="Name and contact number"
                  value={userData.emergencyContact}
                  onChange={e => setUserData({...userData, emergencyContact: e.target.value})}
                />
              </div>
              <div className="flex items-center space-x-3">
                <input 
                  type="checkbox"
                  id="safeToContact"
                  checked={userData.safeToContact}
                  onChange={e => setUserData({...userData, safeToContact: e.target.checked})}
                />
                <label htmlFor="safeToContact">It is safe to contact me directly</label>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-6">
              <div className="bg-white/10 rounded-lg p-6 text-center">
                <div className="text-4xl font-bold mb-4">500 KINT</div>
                <p>Your initial tokens have been credited to your account</p>
              </div>
              <div className="space-y-4">
                <h3 className="font-semibold">What you can do with KINT tokens:</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Access premium support services</li>
                  <li>Book priority appointments</li>
                  <li>Get legal document reviews</li>
                  <li>Access specialized counseling</li>
                </ul>
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="mt-8 flex justify-end">
            {step > 1 && (
              <button
                onClick={() => setStep(step - 1)}
                className="px-6 py-2 mr-4 border border-white rounded-full hover:bg-white/10"
              >
                Back
              </button>
            )}
            <button
              onClick={handleNext}
              className="px-6 py-2 bg-white text-purple-600 rounded-full hover:bg-purple-100"
            >
              {step === steps.length ? 'Get Started' : 'Next'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;