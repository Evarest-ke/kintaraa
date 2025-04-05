// src/pages/CommunityPage.jsx
import { Users, MessageCircle, Heart, Calendar } from 'lucide-react'

const CommunityPage = () => {
  const groups = [
    {
      name: 'Survivors Support Circle',
      members: 156,
      category: 'Support Group',
      nextMeeting: 'Tomorrow at 7 PM',
      description: 'A safe space for survivors to share, support, and heal together.'
    },
    {
      name: 'Healing Through Art',
      members: 89,
      category: 'Creative Expression',
      nextMeeting: 'Saturday at 3 PM',
      description: 'Express yourself through art and creative activities in a supportive environment.'
    },
    {
      name: 'Mindfulness & Meditation',
      members: 123,
      category: 'Wellness',
      nextMeeting: 'Wednesday at 6 PM',
      description: 'Practice mindfulness and meditation techniques for emotional well-being.'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-500 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white sm:text-5xl">
              Community Support
            </h1>
            <p className="mt-4 text-xl text-purple-100">
              Connect with others on similar healing journeys
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Support Groups */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Support Groups</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {groups.map((group) => (
              <div
                key={group.name}
                className="border border-gray-200 rounded-lg p-6 hover:border-purple-500 transition-colors"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <Users className="h-6 w-6 text-purple-600" />
                    <span className="ml-2 text-sm text-gray-500">
                      {group.members} members
                    </span>
                  </div>
                  <span className="px-3 py-1 text-xs font-medium text-purple-600 bg-purple-100 rounded-full">
                    {group.category}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {group.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {group.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="h-4 w-4 mr-1" />
                    Next: {group.nextMeeting}
                  </div>
                  <button className="text-purple-600 hover:text-purple-500">
                    Join Group
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Community Features */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <MessageCircle className="h-8 w-8 text-purple-600 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Discussion Forums
            </h3>
            <p className="text-gray-600">
              Engage in meaningful discussions with community members in a safe, moderated environment.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <Heart className="h-8 w-8 text-pink-600 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Peer Support
            </h3>
            <p className="text-gray-600">
              Connect one-on-one with trained peer supporters who understand your journey.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <Calendar className="h-8 w-8 text-purple-600 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Events & Workshops
            </h3>
            <p className="text-gray-600">
              Participate in virtual and in-person events focused on healing and growth.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CommunityPage