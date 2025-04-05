// src/kintaraa_frontend/src/pages/dashboard/CHVDashboard.jsx
import { useState, useEffect } from 'react'
import { AuthService } from '../../services/authService'

import {
  Briefcase, Users, MapPin, AlertCircle, Clock,
  FileText, Shield, Bell, Calendar, Search,
  PlusCircle, MessageSquare, Archive, Scale,
  Heart, BookOpen, Share2, Activity
} from 'lucide-react'

const CHVDashboard = () => {
    const [user, setUser] = useState(null)

    useEffect(() => {
      const loadData = async () => {
        try {
          // Get user details
          const userData = AuthService.getUser();
          console.log(" CHV user details: ", userData)
          setUser(userData);
        } catch (error) {
          console.error('Error loading user details:', error);
        }
      };
      loadData()
    }, [])

  // Mock data for active cases
  const activeCases = [
    {
      id: 1,
      victimName: "Anonymous",
      caseType: "Domestic Violence",
      status: "High Priority",
      location: "Community A",
      reportedDate: "Mar 15, 2024",
      progress: "Initial Support",
      lastUpdate: "1 hour ago"
    },
    {
      id: 2,
      victimName: "Protected",
      caseType: "Harassment",
      status: "Follow-up Required",
      location: "Community B",
      reportedDate: "Mar 16, 2024",
      progress: "Counseling Phase",
      lastUpdate: "2 hours ago"
    }
  ]

  // Stats data
  const statsData = [
    {
      name: 'Active Cases',
      stat: '18',
      icon: Heart,
      color: 'text-pink-500',
      bgColor: 'bg-pink-100',
    },
    {
      name: 'Pending Follow-ups',
      stat: '7',
      icon: Clock,
      color: 'text-orange-500',
      bgColor: 'bg-orange-100',
    },
    {
      name: 'Community Events',
      stat: '4',
      icon: Users,
      color: 'text-green-500',
      bgColor: 'bg-green-100',
    },
    {
      name: 'Support Sessions',
      stat: '23',
      icon: MessageSquare,
      color: 'text-blue-500',
      bgColor: 'bg-blue-100',
    },
  ]

  // Support requests
  const supportRequests = [
    {
      id: 1,
      type: "Counseling Support",
      location: "Community Center A",
      time: "Today, 2:00 PM",
      status: "Scheduled"
    },
    {
      id: 2,
      type: "Medical Referral",
      location: "Health Center B",
      time: "Tomorrow, 10:00 AM",
      status: "Pending"
    }
  ]

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'high priority':
        return 'bg-red-100 text-red-800'
      case 'follow-up required':
        return 'bg-yellow-100 text-yellow-800'
      case 'in progress':
        return 'bg-blue-100 text-blue-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="space-y-6 mt-10">
      {/* Welcome Message */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold text-gray-900">
          Welcome, CHV {user?.fullName || 'Johnson'}
        </h2>
        <p className="mt-1 text-sm text-gray-500">
          Your community support dashboard overview
        </p>
      </div>

      {/* Support Requests Section */}
      <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
        <div className="flex">
          <div className="flex-shrink-0">
            <Bell className="h-5 w-5 text-blue-400" />
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-blue-800">Pending Support Requests</h3>
            <div className="mt-2 space-y-2">
              {supportRequests.map(request => (
                <div key={request.id} className="flex justify-between items-center bg-white p-2 rounded">
                  <div>
                    <span className="font-medium">{request.type}</span>
                    <span className="text-sm text-gray-500"> • {request.time}</span>
                  </div>
                  <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm">
                    Schedule
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {statsData.map((item) => {
          const Icon = item.icon
          return (
            <div key={item.name} className="bg-white overflow-hidden rounded-lg shadow">
              <div className="p-5">
                <div className="flex items-center">
                  <div className={`${item.bgColor} rounded-md p-3`}>
                    <Icon className={`h-6 w-6 ${item.color}`} />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">
                        {item.name}
                      </dt>
                      <dd className="text-lg font-semibold text-gray-900">
                        {item.stat}
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <button className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md transition-all duration-200">
            <Heart className="h-6 w-6 text-pink-600 mx-auto mb-2" />
            <span className="block text-sm font-medium text-gray-900">New Support Case</span>
          </button>
          <button className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md transition-all duration-200">
            <Calendar className="h-6 w-6 text-blue-600 mx-auto mb-2" />
            <span className="block text-sm font-medium text-gray-900">Schedule Follow-up</span>
          </button>
          <button className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md transition-all duration-200">
            <Share2 className="h-6 w-6 text-green-600 mx-auto mb-2" />
            <span className="block text-sm font-medium text-gray-900">Community Outreach</span>
          </button>
          <button className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md transition-all duration-200">
            <BookOpen className="h-6 w-6 text-purple-600 mx-auto mb-2" />
            <span className="block text-sm font-medium text-gray-900">Resources</span>
          </button>
        </div>
      </div>

      {/* Active Cases */}
      <div className="bg-white rounded-lg shadow">
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-gray-900">Active Support Cases</h3>
            <button className="inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md text-blue-600 bg-blue-100 hover:bg-blue-200">
              <PlusCircle className="h-4 w-4 mr-1" />
              New Case
            </button>
          </div>
          <div className="flow-root">
            <ul className="divide-y divide-gray-200">
              {activeCases.map((case_) => (
                <li key={case_.id} className="py-4">
                  <div className="flex items-center justify-between">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-3">
                        <p className="text-sm font-medium text-gray-900 truncate">
                          Case #{case_.id}
                        </p>
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(case_.status)}`}>
                          {case_.status}
                        </span>
                      </div>
                      <p className="mt-1 text-sm text-gray-500">
                        {case_.caseType} • Location: {case_.location}
                      </p>
                      <p className="mt-1 text-xs text-gray-500">
                        Reported: {case_.reportedDate} • Last Update: {case_.lastUpdate}
                      </p>
                    </div>
                    <button className="ml-4 p-1 text-gray-400 hover:text-gray-500">
                      <Activity className="h-5 w-5" />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CHVDashboard