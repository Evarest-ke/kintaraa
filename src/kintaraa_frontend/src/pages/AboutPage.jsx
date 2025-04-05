// src/pages/AboutPage.jsx
import { Shield, Users, Heart, Lock } from 'lucide-react'
import { Link } from 'react-router-dom'

const AboutPage = () => {
  const values = [
    {
      icon: Shield,
      title: 'Safety First',
      description: 'Your safety and security are our top priorities in everything we do.'
    },
    {
      icon: Users,
      title: 'Community Support',
      description: 'Building a strong, supportive community of survivors and allies.'
    },
    {
      icon: Heart,
      title: 'Empathetic Care',
      description: 'Providing compassionate support and understanding at every step.'
    },
    {
      icon: Lock,
      title: 'Privacy & Trust',
      description: 'Maintaining the highest standards of privacy and confidentiality.'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-500 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white sm:text-5xl">
              About Kintaraa
            </h1>
            <p className="mt-4 text-xl text-purple-100">
              Empowering survivors on their journey to healing and resilience
            </p>
          </div>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            Our Mission
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center">
            Kintaraa is dedicated to providing a secure, supportive platform for survivors
            of gender-based violence. We aim to transform trauma into resilience by connecting
            survivors with professional support, community resources, and tools for healing.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => {
            const Icon = value.icon
            return (
              <div
                key={value.title}
                className="bg-white rounded-lg shadow-lg p-6 text-center"
              >
                <div className="mx-auto w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Impact Stats */}
        <div className="mt-12 bg-gradient-to-r from-purple-600 to-pink-500 rounded-lg shadow-lg p-8 text-white">
          <h2 className="text-2xl font-bold mb-8 text-center">Our Impact</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">5,000+</div>
              <div className="text-purple-100">Survivors Supported</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">200+</div>
              <div className="text-purple-100">Professional Partners</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">47</div>
              <div className="text-purple-100">Communities Served</div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Our Team
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-8">
            We are a dedicated team of professionals, advocates, and survivors working
            together to create positive change and support healing.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Stella Oiro',
                role: 'CEO',
                image: '/Stella.jpg',
                bio: 'Stella Oiro is the CEO, bringing leadership and expertise in advocacy and support.'
              },
              {
                name: 'Cheryl Owala',
                role: 'CTO',
                image: '/Cheryl.jpg',
                bio: 'Cheryl Owala is the CTO, focused on survivor support and innovative solutions.'
              },
              {
                name: 'Seth Athooh',
                role: 'Full-stack Engineer',
                image: '#',
                bio: 'Seth Athooh is a Full-stack Engineer, passionate about building scalable solutions and enhancing user experiences for social impact.'
              },
              {
                name: 'Raymond Madara',
                role: 'Backend Engineer',
                image: '/rcaleb.png',
                bio: 'Raymond Madara is a Backend Engineer dedicated to driving community engagement and support initiatives.'
              },
              {
                name: 'Vincent Omondi',
                role: 'Full-Stack Engineer',
                image: '/vin.png',
                bio: 'Vincent Omondi is a Full-Stack Engineer passionate about leveraging his technical expertise to lead community engagement and support programs.'
              },
              
            ].map((member) => (
              <div key={member.name} className="bg-white rounded-lg shadow-lg p-6 text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                <p className="text-purple-600 mb-2">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Join Us Section */}
        <div className="mt-12 bg-white rounded-lg shadow-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Join Our Mission</h2>
          <p className="text-lg text-gray-600 mb-6">
            Together, we can create a world where survivors feel supported, empowered, and heard.
          </p>
          <div className="flex justify-center space-x-4">
          <Link 
            to="/kintaraa-coins" 
            className="bg-purple-600 text-white px-6 py-3 rounded-md hover:bg-purple-700 transition-colors"
          >
            Get Involved
          </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage