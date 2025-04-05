// src/pages/dashboard/IncidentReportPage.jsx
import { useNavigate } from 'react-router-dom'
import { Shield, AlertCircle } from 'lucide-react'
import IncidentReportForm from '../../components/forms/IncidentReportForm'
import { useAuth } from '../../contexts/AuthContext'

const IncidentReportPage = () => {
  const navigate = useNavigate()
  const { user } = useAuth()

  const handleSubmit = async (data) => {
    // Handle form submission
    // In a real app, you would send this to your API
    console.log('Submitted report:', data)
    navigate('/dashboard/survivor')
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header Section */}
      <div className="bg-white rounded-lg shadow-sm p-20 mb-6">
        <div className="flex items-center space-x-3 mb-4">
          <div className="p-2 bg-purple-100 rounded-lg">
            <Shield className="h-6 w-6 text-purple-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900">Report an Incident</h1>
        </div>
        <p className="text-gray-600">
          Your safety and well-being are our top priority. This form allows you to document incidents
          securely and confidentially. Take your time, and provide as much detail as you feel comfortable sharing.
        </p>
      </div>

      {/* Emergency Alert */}
      <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-6">
        <div className="flex">
          <div className="flex-shrink-0">
            <AlertCircle className="h-5 w-5 text-red-400" />
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-red-800">Emergency Assistance</h3>
            <div className="mt-2 text-sm text-red-700">
              <p>If you are in immediate danger, please:</p>
              <ul className="list-disc list-inside mt-1">
                <li>Call emergency services (911) immediately</li>
                <li>Seek a safe location</li>
                <li>Contact your local support network if possible</li>
              </ul>
            </div>
            <div className="mt-4">
              <div className="flex space-x-4">
                <button
                  type="button"
                  className="bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                  Call Emergency Services
                </button>
                <button
                  type="button"
                  className="bg-white text-red-700 px-4 py-2 rounded-md text-sm font-medium hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                  View Safety Resources
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Support Information */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Available Support</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-medium text-gray-900">Counseling Support</h3>
            <p className="text-sm text-gray-600 mt-1">24/7 emotional support and counseling services available</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-medium text-gray-900">Legal Assistance</h3>
            <p className="text-sm text-gray-600 mt-1">Free legal consultation and representation options</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-medium text-gray-900">Medical Care</h3>
            <p className="text-sm text-gray-600 mt-1">Access to medical professionals and care facilities</p>
          </div>
        </div>
      </div>

      {/* Report Form */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <IncidentReportForm onSubmit={handleSubmit} />
      </div>
    </div>
  )
}

export default IncidentReportPage