// src/pages/ResourcesPage.jsx
import { BookOpen, Users, Phone, Shield, Heart, Brain } from 'lucide-react'

const ResourcesPage = () => {
  const resources = [
    {
      title: 'Educational Materials',
      description: 'Access guides, articles, and information about rights and recovery.',
      icon: BookOpen,
      color: 'purple'
    },
    {
      title: 'Community Support',
      description: 'Connect with others, share experiences, and find support.',
      icon: Users,
      color: 'pink'
    },
    {
      title: 'Crisis Hotlines',
      description: '24/7 emergency contact information and support services.',
      icon: Phone,
      color: 'red'
    },
    {
      title: 'Safety Planning',
      description: 'Tools and guides for creating your personal safety plan.',
      icon: Shield,
      color: 'blue'
    },
    {
      title: 'Mental Health',
      description: 'Resources for mental health and emotional well-being.',
      icon: Brain,
      color: 'green'
    },
    {
      title: 'Support Services',
      description: 'Access to professional support services and care.',
      icon: Heart,
      color: 'pink'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-500 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white sm:text-5xl">
              Resources & Support
            </h1>
            <p className="mt-4 text-xl text-purple-100">
              Access the support and information you need on your journey to healing
            </p>
          </div>
        </div>
      </div>

      {/* Resources Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource) => (
            <div
              key={resource.title}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="p-6">
                <div className={`w-12 h-12 bg-${resource.color}-100 rounded-lg flex items-center justify-center mb-4`}>
                  <resource.icon className={`h-6 w-6 text-${resource.color}-600`} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {resource.title}
                </h3>
                <p className="text-gray-600">
                  {resource.description}
                </p>
                <button className="mt-4 inline-flex items-center text-purple-600 hover:text-purple-500">
                  Learn more
                  <svg
                    className="ml-2 h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ResourcesPage