import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-purple-900 to-pink-900 py-20">
      <div className="container mx-auto px-6 h-full flex items-center">
        <div className="max-w-2xl text-white">
          <h1 className="text-5xl font-bold mb-6">
            Transform Trauma into Resilience
          </h1>
          <p className="text-xl mb-8">
            Secure, anonymous platform for gender-based violence survivors. Access
            support, connect with community, and reclaim your power.
          </p>
          <div className="flex space-x-4">
            <Link
              to="/report"
              className="bg-purple-600 text-white px-8 py-3 rounded-full hover:bg-purple-700 transition"
            >
              Report Incident
            </Link>
            <Link
              to="/support"
              className="bg-white text-purple-600 px-8 py-3 rounded-full hover:bg-purple-100 transition"
            >
              Find Support
            </Link>
          </div>
        </div>
      </div>
      
      <Link
        to="/emergency"
        className="absolute bottom-4 right-4 flex items-center space-x-2 bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 transition"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
        </svg>
        <span>Emergency Help</span>
      </Link>
    </section>
  );
};

export default Hero;