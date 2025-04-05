// src/components/dashboard/ImpactAnalytics.jsx
import { BarChart2, Users, Map } from 'lucide-react'

const ImpactAnalytics = () => {
  return (
    <div className="py-12 bg-gradient-to-br from-purple-900 to-pink-900 text-white rounded-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-center mb-8">Impact Analytics</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Reports Analytics */}
          <div className="bg-white/10 rounded-2xl p-6">
            <div className="flex items-center mb-4">
              <BarChart2 className="h-6 w-6 text-purple-400" />
              <h3 className="ml-2 text-xl font-semibold text-white">Report Statistics</h3>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span>Total Reports</span>
                <span className="text-2xl font-bold">1,234</span>
              </div>
              <div className="h-2 bg-white/20 rounded-full">
                <div className="h-full w-3/4 bg-purple-500 rounded-full"></div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="text-sm opacity-80">This Month</span>
                  <p className="text-lg font-semibold">+156</p>
                </div>
                <div>
                  <span className="text-sm opacity-80">Growth</span>
                  <p className="text-lg font-semibold text-green-400">+12.3%</p>
                </div>
              </div>
            </div>
          </div>

          {/* Services Impact */}
          <div className="bg-white/10 rounded-2xl p-6">
            <div className="flex items-center mb-4">
              <Users className="h-6 w-6 text-pink-400" />
              <h3 className="ml-2 text-xl font-semibold text-white">Service Usage</h3>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span>Active Cases</span>
                <span className="text-2xl font-bold">847</span>
              </div>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Legal Aid</span>
                    <span>35%</span>
                  </div>
                  <div className="h-2 bg-white/20 rounded-full">
                    <div className="h-full w-1/3 bg-pink-500 rounded-full"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Medical Support</span>
                    <span>28%</span>
                  </div>
                  <div className="h-2 bg-white/20 rounded-full">
                    <div className="h-full w-1/4 bg-purple-500 rounded-full"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Counseling</span>
                    <span>37%</span>
                  </div>
                  <div className="h-2 bg-white/20 rounded-full">
                    <div className="h-full w-1/3 bg-indigo-500 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Regional Data */}
          <div className="bg-white/10 rounded-2xl p-6">
            <div className="flex items-center mb-4">
              <Map className="h-6 w-6 text-indigo-400" />
              <h3 className="ml-2 text-xl font-semibold text-white">Regional Impact</h3>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span>Total Regions</span>
                <span className="text-2xl font-bold">47</span>
              </div>
              <div className="space-y-3">
                <div className="bg-white/10 p-3 rounded-lg">
                  <div className="flex justify-between">
                    <span>Nairobi</span>
                    <span className="font-semibold">324 cases</span>
                  </div>
                </div>
                <div className="bg-white/10 p-3 rounded-lg">
                  <div className="flex justify-between">
                    <span>Mombasa</span>
                    <span className="font-semibold">156 cases</span>
                  </div>
                </div>
                <div className="bg-white/10 p-3 rounded-lg">
                  <div className="flex justify-between">
                    <span>Kisumu</span>
                    <span className="font-semibold">98 cases</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ImpactAnalytics