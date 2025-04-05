// src/pages/PrivacyPage.jsx
import { Shield, Lock, Eye, Database } from 'lucide-react'

const PrivacyPage = () => {
  const privacyPoints = [
    {
      icon: Shield,
      title: 'Data Protection',
      description: 'Your data is encrypted and protected using industry-standard security measures.'
    },
    {
      icon: Lock,
      title: 'Confidentiality',
      description: 'All information shared is kept strictly confidential and accessed only by authorized personnel.'
    },
    {
      icon: Eye,
      title: 'Privacy Controls',
      description: 'You have full control over your privacy settings and what information you share.'
    },
    {
      icon: Database,
      title: 'Data Rights',
      description: 'You can request access to, modification, or deletion of your data at any time.'
    }
  ]

  const sections = [
    {
      title: 'Information We Collect',
      content: `We collect information that you provide directly to us, including personal information such as your name, email address, and any other information you choose to provide. We also collect information about your use of our services to improve your experience and our platform's functionality.`
    },
    {
      title: 'How We Use Your Information',
      content: `We use the information we collect to provide and improve our services, communicate with you, and ensure your safety and security. We never share your personal information with third parties without your explicit consent.`
    },
    {
      title: 'Data Security',
      content: `We implement robust security measures to protect your personal information from unauthorized access, alteration, or destruction. This includes encryption, secure servers, and regular security audits.`
    },
    {
      title: 'Your Privacy Rights',
      content: `You have the right to access, correct, or delete your personal information. You can also control your privacy settings and choose what information to share with others on our platform.`
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-500 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white sm:text-5xl">
              Privacy Policy
            </h1>
            <p className="mt-4 text-xl text-purple-100">
              Your privacy and security are our top priorities
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Privacy Highlights */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 mb-12">
          {privacyPoints.map((point) => {
            const Icon = point.icon
            return (
              <div key={point.title} className="bg-white rounded-lg shadow-lg p-6">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {point.title}
                </h3>
                <p className="text-gray-600">
                  {point.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Detailed Sections */}
        <div className="bg-white rounded-lg shadow-lg">
          {sections.map((section, index) => (
            <div
              key={section.title}
              className={`p-8 ${
                index !== sections.length - 1 ? 'border-b border-gray-200' : ''
              }`}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {section.title}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {section.content}
              </p>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-12 bg-white rounded-lg shadow-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Questions About Privacy?
          </h2>
          <p className="text-gray-600 mb-6">
            If you have any questions about our privacy policy or how we handle your data,
            please don't hesitate to contact our privacy team.
          </p>
          <button className="bg-purple-600 text-white px-6 py-3 rounded-md hover:bg-purple-700 transition-colors">
            Contact Privacy Team
          </button>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPage