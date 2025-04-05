import React from 'react';
import { Link } from 'react-router-dom';

const Support = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-purple-900 to-pink-900 text-white py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold mb-4">Get Support</h1>
          <p className="text-xl">Connect with professional services and support networks</p>
        </div>
      </div>

      {/* Support Services Grid */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Legal Support */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-6">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Legal Support</h3>
              <p className="text-gray-600 mb-4">Access free legal consultation and representation services.</p>
              <Link to="/support/legal" className="text-purple-600 font-semibold hover:text-purple-700">Learn More →</Link>
            </div>
            <div className="px-6 py-4 bg-purple-50">
              <p className="text-sm text-purple-700">Available: 24/7 Emergency Legal Hotline</p>
            </div>
          </div>

          {/* Medical Support */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-6">
              <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Medical Care</h3>
              <p className="text-gray-600 mb-4">Connect with healthcare providers and emergency medical services.</p>
              <Link to="/support/medical" className="text-pink-600 font-semibold hover:text-pink-700">Learn More →</Link>
            </div>
            <div className="px-6 py-4 bg-pink-50">
              <p className="text-sm text-pink-700">Available: Immediate Medical Response</p>
            </div>
          </div>

          {/* Counseling */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-6">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Mental Health Support</h3>
              <p className="text-gray-600 mb-4">Professional counseling and therapy services.</p>
              <Link to="/support/counseling" className="text-purple-600 font-semibold hover:text-purple-700">Learn More →</Link>
            </div>
            <div className="px-6 py-4 bg-purple-50">
              <p className="text-sm text-purple-700">Available: 24/7 Crisis Counseling</p>
            </div>
          </div>

          {/* Police Services - New Addition */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Police Services</h3>
              <p className="text-gray-600 mb-4">Official police support and protection services.</p>
              <Link to="/support/police" className="text-blue-600 font-semibold hover:text-blue-700">Learn More →</Link>
            </div>
            <div className="px-6 py-4 bg-blue-50">
              <p className="text-sm text-blue-700">Available: 24/7 Emergency Response</p>
            </div>
          </div>
        </div>

        {/* Emergency Contact Section */}
        <div className="mt-12 bg-red-50 rounded-xl p-6">
          <h2 className="text-2xl font-bold text-red-700 mb-4">Emergency Contacts</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-semibold text-red-700">Emergency Hotline</h3>
              <p className="text-lg font-bold">0800-HELP</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-semibold text-red-700">Police Emergency</h3>
              <p className="text-lg font-bold">999</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-semibold text-red-700">Crisis Support</h3>
              <p className="text-lg font-bold">0800-CRISIS</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-semibold text-red-700">Police Non-Emergency</h3>
              <p className="text-lg font-bold">101</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;