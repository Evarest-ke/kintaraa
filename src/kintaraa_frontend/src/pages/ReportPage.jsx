// src/pages/ReportPage.jsx
import { Shield, AlertCircle, Clock, FileText, Check } from 'lucide-react'
import { Link } from 'react-router-dom'

const ReportPage = () => {
  const reportTypes = [
    {
      title: 'Immediate Report',
      icon: AlertCircle,
      description: 'Report an incident that just occurred or requires immediate attention.',
      timeframe: 'For recent incidents',
      features: [
        'Immediate response protocol',
        'Priority handling',
        'Direct connection to support',
        'Emergency services liaison if needed'
      ],
      buttonText: 'File Urgent Report',
      color: 'red',
      link: '/dashboard/survivor/report'
    },
    {
      title: 'Standard Report',
      icon: FileText,
      description: 'Document an incident with full details and supporting information.',
      timeframe: 'For past incidents',
      features: [
        'Detailed documentation',
        'Evidence upload option',
        'Support service referrals',
        'Follow-up scheduling'
      ],
      buttonText: 'Create Report',
      color: 'purple',
      link: '/dashboard/survivor/report'
    },
    {
      title: 'Anonymous Report',
      icon: Shield,
      description: 'Submit a report without revealing your identity.',
      timeframe: 'Any time',
      features: [
        'Complete anonymity',
        'Secure submission',
        'No account required',
        'Optional follow-up code'
      ],
      buttonText: 'Report Anonymously',
      color: 'blue',
      link: '/anonymous-report'
    }
  ]

  const steps = [
    {
      number: 1,
      title: 'Choose Report Type',
      description: 'Select the most appropriate reporting option for your situation.'
    },
    {
      number: 2,
      title: 'Provide Information',
      description: 'Share as much detail as you feel comfortable with.'
    },
    {
      number: 3,
      title: 'Submit Report',
      description: 'Your report will be handled with care and confidentiality.'
    },
    {
      number: 4,
      title: 'Get Support',
      description: 'Connect with support services and resources.'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 pt-20">
      {/* Emergency Alert */}
      <div className="bg-red-50 border-l-4 border-red-400 p-4 mx-auto max-w-7xl my-8 ">
        <div className="flex">
          <div className="flex-shrink-0">
            <AlertCircle className="h-5 w-5 text-red-400" />
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-red-800">Emergency Situation?</h3>
            <div className="mt-2 text-sm text-red-700">
              <p>If you're in immediate danger, please:</p>
              <ul className="list-disc list-inside mt-1">
                <li>Call emergency services (911) immediately</li>
                <li>Seek a safe location</li>
                <li>Contact someone you trust</li>
              </ul>
            </div>
            <div className="mt-4">
              <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                Call Emergency Services
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Report an Incident</h1>
          <p className="text-lg text-gray-600">
            Choose the reporting option that best fits your needs. All reports are handled
            with complete confidentiality and care.
          </p>
        </div>

        {/* Report Types Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reportTypes.map((type) => {
            const Icon = type.icon
            return (
              <div key={type.title} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className={`p-6 border-b border-gray-200 bg-${type.color}-50`}>
                  <div className="flex items-center">
                    <div className={`p-2 bg-${type.color}-100 rounded-lg`}>
                      <Icon className={`h-6 w-6 text-${type.color}-600`} />
                    </div>
                    <h3 className="ml-3 text-lg font-semibold text-gray-900">
                      {type.title}
                    </h3>
                  </div>
                  <p className="mt-4 text-gray-600">{type.description}</p>
                  <p className="mt-2 text-sm text-gray-500">{type.timeframe}</p>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {type.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={type.link}
                    className={`mt-6 w-full inline-flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-${type.color}-600 hover:bg-${type.color}-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${type.color}-500`}
                  >
                    {type.buttonText}
                  </Link>
                </div>
              </div>
            )
          })}
        </div>

        {/* Process Steps */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Reporting Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step) => (
              <div key={step.number} className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-purple-600">{step.number}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Support Note */}
        <div className="mt-12 bg-gradient-to-r from-purple-600 to-pink-500 rounded-lg shadow-lg p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Need Help with Reporting?</h2>
          <p className="text-lg mb-6">
            Our support team is available 24/7 to assist you with the reporting process.
          </p>
          <button className="bg-white text-purple-600 px-6 py-3 rounded-md hover:bg-gray-100 transition-colors">
            Contact Support
          </button>
        </div>
      </div>
    </div>
  )
}

export default ReportPage