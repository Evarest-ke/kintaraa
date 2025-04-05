// src/pages/dashboard/LegalDashboard.jsx
import { useAuth } from '../../contexts/AuthContext'
import { 
  Briefcase, Calendar, Users, FileText, 
  Clock, PlusCircle, Search, Scale,
  AlertCircle
} from 'lucide-react'

const LegalDashboard = () => {
  const { user } = useAuth()

  const activeCases = [
    {
      id: 1,
      clientName: "Sarah Johnson",
      caseType: "Protective Order",
      status: "High Priority",
      nextHearing: "Mar 20, 2024",
      progress: "Documentation Phase",
      lastUpdate: "2 days ago"
    },
    {
      id: 2,
      clientName: "Michael Brown",
      caseType: "Legal Consultation",
      status: "In Progress",
      nextHearing: "Mar 25, 2024",
      progress: "Evidence Collection",
      lastUpdate: "1 day ago"
    },
    {
      id: 3,
      clientName: "Emily Davis",
      caseType: "Court Representation",
      status: "Pending Review",
      nextHearing: "Apr 5, 2024",
      progress: "Awaiting Response",
      lastUpdate: "5 days ago"
    }
  ]

  const upcomingDeadlines = [
    {
      id: 1,
      title: "File Motion - Johnson Case",
      deadline: "Mar 18, 2024",
      priority: "high",
      type: "Filing"
    },
    {
      id: 2,
      title: "Evidence Submission - Brown Case",
      deadline: "Mar 20, 2024",
      priority: "medium",
      type: "Documentation"
    },
    {
      id: 3,
      title: "Client Meeting - Davis Case",
      deadline: "Mar 21, 2024",
      priority: "normal",
      type: "Meeting"
    }
  ]

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high':
        return 'text-red-600 bg-red-100'
      case 'medium':
        return 'text-yellow-600 bg-yellow-100'
      case 'normal':
        return 'text-green-600 bg-green-100'
      default:
        return 'text-gray-600 bg-gray-100'
    }
  }

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'high priority':
        return 'bg-red-100 text-red-800'
      case 'in progress':
        return 'bg-blue-100 text-blue-800'
      case 'pending review':
        return 'bg-yellow-100 text-yellow-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="space-y-6">
      {/* Welcome Message */}
      <div className="bg-white rounded-lg shadow p-20">
        <h2 className="text-2xl font-bold text-gray-900">
          Welcome, Atty. {user?.name || 'Counselor'}
        </h2>
        <p className="mt-1 text-sm text-gray-500">
          Here's an overview of your cases and upcoming deadlines
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {[
          {
            name: 'Active Cases',
            stat: '12',
            icon: Briefcase,
            color: 'text-blue-500',
            bgColor: 'bg-blue-100',
          },
          {
            name: 'Pending Hearings',
            stat: '5',
            icon: Scale,
            color: 'text-purple-500',
            bgColor: 'bg-purple-100',
          },
          {
            name: 'Active Clients',
            stat: '18',
            icon: Users,
            color: 'text-green-500',
            bgColor: 'bg-green-100',
          },
          {
            name: 'Due This Week',
            stat: '7',
            icon: Clock,
            color: 'text-red-500',
            bgColor: 'bg-red-100',
          },
        ].map((item) => {
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

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Active Cases */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-gray-900">Active Cases</h3>
              <button className="inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md text-purple-600 bg-purple-100 hover:bg-purple-200">
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
                            {case_.clientName}
                          </p>
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(case_.status)}`}>
                            {case_.status}
                          </span>
                        </div>
                        <p className="mt-1 text-sm text-gray-500">
                          {case_.caseType} • Next Hearing: {case_.nextHearing}
                        </p>
                        <p className="mt-1 text-xs text-gray-500">
                          Progress: {case_.progress} • Updated {case_.lastUpdate}
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

        {/* Upcoming Deadlines */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-gray-900">Upcoming Deadlines</h3>
              <div className="relative">
                <input
                  type="text"
                  className="pl-8 pr-4 py-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-purple-500"
                  placeholder="Search deadlines..."
                />
                <Search className="h-4 w-4 text-gray-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
              </div>
            </div>
            <div className="flow-root">
              <ul className="divide-y divide-gray-200">
                {upcomingDeadlines.map((deadline) => (
                  <li key={deadline.id} className="py-4">
                    <div className="flex items-center justify-between">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-3">
                          <p className="text-sm font-medium text-gray-900 truncate">
                            {deadline.title}
                          </p>
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getPriorityColor(deadline.priority)}`}>
                            {deadline.priority.charAt(0).toUpperCase() + deadline.priority.slice(1)}
                          </span>
                        </div>
                        <p className="mt-1 text-sm text-gray-500">
                          Due: {deadline.deadline} • Type: {deadline.type}
                        </p>
                      </div>
                      {deadline.priority === 'high' && (
                        <AlertCircle className="h-5 w-5 text-red-500" />
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <button className="p-4 border border-gray-200 rounded-lg hover:border-purple-500 hover:shadow-md transition-all duration-200">
            <PlusCircle className="h-6 w-6 text-purple-600 mx-auto mb-2" />
            <span className="block text-sm font-medium text-gray-900">New Case</span>
          </button>
          <button className="p-4 border border-gray-200 rounded-lg hover:border-purple-500 hover:shadow-md transition-all duration-200">
            <Calendar className="h-6 w-6 text-purple-600 mx-auto mb-2" />
            <span className="block text-sm font-medium text-gray-900">Schedule Hearing</span>
          </button>
          <button className="p-4 border border-gray-200 rounded-lg hover:border-purple-500 hover:shadow-md transition-all duration-200">
            <FileText className="h-6 w-6 text-purple-600 mx-auto mb-2" />
            <span className="block text-sm font-medium text-gray-900">Draft Document</span>
          </button>
          <button className="p-4 border border-gray-200 rounded-lg hover:border-purple-500 hover:shadow-md transition-all duration-200">
            <Users className="h-6 w-6 text-purple-600 mx-auto mb-2" />
            <span className="block text-sm font-medium text-gray-900">Client Meeting</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default LegalDashboard