// src/pages/dashboard/MedicalDashboard.jsx
import { useAuth } from '../../contexts/AuthContext'
import { Calendar, Clock, Users, FileText, Search, PlusCircle } from 'lucide-react'

const MedicalDashboard = () => {
  const { user } = useAuth()

  const upcomingAppointments = [
    {
      id: 1,
      patientName: "Sarah Johnson",
      type: "Initial Assessment",
      date: "Mar 15, 2024",
      time: "10:00 AM",
      status: "confirmed"
    },
    {
      id: 2,
      patientName: "Michael Brown",
      type: "Follow-up",
      date: "Mar 15, 2024",
      time: "2:00 PM",
      status: "pending"
    }
  ]

  const recentCases = [
    {
      id: 1,
      patientName: "Emily Davis",
      lastVisit: "Mar 10, 2024",
      status: "Active",
      notes: "Follow-up required in 2 weeks"
    },
    {
      id: 2,
      patientName: "James Wilson",
      lastVisit: "Mar 8, 2024",
      status: "Under Review",
      notes: "Waiting for test results"
    }
  ]

  return (
    <div className="space-y-6">
      {/* Welcome Message */}
      <div className="bg-white rounded-lg shadow p-20">
        <h2 className="text-2xl font-bold text-gray-900">
          Welcome, Dr. {user?.name || 'Doctor'}
        </h2>
        <p className="mt-1 text-sm text-gray-500">
          Here's an overview of your patients and appointments
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {[
          {
            name: 'Total Patients',
            stat: '45',
            icon: Users,
            color: 'text-blue-500',
            bgColor: 'bg-blue-100',
          },
          {
            name: "Today's Appointments",
            stat: '8',
            icon: Calendar,
            color: 'text-purple-500',
            bgColor: 'bg-purple-100',
          },
          {
            name: 'Active Cases',
            stat: '12',
            icon: FileText,
            color: 'text-green-500',
            bgColor: 'bg-green-100',
          },
          {
            name: 'Pending Reports',
            stat: '3',
            icon: Clock,
            color: 'text-yellow-500',
            bgColor: 'bg-yellow-100',
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
        {/* Upcoming Appointments */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-gray-900">Upcoming Appointments</h3>
              <button className="inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md text-purple-600 bg-purple-100 hover:bg-purple-200">
                <PlusCircle className="h-4 w-4 mr-1" />
                Add New
              </button>
            </div>
            <div className="flow-root">
              <ul className="divide-y divide-gray-200">
                {upcomingAppointments.map((appointment) => (
                  <li key={appointment.id} className="py-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
                          <span className="font-medium text-purple-600">
                            {appointment.patientName.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">
                          {appointment.patientName}
                        </p>
                        <p className="text-sm text-gray-500">
                          {appointment.type}
                        </p>
                      </div>
                      <div className="text-right text-sm">
                        <div className="text-gray-900">{appointment.date}</div>
                        <div className="text-gray-500">{appointment.time}</div>
                      </div>
                      <div>
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          appointment.status === 'confirmed'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {appointment.status}
                        </span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Recent Cases */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-gray-900">Recent Cases</h3>
              <div className="relative">
                <input
                  type="text"
                  className="pl-8 pr-4 py-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-purple-500"
                  placeholder="Search cases..."
                />
                <Search className="h-4 w-4 text-gray-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
              </div>
            </div>
            <div className="flow-root">
              <ul className="divide-y divide-gray-200">
                {recentCases.map((case_) => (
                  <li key={case_.id} className="py-4">
                    <div className="flex items-center justify-between">
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">
                          {case_.patientName}
                        </p>
                        <p className="text-xs text-gray-500">
                          Last visit: {case_.lastVisit}
                        </p>
                        <p className="mt-1 text-sm text-gray-500">
                          {case_.notes}
                        </p>
                      </div>
                      <div className="ml-4">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          case_.status === 'Active'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {case_.status}
                        </span>
                      </div>
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
            <Users className="h-6 w-6 text-purple-600 mx-auto mb-2" />
            <span className="block text-sm font-medium text-gray-900">Add Patient</span>
          </button>
          <button className="p-4 border border-gray-200 rounded-lg hover:border-purple-500 hover:shadow-md transition-all duration-200">
            <Calendar className="h-6 w-6 text-purple-600 mx-auto mb-2" />
            <span className="block text-sm font-medium text-gray-900">Schedule Appointment</span>
          </button>
          <button className="p-4 border border-gray-200 rounded-lg hover:border-purple-500 hover:shadow-md transition-all duration-200">
            <FileText className="h-6 w-6 text-purple-600 mx-auto mb-2" />
            <span className="block text-sm font-medium text-gray-900">Write Report</span>
          </button>
          <button className="p-4 border border-gray-200 rounded-lg hover:border-purple-500 hover:shadow-md transition-all duration-200">
            <Search className="h-6 w-6 text-purple-600 mx-auto mb-2" />
            <span className="block text-sm font-medium text-gray-900">Search Records</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default MedicalDashboard