// src/components/dashboard/ResourcesSection.jsx
import { BookOpen, Users, Phone } from 'lucide-react'

const ResourcesSection = () => {
  return (
    <div className="bg-white py-12 rounded-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-center mb-8">Resources</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Educational Materials */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                <BookOpen className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold">Educational Materials</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Access guides, articles, and information about rights and recovery.
            </p>
            <button className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition">
              Browse Resources
            </button>
          </div>

          {/* Community Forums */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center mr-3">
                <Users className="w-6 h-6 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold">Community Forums</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Connect with others, share experiences, and find support.
            </p>
            <button className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition">
              Join Discussion
            </button>
          </div>

          {/* Crisis Hotlines */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                <Phone className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold">Crisis Hotlines</h3>
            </div>
            <p className="text-gray-600 mb-4">
              24/7 emergency contact information and support services.
            </p>
            <button className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition">
              View Contacts
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResourcesSection