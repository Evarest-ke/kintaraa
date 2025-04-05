import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { serviceApi } from '../../services/serviceApi';
import AddProvider from './AddProvieder';

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    legal: {},
    medical: {},
    counseling: {},
    police: {}
  });

  const [providers, setProviders] = useState([]);
  const [showAddProvider, setShowAddProvider] = useState(false);

  useEffect(() => {
    loadStats();
    loadProviders();
  }, []);

  const loadStats = async () => {
    try {
      const [legal, medical, counseling, police] = await Promise.all([
        serviceApi.getServiceStats('Legal'),
        serviceApi.getServiceStats('Medical'),
        serviceApi.getServiceStats('Counseling'),
        serviceApi.getServiceStats('Police')
      ]);
      
      // Convert BigInt to Number
      const processStats = (stats) => ({
        total_requests: Number(stats.total_requests),
        active_requests: Number(stats.active_requests),
        available_providers: Number(stats.available_providers)
      });

      setStats({
        legal: processStats(legal),
        medical: processStats(medical),
        counseling: processStats(counseling),
        police: processStats(police)
      });
    } catch (error) {
      console.error('Error loading stats:', error);
    }
  };

  const loadProviders = async () => {
    try {
      const allProviders = await serviceApi.getAllProviders();
      console.log("allproviders: ",allProviders.map(provider => provider.service_type.toString()))
      setProviders(allProviders);
    } catch (error) {
      console.error('Error loading providers:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-6 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <button
            onClick={() => setShowAddProvider(true)}
            className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700"
          >
            Add Provider
          </button>
        </div>

        {/* Add Provider Modal */}
        {showAddProvider && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl w-full mx-4">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Add New Provider</h2>
                <button
                  onClick={() => setShowAddProvider(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>
              <AddProvider onSuccess={() => {
                setShowAddProvider(false);
                loadProviders();
              }} />
            </div>
          </div>
        )}

        {/* Service Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          {Object.entries(stats).map(([service, stat]) => (
            <div key={service} className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-4 capitalize">{service}</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Total Requests:</span>
                  <span className="font-semibold">{stat.total_requests || 0}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Active:</span>
                  <span className="font-semibold">{stat.active_requests || 0}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Providers:</span>
                  <span className="font-semibold">{stat.available_providers || 0}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="px-6 py-4 border-b">
            <h2 className="text-xl font-semibold">Service Providers</h2>
          </div>
          <div className="divide-y">
            {providers.length === 0 ? (
              <div className="p-6 text-center text-gray-500">
                <p>No service providers registered yet.</p>
                <button
                  onClick={() => setShowAddProvider(true)}
                  className="inline-block mt-4 text-purple-600 hover:text-purple-700"
                >
                  Add your first provider →
                </button>
              </div>
            ) : (
              providers.map((provider, key) => (
                <div key={key} className="p-6 hover:bg-gray-50">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-semibold text-lg">{provider.name}</h3>
                   
                    </div>
                    <div className="flex space-x-4 items-center">
                      <span className={`px-3 py-1 rounded-full text-sm ${
                        provider.is_available ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                      }`}>
                        {provider.is_available ? 'Available' : 'Unavailable'}
                      </span>
                      <a 
                        href={`/admin/providers/${provider.id}`}
                        className="text-purple-600 hover:text-purple-700"
                      >
                        Manage →
                      </a>
                    </div>
                  </div>
                  <div className="mt-2 flex space-x-4 text-sm text-gray-500">
                    <span>Current Load: {provider.current_load || 0}</span>
                    <span>Total Cases: {provider.total_cases || 0}</span>
                    <span>Rating: {(provider.rating ? provider.rating.toFixed(1) : 'N/A')}/5.0</span>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;