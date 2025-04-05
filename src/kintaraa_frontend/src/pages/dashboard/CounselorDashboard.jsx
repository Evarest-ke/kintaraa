// src/pages/dashboard/CounselorDashboard.jsx
import { useAuth } from '../../contexts/AuthContext'
import { 
  Users, Calendar, FileText, Activity,
  PlusCircle, Search, Heart, Brain,
  Clock, AlertCircle, BarChart
} from 'lucide-react'

const CounselorDashboard = () => {
  const { user } = useAuth()

  const upcomingSessions = [
    {
      id: 1,
      clientName: "Sarah Johnson",
      sessionType: "Individual Therapy",
      date: "Today",
      time: "2:00 PM",
      status: "Confirmed",
      notes: "Follow-up on coping strategies",
      duration: "60 min"
    },
    {
      id: 2,
      clientName: "Support Group A",
      sessionType: "Group Therapy",
      date: "Today",
      time: "4:00 PM",
      status: "Confirmed",
      notes: "Trauma recovery discussion",
      duration: "90 min"
    },
    {
      id: 3,
      clientName: "Michael Brown",
      sessionType: "Initial Assessment",
      date: "Tomorrow",
      time: "10:00 AM",
      status: "Pending",
      notes: "First session - trauma assessment",
      duration: "75 min"
    }
  ]

  const clientProgress = [
    {
      id: 1,
      clientName: "Emily Davis",
      lastSession: "2 days ago",
      progressScore: 75,
      trend: "improving",
      nextGoal: "Develop social support network",
      alerts: ["Missed last group session"]
    },
    {
      id: 2,
      clientName: "James Wilson",
      lastSession: "1 week ago",
      progressScore: 60,
      trend: "stable",
      nextGoal: "Practice mindfulness exercises",
      alerts: []
    },
    {
      id: 3,
      clientName: "Sarah Johnson",
      lastSession: "Yesterday",
      progressScore: 85,
      trend: "improving",
      nextGoal: "Work-life balance strategies",
      alerts: ["Review medication with psychiatrist"]
    }
  ]

  const getTrendColor = (trend) => {
    switch (trend) {
      case 'improving':
        return 'text-green-600'
      case 'stable':
        return 'text-blue-600'
      case 'declining':
        return 'text-red-600'
      default:
        return 'text-gray-600'
    }
  }

  const getProgressColor = (score) => {
    if (score >= 80) return 'bg-green-500'
    if (score >= 60) return 'bg-blue-500'
    return 'bg-yellow-500'
  }

  return (
    <div className="space-y-6">
      {/* Welcome Message */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold text-gray-900">
          Welcome, Dr. {user?.name || 'Counselor'}
        </h2>
        <p className="mt-1 text-sm text-gray-500">
          You have 3 sessions scheduled for today
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {[
          {
            name: 'Active Clients',
            stat: '24',
            icon: Users,
            color: 'text-blue-500',
            bgColor: 'bg-blue-100',
          },
          {
            name: "Today's Sessions",
            stat: '3',
            icon: Calendar,
            color: 'text-purple-500',
            bgColor: 'bg-purple-100',
          },
          {
            name: 'Group Sessions',
            stat: '4',
            icon: Heart,
            color: 'text-pink-500',
            bgColor: 'bg-pink-100',
          },
          {
            name: 'Progress Notes Due',
            stat: '7',
            icon: FileText,
            color: 'text-yellow-500',
            bgColor: 'bg-yellow-100',
          }
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
        {/* Upcoming Sessions */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-gray-900">Today's Sessions</h3>
              <button className="inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md text-purple-600 bg-purple-100 hover:bg-purple-200">
                <PlusCircle className="h-4 w-4 mr-1" />
                Schedule Session
              </button>
            </div>
            <div className="flow-root">
              <ul className="divide-y divide-gray-200">
                {upcomingSessions.map((session) => (
                  <li key={session.id} className="py-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
                          <span className="font-medium text-purple-600">
                            {session.clientName.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900">
                          {session.clientName}
                        </p>
                        <p className="text-sm text-gray-500">
                          {session.sessionType} • {session.duration}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          {session.notes}
                        </p>
                      </div>
                      <div className="text-right text-sm">
                        <p className="text-gray-900">{session.time}</p>
                        <p className="text-gray-500">{session.date}</p>
                        <span className={`inline-flex mt-1 items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          session.status === 'Confirmed' 
                            ? 'bg-green-100 text-green-800'
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {session.status}
                        </span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Client Progress */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-gray-900">Client Progress</h3>
              <div className="relative">
                <input
                  type="text"
                  className="pl-8 pr-4 py-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-purple-500"
                  placeholder="Search clients..."
                />
                <Search className="h-4 w-4 text-gray-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
              </div>
            </div>
            <div className="flow-root">
              <ul className="divide-y divide-gray-200">
                {clientProgress.map((client) => (
                  <li key={client.id} className="py-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <span className="text-sm font-medium text-gray-900">
                          {client.clientName}
                        </span>
                        {client.alerts.length > 0 && (
                          <AlertCircle className="h-4 w-4 text-yellow-500" />
                        )}
                      </div>
                      <span className={`flex items-center text-sm ${getTrendColor(client.trend)}`}>
                        <BarChart className="h-4 w-4 mr-1" />
                        {client.trend}
                      </span>
                    </div>
                    <div className="mt-2">
                      <div className="flex items-center">
                        <div className="flex-1 bg-gray-200 rounded-full h-2">
                          <div
                            className={`${getProgressColor(client.progressScore)} h-2 rounded-full`}
                            style={{ width: `${client.progressScore}%` }}
                          />
                        </div>
                        <span className="ml-2 text-sm text-gray-500">
                          {client.progressScore}%
                        </span>
                      </div>
                    </div>
                    <div className="mt-2 text-sm">
                      <span className="text-gray-500">Next Goal: </span>
                      <span className="text-gray-700">{client.nextGoal}</span>
                    </div>
                    {client.alerts.length > 0 && (
                      <div className="mt-2">
                        {client.alerts.map((alert, index) => (
                          <div key={index} className="text-xs text-yellow-600 flex items-center">
                            <AlertCircle className="h-3 w-3 mr-1" />
                            {alert}
                          </div>
                        ))}
                      </div>
                    )}
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
            <span className="block text-sm font-medium text-gray-900">New Session</span>
          </button>
          <button className="p-4 border border-gray-200 rounded-lg hover:border-purple-500 hover:shadow-md transition-all duration-200">
            <FileText className="h-6 w-6 text-purple-600 mx-auto mb-2" />
            <span className="block text-sm font-medium text-gray-900">Progress Notes</span>
          </button>
          <button className="p-4 border border-gray-200 rounded-lg hover:border-purple-500 hover:shadow-md transition-all duration-200">
            <Brain className="h-6 w-6 text-purple-600 mx-auto mb-2" />
            <span className="block text-sm font-medium text-gray-900">Assessment Tools</span>
          </button>
          <button className="p-4 border border-gray-200 rounded-lg hover:border-purple-500 hover:shadow-md transition-all duration-200">
            <Heart className="h-6 w-6 text-purple-600 mx-auto mb-2" />
            <span className="block text-sm font-medium text-gray-900">Group Session</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default CounselorDashboard