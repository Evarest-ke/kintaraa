import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Community = () => {
  const [activeTab, setActiveTab] = useState('forums');

  const forums = [
    {
      id: 1,
      title: "Healing Together",
      description: "A safe space for sharing experiences and healing journeys",
      members: 1234,
      lastActive: "2 minutes ago",
      topics: 156
    },
    {
      id: 2,
      title: "Support Network",
      description: "Connect with others who understand your journey",
      members: 892,
      lastActive: "5 minutes ago",
      topics: 98
    },
    {
      id: 3,
      title: "Recovery Resources",
      description: "Share and discover resources for recovery and growth",
      members: 567,
      lastActive: "15 minutes ago",
      topics: 78
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-purple-900 to-pink-900 text-white py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold mb-4">Community</h1>
          <p className="text-xl">Connect, share, and grow with others on similar journeys</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12">
        {/* Navigation Tabs */}
        <div className="flex space-x-4 mb-8">
          <button
            onClick={() => setActiveTab('forums')}
            className={`px-6 py-2 rounded-full font-semibold transition ${
              activeTab === 'forums'
                ? 'bg-purple-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Forums
          </button>
          <button
            onClick={() => setActiveTab('groups')}
            className={`px-6 py-2 rounded-full font-semibold transition ${
              activeTab === 'groups'
                ? 'bg-purple-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Support Groups
          </button>
          <button
            onClick={() => setActiveTab('events')}
            className={`px-6 py-2 rounded-full font-semibold transition ${
              activeTab === 'events'
                ? 'bg-purple-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Events
          </button>
        </div>

        {/* Forums List */}
        <div className="grid gap-6">
          {forums.map(forum => (
            <div key={forum.id} className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-semibold mb-2">{forum.title}</h3>
                  <p className="text-gray-600 mb-4">{forum.description}</p>
                  <div className="flex space-x-4 text-sm text-gray-500">
                    <span>{forum.members} members</span>
                    <span>•</span>
                    <span>{forum.topics} topics</span>
                    <span>•</span>
                    <span>Last active {forum.lastActive}</span>
                  </div>
                </div>
                <Link
                  to={`/community/forum/${forum.id}`}
                  className="px-4 py-2 bg-purple-100 text-purple-600 rounded-full hover:bg-purple-200 transition"
                >
                  Join Discussion
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Community Guidelines */}
        <div className="mt-12 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4">Community Guidelines</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-semibold text-purple-600 mb-2">Respect & Support</h3>
              <p className="text-gray-600">Treat everyone with kindness and respect. We're all here to support each other.</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-semibold text-purple-600 mb-2">Privacy</h3>
              <p className="text-gray-600">Protect your privacy and respect others' confidentiality.</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-semibold text-purple-600 mb-2">Safe Space</h3>
              <p className="text-gray-600">Help maintain this as a safe, supportive environment for all members.</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Join Our Community?</h2>
          <p className="text-gray-600 mb-6">Connect with others who understand your journey</p>
          <Link
            to="/get-started"
            className="inline-block px-8 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Community;