import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Resources = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const resources = [
    {
      id: 1,
      category: "Legal",
      title: "Understanding Your Rights",
      description: "A comprehensive guide to legal rights and protections",
      type: "Guide",
      downloadable: true
    },
    {
      id: 2,
      category: "Health",
      title: "Mental Health First Aid",
      description: "Essential mental health resources and coping strategies",
      type: "Toolkit",
      downloadable: true
    },
    {
      id: 3,
      category: "Safety",
      title: "Safety Planning Guide",
      description: "Create your personal safety plan with this step-by-step guide",
      type: "Interactive Guide",
      downloadable: false
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-purple-900 to-pink-900 text-white py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold mb-4">Resources</h1>
          <p className="text-xl mb-8">Access guides, tools, and information to support your journey</p>
          
          {/* Search Bar */}
          <div className="max-w-2xl">
            <input
              type="text"
              placeholder="Search resources..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-6 py-3 rounded-full text-gray-900"
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12">
        {/* Resource Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Educational Guides</h3>
            <p className="text-gray-600">Access comprehensive guides and educational materials</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Safety Tools</h3>
            <p className="text-gray-600">Tools and resources for personal safety planning</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Resource Library</h3>
            <p className="text-gray-600">Downloadable resources and templates</p>
          </div>
        </div>

        {/* Resource List */}
        <div className="grid gap-6">
          {resources.map(resource => (
            <div key={resource.id} className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-sm font-semibold text-purple-600 bg-purple-100 px-3 py-1 rounded-full">
                    {resource.category}
                  </span>
                  <h3 className="text-xl font-semibold mt-2 mb-2">{resource.title}</h3>
                  <p className="text-gray-600 mb-4">{resource.description}</p>
                  <div className="flex space-x-4 text-sm text-gray-500">
                    <span>{resource.type}</span>
                    {resource.downloadable && (
                      <>
                        <span>•</span>
                        <span>Downloadable</span>
                      </>
                    )}
                  </div>
                </div>
                <Link
                  to={`/resources/${resource.id}`}
                  className="px-4 py-2 bg-purple-100 text-purple-600 rounded-full hover:bg-purple-200 transition"
                >
                  Access Resource
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Help Section */}
        <div className="mt-12 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4">Need Help Finding Resources?</h2>
          <p className="text-gray-600 mb-4">Our support team is here to help you find the right resources for your situation.</p>
          <Link
            to="/support"
            className="inline-block px-6 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Resources;