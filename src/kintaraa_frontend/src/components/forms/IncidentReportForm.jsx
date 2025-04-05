// src/components/forms/IncidentReportForm.jsx
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Calendar, Clock, MapPin, AlertCircle, Shield } from 'lucide-react'
import { toast } from 'react-hot-toast'

const incidentSchema = z.object({
  incidentType: z.string().min(1, 'Please select an incident type'),
  date: z.string().min(1, 'Date is required'),
  time: z.string().optional(),
  location: z.string().min(1, 'Location is required'),
  description: z.string()
    .min(10, 'Please provide more details (at least 10 characters)')
    .max(2000, 'Description is too long'),
  immediateHelp: z.boolean(),
  witnesses: z.boolean(),
  witnessDetails: z.string().optional(),
  evidenceExists: z.boolean(),
  evidenceDescription: z.string().optional(),
  reportedToAuthorities: z.boolean(),
  authorityDetails: z.string().optional(),
  medicalAttention: z.boolean(),
  medicalDetails: z.string().optional(),
  emotionalState: z.string().optional(),
  supportNeeded: z.array(z.string()).optional(),
  safetyLevel: z.enum(['safe', 'concerned', 'unsafe']),
  confidentiality: z.boolean(),
})

const IncidentReportForm = ({ onSubmit: onSubmitProp }) => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(incidentSchema),
    defaultValues: {
      immediateHelp: false,
      witnesses: false,
      evidenceExists: false,
      reportedToAuthorities: false,
      medicalAttention: false,
      confidentiality: true,
      safetyLevel: 'concerned',
      supportNeeded: []
    }
  })

  const witnessesExist = watch('witnesses')
  const evidenceExists = watch('evidenceExists')
  const reportedToAuthorities = watch('reportedToAuthorities')
  const medicalAttention = watch('medicalAttention')

  const onSubmit = async (data) => {
    try {
      setIsSubmitting(true)
      // In a real app, you would send this to your API
      console.log('Report data:', data)
      await new Promise(resolve => setTimeout(resolve, 100)) // Simulate API call
      toast.success('Report submitted successfully')
      if (onSubmitProp) onSubmitProp(data)
    } catch (error) {
      toast.error('Failed to submit report')
    } finally {
      setIsSubmitting(false)
    }
  }

  const nextStep = () => setCurrentStep(prev => prev + 1)
  const prevStep = () => setCurrentStep(prev => prev - 1)

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      {currentStep === 1 && (
        <div className="space-y-6">
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
            <div className="flex">
              <div className="flex-shrink-0">
                <AlertCircle className="h-5 w-5 text-yellow-400" />
              </div>
              <div className="ml-3">
                <p className="text-sm text-yellow-700">
                  Your safety is our priority. If you're in immediate danger, please contact emergency services.
                  This form is encrypted and confidential.
                </p>
              </div>
            </div>
          </div>

          {/* Basic Incident Information */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Type of Incident
              </label>
              <select
                {...register('incidentType')}
                className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
              >
                <option value="">Select incident type...</option>
                <option value="physical">Physical Violence</option>
                <option value="emotional">Emotional/Psychological Abuse</option>
                <option value="sexual">Sexual Violence</option>
                <option value="stalking">Stalking</option>
                <option value="domestic">Domestic Violence</option>
                <option value="other">Other</option>
              </select>
              {errors.incidentType && (
                <p className="mt-1 text-sm text-red-600">{errors.incidentType.message}</p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Date of Incident
                </label>
                <div className="mt-1 relative">
                  <input
                    type="date"
                    {...register('date')}
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                  />
                  <Calendar className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
                {errors.date && (
                  <p className="mt-1 text-sm text-red-600">{errors.date.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Approximate Time (if known)
                </label>
                <div className="mt-1 relative">
                  <input
                    type="time"
                    {...register('time')}
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                  />
                  <Clock className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Location
              </label>
              <div className="mt-1 relative">
                <input
                  type="text"
                  {...register('location')}
                  placeholder="Enter location of incident"
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                />
                <MapPin className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
              {errors.location && (
                <p className="mt-1 text-sm text-red-600">{errors.location.message}</p>
              )}
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="button"
              onClick={nextStep}
              className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
            >
              Next Step
            </button>
          </div>
        </div>
      )}

      {currentStep === 2 && (
        <div className="space-y-6">
          {/* Detailed Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Description of Incident
            </label>
            <div className="mt-1">
              <textarea
                {...register('description')}
                rows={4}
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                placeholder="Please describe what happened..."
              />
              {errors.description && (
                <p className="mt-1 text-sm text-red-600">{errors.description.message}</p>
              )}
            </div>
            <p className="mt-2 text-sm text-gray-500">
              Share as much detail as you're comfortable with. This helps us provide better support.
            </p>
          </div>

          {/* Additional Information */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Were there any witnesses?
              </label>
              <div className="mt-2">
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    {...register('witnesses')}
                    className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                  />
                  <span className="ml-2">Yes, there were witnesses</span>
                </label>
              </div>
              {witnessesExist && (
                <div className="mt-2">
                  <textarea
                    {...register('witnessDetails')}
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                    placeholder="Please provide any details about witnesses..."
                    rows={2}
                  />
                </div>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Is there any evidence available?
              </label>
              <div className="mt-2">
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    {...register('evidenceExists')}
                    className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                  />
                  <span className="ml-2">Yes, I have evidence</span>
                </label>
              </div>
              {evidenceExists && (
                <div className="mt-2">
                  <textarea
                    {...register('evidenceDescription')}
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                    placeholder="Please describe the available evidence..."
                    rows={2}
                  />
                </div>
              )}
            </div>
          </div>

          <div className="flex justify-between">
            <button
              type="button"
              onClick={prevStep}
              className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
            >
              Previous Step
            </button>
            <button
              type="button"
              onClick={nextStep}
              className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
            >
              Next Step
            </button>
          </div>
        </div>
      )}

      {currentStep === 3 && (
        <div className="space-y-6">
          {/* Support and Safety */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Did you seek medical attention?
              </label>
              <div className="mt-2">
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    {...register('medicalAttention')}
                    className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                  />
                  <span className="ml-2">Yes, I received medical care</span>
                </label>
              </div>
              {medicalAttention && (
                <div className="mt-2">
                  <textarea
                    {...register('medicalDetails')}
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                    placeholder="Please provide details about the medical care received..."
                    rows={2}
                  />
                </div>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Was this reported to authorities?
              </label>
              <div className="mt-2">
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    {...register('reportedToAuthorities')}
                    className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                  />
                  <span className="ml-2">Yes, authorities were notified</span>
                </label>
              </div>
              {reportedToAuthorities && (
                <div className="mt-2">
                  <textarea
                    {...register('authorityDetails')}
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                    placeholder="Please provide details about the report to authorities..."
                    rows={2}
                  />
                </div>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Current Safety Level
              </label>
              <div className="mt-2 space-y-2">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    {...register('safetyLevel')}
                    value="safe"
                    className="text-purple-600 focus:ring-purple-500"
                  />
                  <span className="ml-2">I feel safe now</span>
                </label>
                <br />
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    {...register('safetyLevel')}
                    value="concerned"
                    className="text-purple-600 focus:ring-purple-500"
                  />
                  <span className="ml-2">I have some safety concerns</span>
                </label>
                <br />
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    {...register('safetyLevel')}
                    value="unsafe"
                    className="text-purple-600 focus:ring-purple-500"
                  />
                    <span className="ml-2">I currently feel unsafe</span>
                  </label>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                What kind of support would you like? (Select all that apply)
              </label>
              <div className="mt-2 space-y-2">
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    {...register('supportNeeded')}
                    value="counseling"
                    className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                  />
                  <span className="ml-2">Counseling/Emotional Support</span>
                </label>
                <br />
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    {...register('supportNeeded')}
                    value="legal"
                    className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                  />
                  <span className="ml-2">Legal Assistance</span>
                </label>
                <br />
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    {...register('supportNeeded')}
                    value="medical"
                    className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                  />
                  <span className="ml-2">Medical Care</span>
                </label>
                <br />
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    {...register('supportNeeded')}
                    value="safety"
                    className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                  />
                  <span className="ml-2">Safety Planning</span>
                </label>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Confidentiality Agreement
              </label>
              <div className="mt-2">
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    {...register('confidentiality')}
                    className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                  />
                  <span className="ml-2">I understand that this report will be handled confidentially and shared only with relevant support professionals.</span>
                </label>
                {errors.confidentiality && (
                  <p className="mt-1 text-sm text-red-600">{errors.confidentiality.message}</p>
                )}
              </div>
            </div>
          </div>

          <div className="flex justify-between">
            <button
              type="button"
              onClick={prevStep}
              className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
            >
              Previous Step
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              onClick={onSubmit}
              className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Submitting...
                </>
              ) : 'Submit Report'}
            </button>
          </div>
        </div>
      )}
    </form>
  )
}

export default IncidentReportForm