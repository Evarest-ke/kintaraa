import * as React from 'react';
import { createContext, useContext, useState, useEffect } from 'react';
import { AuthService } from '../services/authService';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    initializeAuth();
  }, []);

  const initializeAuth = async () => {
    try {
      console.log("Starting auth initialization");
      const isAuthenticated = await AuthService.init();
      console.log("Is authenticated:", isAuthenticated);
      
      if (isAuthenticated) {
        const userData = AuthService.getUser();
        console.log("User data:", userData);
        
        setUser(userData);
        setIsAdmin(userData?.isAdmin || false);
      }
    } catch (error) {
      console.error('Auth initialization failed:', error);
    } finally {
      setLoading(false);
    }
  };

  const login = async (email, password) => {
    try {
      console.log("Starting login process");
      const success = await AuthService.login(email, password);
      console.log("Login success:", success);
      
      if (success) {
        const userData = AuthService.getUser();
        console.log("Got user data:", userData);
        
        setUser(userData);
        setIsAdmin(userData?.isAdmin || false);
        
        return true;
      }
      return false;
    } catch (error) {
      console.error('Login failed:', error);
      return false;
    }
  };

  const register = async (userData) => {
    try {
      const success = await AuthService.register(userData);
      
      if (success) {
        const user = AuthService.getUser();
        setUser(user);
        setIsAdmin(user?.isAdmin || false);
        
        return true;
      }
      return false;
    } catch (error) {
      console.error('Registration failed:', error);
      return false;
    }
  };

  const logout = async () => {
    try {
      await AuthService.logout();
      setUser(null);
      setIsAdmin(false);
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const value = {
    user,
    isAdmin,
    loading,
    login,
    register,
    logout,
  };
  console.log("AuthProvider - User:", user);
  console.log("AuthProvider - IsAdmin:", isAdmin);
  console.log("AuthProvider - Loading:", loading);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
      </div>
    );
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};