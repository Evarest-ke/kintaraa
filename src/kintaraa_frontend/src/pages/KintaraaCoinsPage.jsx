// src/pages/KintaraaCoinsPage.jsx
import React from 'react'
import { Shield, Coins, HeartHandshake, TrendingUp } from 'lucide-react'
import { Link } from 'react-router-dom'

const KintaraaCoinsPage = () => {
  const benefits = [
    {
      icon: HeartHandshake,
      title: 'Support Survivors',
      description: '40% of all investments directly support GBV survivors through counseling, legal aid, and rehabilitation programs.'
    },
    {
      icon: TrendingUp,
      title: 'Growth Potential',
      description: 'Invest in a rapidly growing platform while contributing to meaningful social change.'
    },
    {
      icon: Shield,
      title: 'Secure Investment',
      description: 'Built on secure blockchain technology ensuring transparency and security of your investment.'
    },
    {
      icon: Coins,
      title: 'Token Utility',
      description: 'Use Kintaraa Coins for platform services and exclusive community benefits.'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-500 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white sm:text-5xl">
              Kintaraa Coins
            </h1>
            <p className="mt-4 text-xl text-purple-100">
              Invest in Change: Supporting Survivors Through Digital Innovation
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Investment Impact */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            Impact Investment
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center">
            When you invest in Kintaraa Coins, you're not just purchasing digital assets - 
            you're directly supporting survivors of gender-based violence. 40% of all investments 
            go directly to support services, while maintaining the potential for investment growth.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 mb-12">
          {benefits.map((benefit) => {
            const Icon = benefit.icon
            return (
              <div
                key={benefit.title}
                className="bg-white rounded-lg shadow-lg p-6 text-center"
              >
                <div className="mx-auto w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Investment Options */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Investment Options
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Starter Package</h3>
              <p className="text-4xl font-bold text-purple-600 mb-4">100 KTC</p>
              <p className="text-gray-600 mb-6">Perfect for beginning your journey of impact investment</p>
              <button className="bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700 transition-colors w-full">
                Buy Now
              </button>
            </div>
            <div className="border rounded-lg p-6 text-center hover:shadow-lg transition-shadow bg-purple-50">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Impact Package</h3>
              <p className="text-4xl font-bold text-purple-600 mb-4">500 KTC</p>
              <p className="text-gray-600 mb-6">Most popular option for meaningful impact</p>
              <button className="bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700 transition-colors w-full">
                Buy Now
              </button>
            </div>
            <div className="border rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Change Maker</h3>
              <p className="text-4xl font-bold text-purple-600 mb-4">1000 KTC</p>
              <p className="text-gray-600 mb-6">Maximize your impact and investment potential</p>
              <button className="bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700 transition-colors w-full">
                Buy Now
              </button>
            </div>
          </div>
        </div>

        {/* Token Distribution */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-500 rounded-lg shadow-lg p-8 text-white mb-12">
          <h2 className="text-2xl font-bold mb-8 text-center">Token Distribution</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">40%</div>
              <div className="text-purple-100">Survivor Support Services</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">35%</div>
              <div className="text-purple-100">Platform Development</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">25%</div>
              <div className="text-purple-100">Community Growth</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Make a Difference?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join us in creating lasting change. Your investment in Kintaraa Coins helps build 
            a stronger support system for survivors while offering you the opportunity for growth.
          </p>
          <Link 
            to="/register" 
            className="bg-purple-600 text-white px-8 py-3 rounded-md hover:bg-purple-700 transition-colors inline-block"
          >
            Support A Survivor Today
          </Link>
        </div>
      </div>
    </div>
  )
}

export default KintaraaCoinsPage