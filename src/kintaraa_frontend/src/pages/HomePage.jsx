// src/pages/HomePage.jsx
import { Link } from 'react-router-dom'
import { Shield, Heart, Users, FileText, Activity } from 'lucide-react'

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-pink-500 rounded-lg flex items-center justify-center text-white font-bold">
                K
              </div>
              <span className="ml-2 text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text">
                Kintaraa
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                to="/login"
                className="text-gray-600 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                Sign In
              </Link>
              <Link
                to="/register"
                className="bg-purple-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-purple-700"
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      </nav>

{/* Hero Section */}
<div className="relative min-h-screen">
  {/* Background Image */}
  <div 
    className="absolute inset-0 z-0 bg-cover bg-no-repeat"
    style={{
      backgroundImage: "url('../../kintaraa.jpg')",
      backgroundPosition: "center 40%",
      filter: "brightness(1.2)"
    }}
  >
    {/* Overlay for better text readability */}
    <div className="absolute inset-0 bg-black/60"></div>
  </div>
  
  {/* Content */}
  <div className="relative z-10 flex flex-col justify-center items-center min-h-screen px-4 text-center">
    <div className="max-w-7xl mx-auto">
      <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
        <span className="block">Empowering Victims of</span>
        <span className="block text-purple-300">Gender Based Violence</span>
      </h1>
      
      <p className="mt-6 max-w-md mx-auto text-base text-gray-200 sm:text-lg md:text-xl md:max-w-3xl">
        Transforming trauma into resilience through secure reporting and holistic professional support.
        Your journey to healing starts here.
      </p>
      
      <div className="mt-10 flex justify-center gap-4">
        <Link
          to="/register"
          className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 md:text-lg transition duration-150 ease-in-out"
        >
          Get Started
        </Link>
        <Link
          to="/about"
          className="px-8 py-3 border border-gray-300 text-base font-medium rounded-md text-purple-600 bg-white hover:bg-gray-50 md:text-lg transition duration-150 ease-in-out"
        >
          Learn More
        </Link>
      </div>
    </div>
  </div>
</div>

      {/* Impact Analytics Section */}
      <div className="py-10 bg-gradient-to-br from-purple-900 to-pink-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Impact</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4">Support Provided</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Lives Impacted</span>
                  <span className="text-2xl font-bold">5,000+</span>
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

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4">Services Provided</h3>
              <div className="space-y-4">
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

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4">Community Growth</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Active Communities</span>
                  <span className="text-2xl font-bold">47</span>
                </div>
                <div className="space-y-3">
                  <div className="bg-white/10 p-3 rounded-lg">
                    <div className="flex justify-between">
                      <span>Support Groups</span>
                      <span className="font-semibold">24 Active</span>
                    </div>
                  </div>
                  <div className="bg-white/10 p-3 rounded-lg">
                    <div className="flex justify-between">
                      <span>Volunteers</span>
                      <span className="font-semibold">156 Members</span>
                    </div>
                  </div>
                  <div className="bg-white/10 p-3 rounded-lg">
                    <div className="flex justify-between">
                      <span>Partners</span>
                      <span className="font-semibold">32 Organizations</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Features Section */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 transform transition duration-500 hover:scale-105">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Secure Reporting</h3>
              <p className="text-gray-600">Anonymous and secure incident reporting with end-to-end encryption.</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 transform transition duration-500 hover:scale-105">
              <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-pink-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Professional Support</h3>
              <p className="text-gray-600">Access to verified medical, legal, and psychological support services.</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 transform transition duration-500 hover:scale-105">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Community Network</h3>
              <p className="text-gray-600">Connect with a supportive community of survivors and allies.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage