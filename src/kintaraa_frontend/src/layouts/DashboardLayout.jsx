// src/layouts/DashboardLayout.jsx
import { useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { 
  Menu, X, Bell, LogOut, Settings, 
  Home, FileText, Users, Calendar, 
  MessageSquare, Shield, Activity,
  ChevronDown, PlusCircle, Search
} from 'lucide-react'
import { useAuth } from '../contexts/AuthContext'

const userTypeConfig = {
  survivor: {
    name: 'Survivor',
    title: 'Survivor Dashboard',
    navigation: [
      { name: 'Dashboard', icon: Home, href: '/dashboard/survivor' },
      { name: 'My Reports', icon: FileText, href: '/dashboard/survivor/reports' },
      { name: 'Support Team', icon: Users, href: '/dashboard/survivor/support' },
      { name: 'Appointments', icon: Calendar, href: '/dashboard/survivor/appointments' },
      { name: 'Resources', icon: Shield, href: '/dashboard/survivor/resources' },
      { name: 'Progress', icon: Activity, href: '/dashboard/survivor/progress' },
    ]
  },
  medical: {
    name: 'Medical Professional',
    title: 'Medical Professional Dashboard',
    navigation: [
      { name: 'Dashboard', icon: Home, href: '/dashboard/medical' },
      { name: 'Patients', icon: Users, href: '/dashboard/medical/patients' },
      { name: 'Appointments', icon: Calendar, href: '/dashboard/medical/appointments' },
      { name: 'Reports', icon: FileText, href: '/dashboard/medical/reports' },
      { name: 'Resources', icon: Shield, href: '/dashboard/medical/resources' },
    ]
  },
  legal: {
    name: 'Legal Counsel',
    title: 'Legal Counsel Dashboard',
    navigation: [
      { name: 'Dashboard', icon: Home, href: '/dashboard/legal' },
      { name: 'Cases', icon: FileText, href: '/dashboard/legal/cases' },
      { name: 'Clients', icon: Users, href: '/dashboard/legal/clients' },
      { name: 'Documents', icon: FileText, href: '/dashboard/legal/documents' },
      { name: 'Appointments', icon: Calendar, href: '/dashboard/legal/appointments' },
    ]
  },
  counselor: {
    name: 'Counselor',
    title: 'Counselor Dashboard',
    navigation: [
      { name: 'Dashboard', icon: Home, href: '/dashboard/counselor' },
      { name: 'Clients', icon: Users, href: '/dashboard/counselor/clients' },
      { name: 'Sessions', icon: Calendar, href: '/dashboard/counselor/sessions' },
      { name: 'Progress Notes', icon: FileText, href: '/dashboard/counselor/notes' },
      { name: 'Resources', icon: Shield, href: '/dashboard/counselor/resources' },
    ]
  }
}

const DashboardLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [userMenuOpen, setUserMenuOpen] = useState(false)
  const { user, logout } = useAuth()
  const location = useLocation()

  // Get the config based on user type
  const config = userTypeConfig[user?.userType || 'survivor']

  const handleLogout = () => {
    logout()
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Mobile sidebar */}
      <div className={`fixed inset-0 z-40 lg:hidden ${sidebarOpen ? 'block' : 'hidden'}`}>
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={() => setSidebarOpen(false)} />
        <div className="fixed inset-y-0 left-0 flex w-full max-w-xs flex-col bg-white">
          <div className="flex h-16 items-center justify-between px-6">
            <div className="flex items-center">
              <div className="h-8 w-8 rounded-lg bg-purple-600 flex items-center justify-center">
                <span className="text-white font-bold">K</span>
              </div>
              <span className="ml-2 text-xl font-semibold text-gray-900">
                Kintaraa
              </span>
            </div>
            <button onClick={() => setSidebarOpen(false)}>
              <X className="h-6 w-6 text-gray-400" />
            </button>
          </div>

          <nav className="flex-1 space-y-1 px-2 py-4">
            {config.navigation.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`group flex items-center rounded-md px-2 py-2 text-sm font-medium ${
                    location.pathname === item.href
                      ? 'bg-purple-50 text-purple-600'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <Icon className="mr-3 h-5 w-5 flex-shrink-0" />
                  {item.name}
                </Link>
              )
            })}
          </nav>
        </div>
      </div>

      {/* Static sidebar for desktop */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
        <div className="flex min-h-0 flex-1 flex-col bg-white">
          <div className="flex h-16 items-center border-b border-gray-200 px-6">
            <Link to="/" className="flex items-center">
              <div className="h-8 w-8 rounded-lg bg-purple-600 flex items-center justify-center">
                <span className="text-white font-bold">K</span>
              </div>
              <span className="ml-2 text-xl font-semibold text-gray-900">
                Kintaraa
              </span>
            </Link>
          </div>

          <nav className="flex-1 space-y-1 px-2 py-4">
            {config.navigation.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`group flex items-center rounded-md px-2 py-2 text-sm font-medium ${
                    location.pathname === item.href
                      ? 'bg-purple-50 text-purple-600'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <Icon className="mr-3 h-5 w-5 flex-shrink-0" />
                  {item.name}
                </Link>
              )
            })}
          </nav>
        </div>
      </div>

      {/* Main content */}
      <div className="lg:pl-64 flex flex-col flex-1">
        <div className="sticky top-0 z-10 flex h-16 bg-white shadow">
          <button
            onClick={() => setSidebarOpen(true)}
            className="px-4 border-r border-gray-200 text-gray-500 lg:hidden"
          >
            <Menu className="h-6 w-6" />
          </button>

          <div className="flex flex-1 justify-between px-4">
            <div className="flex flex-1">
              <h1 className="text-2xl font-semibold text-gray-900 my-auto">
                {config.title}
              </h1>
            </div>

            <div className="ml-4 flex items-center gap-4">
              {/* Notifications */}
              <button className="text-gray-400 hover:text-gray-500">
                <Bell className="h-6 w-6" />
              </button>

              {/* Profile dropdown */}
              <div className="relative">
                <button
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  className="flex items-center gap-2 rounded-full bg-white text-sm focus:outline-none"
                >
                  <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center">
                    <span className="font-medium text-purple-600">
                      {user?.avatar || user?.name?.charAt(0) || 'U'}
                    </span>
                  </div>
                  <span className="hidden md:block text-sm font-medium text-gray-700">
                    {user?.name}
                  </span>
                  <ChevronDown className="h-4 w-4 text-gray-400" />
                </button>

                {userMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5">
                    <Link
                      to="/dashboard/profile"
                      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setUserMenuOpen(false)}
                    >
                      <Settings className="mr-3 h-4 w-4" />
                      Profile Settings
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="flex w-full items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      <LogOut className="mr-3 h-4 w-4" />
                      Sign out
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <main className="flex-1">
          <div className="py-6">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              {children}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default DashboardLayout