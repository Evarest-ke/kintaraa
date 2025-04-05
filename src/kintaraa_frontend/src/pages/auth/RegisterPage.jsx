// src/pages/auth/RegisterPage.jsx
import { useState ,useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import toast from 'react-hot-toast'
import { api } from '../../services/api'
import { AuthService } from '../../services/authService'

// Form validation schema
const registerSchema = z.object({
  userType: z.enum(['survivor', 'medical', 'legal', 'counselor', 'police', 'chv'], {
    required_error: "Please select a user type"
  }),
  fullName: z.string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must be less than 50 characters'),
  email: z.string()
    .email('Invalid email address'),
  licenseNumber: z.string().optional(),
  organization: z.string().optional(),
  terms: z.boolean().refine(value => value === true, {
    message: "You must accept the terms and conditions"
  })
}).refine(
  (data) => {
    if (data.userType !== 'survivor') {
      return !!data.licenseNumber && !!data.organization;
    }
    return true;
  },
  {
    message: "License number and organization required for professional accounts",
    path: ["licenseNumber"]
  }
);

const Register = () => {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(null)

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      userType: 'survivor',
      terms: false
    }
  })

  const userType = watch('userType')

  const handleCreateAccount = async (data) => {
    setIsLoading(true)
    setError(null)

    try {
      // Call register API
      const result = await api.registerUser({
        userType: data.userType,
        fullName: data.fullName,
        email: data.email,
        licenseNumber: data.licenseNumber ? [data.licenseNumber] : [],
        organization: data.organization ? [data.organization] : []
      });

      if (result) {
        setSuccess(true)
        toast.success('Registration successful!')
        
        // Login after successful registration
        const loginSuccess = await AuthService.login()
        if (loginSuccess) {
          // Set user with userType after successful login
          await AuthService.setUser({
            userType: data.userType,
            fullName: data.fullName,
            email: data.email,
            licenseNumber: data.licenseNumber || null,
            organization: data.organization || null
          });
          navigate(`/dashboard/${data.userType}`)
        } else {
          navigate('/login')
        }
      }
    } catch (err) {
      setError(err.message || 'Registration failed')
      toast.error('Registration failed. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-pink-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-lg">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Create Account</h2>
          <p className="mt-2 text-sm text-gray-600">
            Already have an account?{' '}
            <Link to="/login" className="font-medium text-purple-600 hover:text-purple-500">
              Sign in
            </Link>
          </p>
        </div>

        {success && (
          <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg">
            Registration successful! Redirecting...
          </div>
        )}

        {error && (
          <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-lg">
            {error}
          </div>
        )}

        {/* Form Fields */}
        <form onSubmit={handleSubmit(handleCreateAccount)} className="mt-8 space-y-6">
          {/* User Type Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              I am a
            </label>
            <select
              {...register('userType')}
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-purple-500 focus:border-purple-500 rounded-md"
            >
              <option value="survivor">Survivor</option>
              <option value="medical">Medical Professional</option>
              <option value="legal">Legal Counsel</option>
              <option value="counselor">Psychological Counselor</option>
              <option value="police">Police</option>
              <option value="chv">Community Health Volunteer</option>
            </select>
          </div>

          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              {...register('fullName')}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
            />
            {errors.fullName && (
              <p className="mt-1 text-sm text-red-600">{errors.fullName.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              {...register('email')}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
            )}
          </div>

          {/* Professional Fields */}
          {userType !== 'survivor' && (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  License Number
                </label>
                <input
                  type="text"
                  {...register('licenseNumber')}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                />
                {errors.licenseNumber && (
                  <p className="mt-1 text-sm text-red-600">{errors.licenseNumber.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Organization
                </label>
                <input
                  type="text"
                  {...register('organization')}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                />
                {errors.organization && (
                  <p className="mt-1 text-sm text-red-600">{errors.organization.message}</p>
                )}
              </div>
            </>
          )}

          {/* Terms and Conditions */}
          <div className="flex items-center">
            <input
              type="checkbox"
              {...register('terms')}
              className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
            />
            <label className="ml-2 block text-sm text-gray-900">
              I agree to the{' '}
              <a href="#" className="text-purple-600 hover:text-purple-500">
                Terms and Conditions
              </a>
            </label>
          </div>
          {errors.terms && (
            <p className="mt-1 text-sm text-red-600">{errors.terms.message}</p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
            ) : 'Create Account'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default Register;