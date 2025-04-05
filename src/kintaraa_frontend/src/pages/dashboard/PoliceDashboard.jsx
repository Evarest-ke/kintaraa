import { useState, useEffect } from 'react'
import { AuthService } from '../../services/authService'
import {
  Briefcase, Users, MapPin, AlertCircle, Clock,
  FileText, Shield, Bell, Calendar, Search,
  PlusCircle, MessageSquare, Archive, Scale
} from 'lucide-react'

const PoliceDashboard = () => {
   
    const [user, setUser] = useState(null)

    useEffect(() => {
      const loadData = async () => {
        try {
          // Get user details
          const userData = AuthService.getUser();
          console.log(" police user details: ", userData)
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
      location: "District A",
      reportedDate: "Mar 15, 2024",
      progress: "Investigation Phase",
      lastUpdate: "1 hour ago"
    },
    {
      id: 2,
      victimName: "Protected",
      caseType: "Harassment",
      status: "In Progress",
      location: "District B",
      reportedDate: "Mar 16, 2024",
      progress: "Evidence Collection",
      lastUpdate: "3 hours ago"
    }
  ]

  // Stats data
  const statsData = [
    {
      name: 'Active Cases',
      stat: '24',
      icon: Briefcase,
      color: 'text-blue-500',
      bgColor: 'bg-blue-100',
    },
    {
      name: 'Emergency Alerts',
      stat: '3',
      icon: AlertCircle,
      color: 'text-red-500',
      bgColor: 'bg-red-100',
    },
    {
      name: 'Cases This Week',
      stat: '15',
      icon: Calendar,
      color: 'text-purple-500',
      bgColor: 'bg-purple-100',
    },
    {
      name: 'Response Time',
      stat: '12m',
      icon: Clock,
      color: 'text-green-500',
      bgColor: 'bg-green-100',
    },
  ]

  // Emergency alerts
  const emergencyAlerts = [
    {
      id: 1,
      type: "Panic Alert",
      location: "123 Main St",
      time: "2 minutes ago",
      status: "Active"
    },
    {
      id: 2,
      type: "Distress Call",
      location: "456 Park Ave",
      time: "5 minutes ago",
      status: "Responding"
    }
  ]

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'high priority':
        return 'bg-red-100 text-red-800'
      case 'in progress':
        return 'bg-blue-100 text-blue-800'
      case 'resolved':
        return 'bg-green-100 text-green-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="space-y-6 mt-10">
      {/* Welcome Message */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold text-gray-900">
          Welcome, Officer {user?.fullName || 'Smith'}
        </h2>
        <p className="mt-1 text-sm text-gray-500">
          Current active cases and emergency alerts overview
        </p>
      </div>

      {/* Emergency Alerts Section */}
      <div className="bg-red-50 border-l-4 border-red-400 p-4">
        <div className="flex">
          <div className="flex-shrink-0">
            <AlertCircle className="h-5 w-5 text-red-400" />
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-red-800">Active Emergency Alerts</h3>
            <div className="mt-2 space-y-2">
              {emergencyAlerts.map(alert => (
                <div key={alert.id} className="flex justify-between items-center bg-white p-2 rounded">
                  <div>
                    <span className="font-medium">{alert.type}</span>
                    <span className="text-sm text-gray-500"> • {alert.location}</span>
                  </div>
                  <button className="bg-red-600 text-white px-3 py-1 rounded text-sm">
                    Respond
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
            <PlusCircle className="h-6 w-6 text-blue-600 mx-auto mb-2" />
            <span className="block text-sm font-medium text-gray-900">New Case</span>
          </button>
          <button className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md transition-all duration-200">
            <Bell className="h-6 w-6 text-blue-600 mx-auto mb-2" />
            <span className="block text-sm font-medium text-gray-900">Emergency Response</span>
          </button>
          <button className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md transition-all duration-200">
            <MessageSquare className="h-6 w-6 text-blue-600 mx-auto mb-2" />
            <span className="block text-sm font-medium text-gray-900">Victim Support</span>
          </button>
          <button className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md transition-all duration-200">
            <Archive className="h-6 w-6 text-blue-600 mx-auto mb-2" />
            <span className="block text-sm font-medium text-gray-900">Evidence Management</span>
          </button>
        </div>
      </div>

      {/* Active Cases */}
      <div className="bg-white rounded-lg shadow">
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-gray-900">Active Cases</h3>
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
                      <Search className="h-5 w-5" />
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

export default PoliceDashboard