// src/pages/SupportPage.jsx
import { Heart, Phone, Users, MessageSquare, Calendar, Shield, Clock } from 'lucide-react'
import { Link } from 'react-router-dom'

const SupportPage = () => {
  const supportServices = [
    {
      title: '24/7 Crisis Support',
      icon: Phone,
      description: 'Immediate support and crisis intervention available any time.',
      action: 'Call Now',
      link: '/crisis-support',
      color: 'red'
    },
    {
      title: 'Counseling Services',
      icon: Heart,
      description: 'Connect with professional counselors and therapists.',
      action: 'Find Counselor',
      link: '/counseling',
      color: 'pink'
    },
    {
      title: 'Legal Support',
      icon: Shield,
      description: 'Access legal advice and representation services.',
      action: 'Get Legal Help',
      link: '/legal-support',
      color: 'blue'
    },
    {
      title: 'Support Groups',
      icon: Users,
      description: 'Join peer support groups and community meetings.',
      action: 'Join Group',
      link: '/groups',
      color: 'green'
    }
  ]

  const supportTypes = [
    {
      title: 'Individual Support',
      description: 'One-on-one support sessions with professional counselors',
      features: [
        'Personalized care plan',
        'Flexible scheduling',
        'Online or in-person sessions',
        'Progress tracking'
      ],
      icon: MessageSquare
    },
    {
      title: 'Group Support',
      description: 'Facilitated group sessions with others on similar journeys',
      features: [
        'Peer connection',
        'Shared experiences',
        'Weekly meetings',
        'Structured activities'
      ],
      icon: Users
    },
    {
      title: 'Crisis Support',
      description: '24/7 emergency support and immediate assistance',
      features: [
        'Immediate response',
        'Crisis intervention',
        'Safety planning',
        'Emergency resources'
      ],
      icon: Phone
    }
  ]

  const upcomingSessions = [
    {
      title: 'Healing Through Art',
      date: 'Tomorrow at 2 PM',
      type: 'Group Session',
      spots: '5 spots left'
    },
    {
      title: 'Mindfulness & Meditation',
      date: 'Wednesday at 6 PM',
      type: 'Group Session',
      spots: '3 spots left'
    },
    {
      title: 'Trauma Recovery',
      date: 'Thursday at 7 PM',
      type: 'Support Group',
      spots: '8 spots left'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12 pt-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Support Services</h1>
          <p className="text-lg text-gray-600">
            Access professional support services and resources on your healing journey
          </p>
        </div>

        {/* Support Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {supportServices.map((service) => {
            const Icon = service.icon
            return (
              <div key={service.title} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className={`p-6 bg-${service.color}-50 border-b border-${service.color}-100`}>
                  <div className="flex items-center">
                    <div className={`p-2 bg-${service.color}-100 rounded-lg`}>
                      <Icon className={`h-6 w-6 text-${service.color}-600`} />
                    </div>
                    <h3 className="ml-3 text-lg font-semibold text-gray-900">
                      {service.title}
                    </h3>
                  </div>
                  <p className="mt-4 text-gray-600">{service.description}</p>
                </div>
                <div className="p-6">
                  <Link
                    to={service.link}
                    className={`w-full inline-flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-${service.color}-600 hover:bg-${service.color}-700`}
                  >
                    {service.action}
                  </Link>
                </div>
              </div>
            )
          })}
        </div>

        {/* Support Types Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {supportTypes.map((type) => {
            const Icon = type.icon
            return (
              <div key={type.title} className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <Icon className="h-6 w-6 text-purple-600" />
                  <h3 className="ml-3 text-lg font-semibold text-gray-900">
                    {type.title}
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">{type.description}</p>
                <ul className="space-y-2">
                  {type.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>

        {/* Upcoming Sessions */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Upcoming Sessions</h2>
            <Link
              to="/schedule"
              className="text-purple-600 hover:text-purple-500 flex items-center"
            >
              <Calendar className="h-5 w-5 mr-2" />
              View Full Schedule
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingSessions.map((session) => (
              <div
                key={session.title}
                className="border border-gray-200 rounded-lg p-4 hover:border-purple-500 transition-colors"
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {session.title}
                  </h3>
                  <span className="px-2 py-1 bg-purple-100 text-purple-600 text-xs font-medium rounded-full">
                    {session.type}
                  </span>
                </div>
                <div className="flex items-center text-gray-500 mb-2">
                  <Clock className="h-4 w-4 mr-2" />
                  {session.date}
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{session.spots}</span>
                  <button className="text-purple-600 hover:text-purple-500 font-medium text-sm">
                    Reserve Spot
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Support */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-500 rounded-lg shadow-lg p-8 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Need Immediate Support?</h2>
            <p className="text-lg mb-8">
              Our support team is available 24/7 to assist you. Don't hesitate to reach out
              if you need help or have questions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-purple-600 px-6 py-3 rounded-md hover:bg-gray-100 transition-colors flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                Call Support
              </button>
              <button className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-md hover:bg-white/10 transition-colors flex items-center">
                <MessageSquare className="h-5 w-5 mr-2" />
                Live Chat
              </button>
            </div>
          </div>
        </div>

        {/* Resources Section */}
        <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Support Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link to="/resources/guides" className="block p-6 border border-gray-200 rounded-lg hover:border-purple-500 transition-colors">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Self-Help Guides</h3>
              <p className="text-gray-600">Access guides and resources for your healing journey</p>
            </Link>
            <Link to="/resources/safety" className="block p-6 border border-gray-200 rounded-lg hover:border-purple-500 transition-colors">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Safety Planning</h3>
              <p className="text-gray-600">Create and manage your personal safety plan</p>
            </Link>
            <Link to="/resources/community" className="block p-6 border border-gray-200 rounded-lg hover:border-purple-500 transition-colors">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Community Support</h3>
              <p className="text-gray-600">Connect with others on similar healing journeys</p>
            </Link>
          </div>
        </div>

        {/* Support Note */}
        <div className="mt-8 text-center text-gray-600">
          <p>
            Remember, your healing journey is unique, and we're here to support you every step of the way.
            If you need immediate assistance, don't hesitate to use our emergency services.
          </p>
        </div>
      </div>
    </div>
  )
}

export default SupportPage