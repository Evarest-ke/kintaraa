// src/pages/dashboard/SurvivorDashboard.jsx
import { useAuth } from '../../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

import { AuthService } from '../../services/authService'



import { 
  FileText, Calendar, Users, Activity,
  AlertCircle, Shield, Clock, PlusCircle,
  Coins
} from 'lucide-react'
import { api } from '../../services/api'

const SurvivorDashboard = () => {
  const { user } = useAuth()
  const navigate = useNavigate()
  const [tokenBalance, setTokenBalance] = useState(null)
  const [userDetails, setUserDetails] = useState(null)

  useEffect(() => {
    const loadData = async () => {
      try {
        // Get user details
        const userData = AuthService.getUser();
        console.log("user dateails: ",userData)
        setUserDetails(userData);

        // Get token balance
        const principal = await AuthService.getPrincipal();
        const result = await api.getTokenBalance(principal);
        console.log("Token balance: ", Number(result.Ok.balance));
        
        if (result.Ok) {
          const tokenData = {
            balance: Number(result.Ok.balance),
            totalSpent: Number(result.Ok.total_spent),
            lastUpdated: Number(result.Ok.last_updated),
            totalEarned: Number(result.Ok.total_earned)
          };
          setTokenBalance(tokenData);
        } else {
          console.error('Error loading token balance:', result.Err);
          // Try to initialize tokens if not found
          try {
            await api.initializeUserTokens();
            // Fetch balance again after initialization
            const newResult = await api.getTokenBalance(principal);
            if (newResult.Ok) {
              const tokenData = {
                balance: Number(newResult.Ok.balance),
                totalSpent: Number(newResult.Ok.total_spent), 
                lastUpdated: Number(newResult.Ok.last_updated),
                totalEarned: Number(newResult.Ok.total_earned)
              };
              setTokenBalance(tokenData);
            }
          } catch (initError) {
            console.error('Error initializing tokens:', initError);
          }
        }
      } catch (error) {
        console.error('Error loading data:', error);
      }
    };
    loadData()
  }, [])

  const handleReportIncident = () => {
    navigate('/dashboard/survivor/report')
  }

  return (
    <div className="space-y-6">
      {/* Welcome Message and Action Button */}
      <div className="bg-white rounded-lg shadow p-20 flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            Welcome Back, {userDetails?.fullName || 'User'}
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            Your safe space for support and healing
          </p>
          {tokenBalance && (
            <div className="mt-2 flex items-center text-yellow-600">
              <Coins className="h-5 w-5 mr-2" />
              <span className="font-medium">{tokenBalance.balance} tokens available</span>
            </div>
          )}
        </div>
        <button
          onClick={handleReportIncident}
          className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
        >
          <PlusCircle className="h-5 w-5 mr-2" />
          Report Incident
        </button>
      </div>

      {/* Emergency Support Card */}
      <div className="bg-red-50 border-l-4 border-red-400 p-4">
        <div className="flex">
          <div className="flex-shrink-0">
            <AlertCircle className="h-5 w-5 text-red-400" />
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-red-800">Need Immediate Help?</h3>
            <div className="mt-2 text-sm text-red-700">
              <p>If you're in immediate danger, please call emergency services or click the emergency button below.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <div className="bg-white rounded-lg shadow p-5">
          <div className="flex items-center">
            <div className="flex-shrink-0 bg-purple-100 rounded-md p-3">
              <FileText className="h-6 w-6 text-purple-600" />
            </div>
            <div className="ml-5">
              <div className="text-sm font-medium text-gray-500">Active Reports</div>
              <div className="text-lg font-semibold text-gray-900">3</div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-5">
          <div className="flex items-center">
            <div className="flex-shrink-0 bg-blue-100 rounded-md p-3">
              <Calendar className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-5">
              <div className="text-sm font-medium text-gray-500">Appointments</div>
              <div className="text-lg font-semibold text-gray-900">2</div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-5">
          <div className="flex items-center">
            <div className="flex-shrink-0 bg-green-100 rounded-md p-3">
              <Users className="h-6 w-6 text-green-600" />
            </div>
            <div className="ml-5">
              <div className="text-sm font-medium text-gray-500">Support Team</div>
              <div className="text-lg font-semibold text-gray-900">5</div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-5">
          <div className="flex items-center">
            <div className="flex-shrink-0 bg-pink-100 rounded-md p-3">
              <Activity className="h-6 w-6 text-pink-600" />
            </div>
            <div className="ml-5">
              <div className="text-sm font-medium text-gray-500">Progress Goals</div>
              <div className="text-lg font-semibold text-gray-900">7</div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <button 
            onClick={handleReportIncident}
            className="p-4 border border-gray-200 rounded-lg hover:border-purple-500 hover:shadow-md transition-all duration-200"
          >
            <FileText className="h-6 w-6 text-purple-600 mx-auto mb-2" />
            <span className="block text-sm font-medium text-gray-900">Report Incident</span>
          </button>

          <button className="p-4 border border-gray-200 rounded-lg hover:border-purple-500 hover:shadow-md transition-all duration-200">
            <Calendar className="h-6 w-6 text-purple-600 mx-auto mb-2" />
            <span className="block text-sm font-medium text-gray-900">Schedule Support</span>
          </button>

          <button className="p-4 border border-gray-200 rounded-lg hover:border-purple-500 hover:shadow-md transition-all duration-200">
            <Shield className="h-6 w-6 text-purple-600 mx-auto mb-2" />
            <span className="block text-sm font-medium text-gray-900">Safety Plan</span>
          </button>

          <button className="p-4 border border-gray-200 rounded-lg hover:border-purple-500 hover:shadow-md transition-all duration-200">
            <Users className="h-6 w-6 text-purple-600 mx-auto mb-2" />
            <span className="block text-sm font-medium text-gray-900">Support Network</span>
          </button>
        </div>
      </div>

      {/* Recent Reports or Activity */}
      <div className="bg-white rounded-lg shadow">
        <div className="p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Recent Reports</h3>
          <div className="space-y-4">
            {/* This would be populated with actual reports */}
            <div className="border-l-4 border-purple-500 bg-purple-50 p-4">
              <div className="flex justify-between">
                <div>
                  <h4 className="text-sm font-medium text-purple-800">Report #1234</h4>
                  <p className="text-sm text-purple-700">Submitted on March 15, 2024</p>
                </div>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                  In Progress
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SurvivorDashboard