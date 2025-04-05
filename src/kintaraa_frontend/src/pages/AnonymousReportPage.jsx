// src/pages/AnonymousReportPage.jsx
import React from 'react'
import { Shield } from 'lucide-react'

const AnonymousReportPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 pt-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <div className="mx-auto w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <Shield className="h-6 w-6 text-blue-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Anonymous Report</h1>
            <p className="text-gray-600">
              Submit your report safely and anonymously. No personal information required.
            </p>
          </div>

          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Incident Type
              </label>
              <select className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500">
                <option>Physical Violence</option>
                <option>Sexual Violence</option>
                <option>Emotional Abuse</option>
                <option>Financial Abuse</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                When did this happen?
              </label>
              <input 
                type="date" 
                className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Location (Optional)
              </label>
              <input 
                type="text"
                placeholder="City or area where the incident occurred"
                className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Incident Details
              </label>
              <textarea 
                rows={6}
                placeholder="Please share what happened..."
                className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Do you want a follow-up code? (Optional)
              </label>
              <div className="flex items-center">
                <input 
                  type="checkbox"
                  className="border-gray-300 rounded text-blue-600 focus:ring-blue-500"
                />
                <span className="ml-2 text-sm text-gray-600">
                  Generate a secure code to check the status of your report later
                </span>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors"
            >
              Submit Anonymous Report
            </button>
          </form>

          <div className="mt-8 text-sm text-gray-500">
            <p className="font-medium mb-2">Your privacy is protected:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>No personal information is collected</li>
              <li>IP addresses are not logged</li>
              <li>All data is encrypted</li>
              <li>Reports are handled with strict confidentiality</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AnonymousReportPage