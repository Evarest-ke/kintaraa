import { api } from './api';

export class AuthService {
  static token = null;
  static userData = null;

  static async init() {
    this.token = localStorage.getItem('token');
    this.userData = JSON.parse(localStorage.getItem('user_data') || 'null');
    
    return !!this.token;
  }

  static async login(email, password) {
    try {
      const response = await api.login({ email, password });
      
      if (response.token) {
        this.token = response.token;
        this.userData = response.user;
        
        // Cache authentication data
        localStorage.setItem('token', this.token);
        localStorage.setItem('user_data', JSON.stringify(this.userData));
        
        // Initialize tokens for new users
        try {
          await api.initializeUserTokens();
        } catch (error) {
          console.log("Token initialization error (might be already initialized):", error);
        }
        
        // Check if user is admin
        const isAdmin = this.userData.isAdmin;
        localStorage.setItem('is_admin', isAdmin);
        
        return true;
      }
      return false;
    } catch (error) {
      console.error('Login error:', error);
      return false;
    }
  }

  static async register(userData) {
    try {
      const response = await api.register(userData);
      
      if (response.token) {
        this.token = response.token;
        this.userData = response.user;
        
        // Cache authentication data
        localStorage.setItem('token', this.token);
        localStorage.setItem('user_data', JSON.stringify(this.userData));
        
        // Initialize tokens for new users
        try {
          await api.initializeUserTokens();
        } catch (error) {
          console.log("Token initialization error:", error);
        }
        
        return true;
      }
      return false;
    } catch (error) {
      console.error('Registration error:', error);
      return false;
    }
  }

  static async checkIsAdmin() {
    try {
      if (!this.token) return false;
      
      return await api.checkIsAdmin();
    } catch (error) {
      console.error("Error checking if user is admin:", error);
      return false;
    }
  }

  static async logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user_data');
    localStorage.removeItem('is_admin');
    
    this.token = null;
    this.userData = null;
    
    window.location.reload();
  }

  static async getUserProfile() {
    try {
      if (!this.token) throw new Error('Not authenticated');
      
      return await api.getUserProfile();
    } catch (error) {
      console.error('Error getting user profile:', error);
      throw error;
    }
  }

  static getUserId() {
    if (!this.userData) {
      const storedData = localStorage.getItem('user_data');
      this.userData = storedData ? JSON.parse(storedData) : null;
    }
    return this.userData?.id;
  }

  static isAuthenticated() {
    return !!this.token;
  }

  static async setUser(userData) {
    // Store user data in localStorage for persistence
    localStorage.setItem('user_data', JSON.stringify(userData));
    this.userData = userData;
    return true;
  }
  
  static getUser() {
    if (!this.userData) {
      const storedData = localStorage.getItem('user_data');
      this.userData = storedData ? JSON.parse(storedData) : null;
    }
    return this.userData;
  }
}