// src/pages/TermsPage.jsx
import { FileText, Shield, Users, AlertTriangle } from 'lucide-react'

const TermsPage = () => {
  const guidelines = [
    {
      icon: Shield,
      title: 'Respect Privacy',
      description: "Maintain confidentiality and respect others' privacy"
    },
    {
      icon: Users,
      title: 'Be Supportive',
      description: 'Create a supportive and understanding environment'
    },
    {
      icon: AlertTriangle,
      title: 'Report Issues',
      description: 'Report any concerning behavior or content'
    },
    {
      icon: FileText,
      title: 'Follow Guidelines',
      description: 'Adhere to community guidelines and terms'
    }
  ]

  const sections = [
    {
      title: 'Terms of Use',
      content: "By accessing and using Kintaraa's platform, you agree to these terms and conditions. Our services are intended for individuals seeking support and healing, and must be used in accordance with our community guidelines and ethical standards."
    },
    {
      title: 'User Responsibilities',
      content: "Users must maintain the confidentiality of their account credentials, respect other users' privacy, and abide by our community guidelines. Any misuse of the platform or violation of these terms may result in account suspension or termination."
    },
    {
      title: 'Professional Services',
      content: 'Professional service providers on our platform are verified and must maintain appropriate licenses and credentials. However, the platform is not a substitute for emergency services or immediate medical attention.'
    },
    {
      title: 'Privacy & Confidentiality',
      content: 'We are committed to protecting user privacy and maintaining confidentiality. Users must respect the privacy of others and not share sensitive information outside the platform.'
    },
    {
      title: 'Content Guidelines',
      content: 'All content shared on the platform must adhere to our community guidelines. We prohibit harassment, hate speech, and any form of abuse. We reserve the right to remove inappropriate content and suspend violating accounts.'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-500 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white sm:text-5xl">
              Terms of Service
            </h1>
            <p className="mt-4 text-xl text-purple-100">
              Guidelines for using Kintaraa's platform
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Community Guidelines */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 mb-12">
          {guidelines.map((guideline) => {
            const Icon = guideline.icon
            return (
              <div key={guideline.title} className="bg-white rounded-lg shadow-lg p-6">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {guideline.title}
                </h3>
                <p className="text-gray-600">
                  {guideline.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Terms Sections */}
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
            Need Clarification?
          </h2>
          <p className="text-gray-600 mb-6">
            If you have any questions about our terms of service or community guidelines,
            please contact our support team.
          </p>
          <button className="bg-purple-600 text-white px-6 py-3 rounded-md hover:bg-purple-700 transition-colors">
            Contact Support
          </button>
        </div>
      </div>
    </div>
  )
}

export default TermsPage