import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const ServiceLayout = ({ 
  title, 
  description, 
  children, 
  emergencyContact,
  bgColorClass = "from-purple-900 to-pink-900"
}) => {
  const location = useLocation();
  const currentPath = location.pathname;

  const navLinks = [
    { path: '/support/legal', label: 'Legal Support' },
    { path: '/support/medical', label: 'Medical Care' },
    { path: '/support/counseling', label: 'Counseling' },
    { path: '/support/police', label: 'Police Services' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className={`bg-gradient-to-br ${bgColorClass} text-white py-16`}>
        <div className="container mx-auto px-6">
          {emergencyContact && (
            <div className="bg-red-600 text-white px-6 py-4 rounded-lg mb-8 inline-block">
              <h2 className="text-xl font-bold">Emergency: {emergencyContact}</h2>
              <p>For immediate assistance</p>
            </div>
          )}
          <h1 className="text-4xl font-bold mb-4">{title}</h1>
          <p className="text-xl">{description}</p>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-6">
          <nav className="flex space-x-6 overflow-x-auto py-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-full transition-colors ${
                  currentPath === link.path
                    ? 'bg-purple-600 text-white'
                    : 'text-gray-600 hover:text-purple-600'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        {children}
      </main>

      {/* Emergency Footer */}
      <div className="bg-red-50 py-6">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-red-700 mb-4 md:mb-0">
              <h3 className="font-bold">Need immediate help?</h3>
              <p>24/7 Emergency support available</p>
            </div>
            <div className="flex space-x-4">
              <Link
                to="/emergency"
                className="px-6 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition"
              >
                Get Emergency Help
              </Link>
              <Link
                to="/support"
                className="px-6 py-2 border border-red-600 text-red-600 rounded-full hover:bg-red-50 transition"
              >
                All Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceLayout;