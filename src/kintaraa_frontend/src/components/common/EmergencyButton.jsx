// src/components/common/EmergencyButton.jsx
import { useState } from 'react'
import { AlertCircle, Phone, X, MapPin, Shield } from 'lucide-react'

const EmergencyButton = () => {
  const [showModal, setShowModal] = useState(false)

  const emergencyContacts = [
    {
      name: 'Emergency Services',
      number: '911',
      description: 'For immediate emergency assistance'
    },
    {
      name: 'National Crisis Hotline',
      number: '1-800-273-8255',
      description: '24/7 crisis support and counseling'
    },
    {
      name: 'Domestic Violence Hotline',
      number: '1-800-799-7233',
      description: '24/7 support for domestic violence survivors'
    },
    {
      name: 'Sexual Assault Hotline',
      number: '1-800-656-4673',
      description: '24/7 support for sexual assault survivors'
    }
  ]

  const safetyResources = [
    {
      title: 'Safety Planning',
      description: 'Create or review your personal safety plan'
    },
    {
      title: 'Safe Locations',
      description: 'Find nearby safe houses and shelters'
    },
    {
      title: 'Emergency Contacts',
      description: 'Manage your trusted emergency contacts'
    }
  ]

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="fixed bottom-6 right-6 bg-red-500 text-white px-6 py-3 rounded-full shadow-lg emergency-pulse z-50 hover:bg-red-600 transition-colors flex items-center space-x-2"
      >
        <AlertCircle className="h-5 w-5" />
        <span>Emergency Help 24/7</span>
      </button>

      {/* Emergency Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            {/* Background overlay */}
            <div 
              className="fixed inset-0 transition-opacity" 
              onClick={() => setShowModal(false)}
            >
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            {/* Modal panel */}
            <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
              <div className="absolute top-0 right-0 pt-4 pr-4">
                <button
                  onClick={() => setShowModal(false)}
                  className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div>
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100">
                  <AlertCircle className="h-6 w-6 text-red-600" />
                </div>
                <div className="mt-3 text-center sm:mt-5">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Emergency Help
                  </h3>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      If you're in immediate danger, please contact emergency services immediately.
                    </p>
                  </div>
                </div>
              </div>

              {/* Emergency Contacts */}
              <div className="mt-5 space-y-4">
                {emergencyContacts.map((contact, index) => (
                  <a
                    key={index}
                    href={`tel:${contact.number}`}
                    className="block p-4 bg-white border border-gray-200 rounded-lg hover:border-red-500 hover:shadow-md transition-all duration-200"
                  >
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <Phone className="h-5 w-5 text-red-500" />
                      </div>
                      <div className="ml-4">
                        <p className="text-base font-medium text-gray-900">
                          {contact.name}
                        </p>
                        <p className="text-sm text-gray-500">
                          {contact.description}
                        </p>
                      </div>
                      <div className="ml-auto">
                        <span className="text-base font-semibold text-red-600">
                          {contact.number}
                        </span>
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Safety Resources */}
              <div className="mt-6 border-t border-gray-200 pt-6">
                <h4 className="text-base font-medium text-gray-900">Safety Resources</h4>
                <div className="mt-4 grid grid-cols-1 gap-4">
                  {safetyResources.map((resource, index) => (
                    <button
                      key={index}
                      className="flex items-center p-3 text-left bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      {index === 0 ? (
                        <Shield className="h-5 w-5 text-purple-500" />
                      ) : index === 1 ? (
                        <MapPin className="h-5 w-5 text-purple-500" />
                      ) : (
                        <Phone className="h-5 w-5 text-purple-500" />
                      )}
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900">{resource.title}</p>
                        <p className="text-xs text-gray-500">{resource.description}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Warning Message */}
              <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-400 p-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <AlertCircle className="h-5 w-5 text-yellow-400" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-yellow-700">
                      If you feel you are being monitored, please exit this site immediately. 
                      You can clear your browser history afterward.
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Exit Button */}
              <div className="mt-6">
                <button
                  onClick={() => window.location.href = 'https://www.google.com'}
                  className="w-full bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition-colors"
                >
                  Quick Exit (Esc)
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default EmergencyButton