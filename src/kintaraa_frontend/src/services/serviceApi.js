import { getBackendActor } from './api';

export const ServiceType = {
  Legal: { Legal: null },
  Medical: { Medical: null },
  Counseling: { Counseling: null },
  Police: { Police: null }
};

export const Priority = {
  Emergency: { Emergency: null },
  High: { High: null },
  Medium: { Medium: null },
  Low: { Low: null }
};

export const serviceApi = {

  getServiceRequest: async (id) => {
    try {
      const actor = await getBackendActor();
      return await actor.get_service_request(id);
    } catch (error) {
      console.error('Error getting service request:', error);
      throw error;
    }
  },
  submitServiceRequest: async (formData) => {
    try {
      const actor = await getBackendActor();
      const formattedRequest = {
        service_type: formData.serviceType,
        description: formData.description,
        priority:  { [formData.priority]: null },
        notes: formData.notes || "",
        preferred_contact: formData.preferredContact,
        contact_details: formData.contactDetails,
        date_time: formData.dateTime ? BigInt(new Date(formData.dateTime).getTime()) : BigInt(0)
      };
      
      return await actor.submit_service_request(formattedRequest);
    } catch (error) {
      console.error('Error submitting service request:', error);
      throw error;
    }
  },

  getUserServiceRequests: async (principal) => {
    try {
      const actor = await getBackendActor();
      return await actor.get_user_service_requests(principal);
    } catch (error) {
      console.error('Error getting user service requests:', error);
      throw error;
    }
  },

  scheduleAppointment: async (appointment) => {
    try {
      const actor = await getBackendActor();
      const formattedAppointment = {
        service_type: { Medical: null },
        datetime: BigInt(appointment.datetime),
        notes: appointment.notes,
        location: appointment.location
      };
      return await actor.schedule_appointment(formattedAppointment);
    } catch (error) {
      console.error("Error scheduling appointment:", error);
      throw error;
    }
  },

  getAppointment: async (id) => {
    try {
      const actor = await getBackendActor();
      return await actor.get_appointment(id);
    } catch (error) {
      console.error('Error getting appointment:', error);
      throw error;
    }
  },

  getUserAppointments: async (principal) => {
    try {
      const actor = await getBackendActor();
      return await actor.get_user_appointments(principal);
    } catch (error) {
      console.error('Error getting user appointments:', error);
      throw error;
    }
  },

  updateAppointmentStatus: async (id, status) => {
    try {
      const actor = await getBackendActor();
      return await actor.update_appointment_status({
        id,
        status
      });
    } catch (error) {
      console.error('Error updating appointment status:', error);
      throw error;
    }
  },

  updateRequestStatus: async (id, status) => {
    try {
      const actor = await getBackendActor();
      return await actor.update_request_status({
        id,
        status
      });
    } catch (error) {
      console.error('Error updating request status:', error);
      throw error;
    }
  },

  ServiceType: {
    Legal: 'legal',
    Medical: 'medical', 
    Counseling: 'counseling',
    Police: 'police'
  },

  getServiceStats: async (serviceType) => {
    try {
      const actor = await getBackendActor();
      return await actor.get_service_stats({ [serviceType]: null });
    } catch (error) {
      console.error('Error getting service stats:', error);
      throw error;
    }
  },

  getAllProviders: async () => {
    try {
      const actor = await getBackendActor();
      return await actor.get_all_providers();
    } catch (error) {
      console.error('Error getting all providers:', error);
      throw error; 
    }
  },
  addProvider: async (providerData) => {
    try {
      const actor = await getBackendActor();
      return await actor.add_provider(providerData);
    } catch (error) {
      console.error('Error adding provider:', error);
      throw error;
    }
  }
};