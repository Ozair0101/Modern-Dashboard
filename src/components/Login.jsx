import React, { useState } from 'react';
import { Navigate, Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login, isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    console.log('Form submitted with:', { email, password }); // Debug log
    const result = await login(email, password);
    
    if (!result.success) {
      setError(result.error);
    }
    
    setLoading(false);
  };

  return (
    <div className="login-container">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full opacity-20 animate-bounce-gentle"></div>
        <div className="absolute -bottom-40 -left-32 w-96 h-96 bg-gradient-to-tr from-purple-400 to-pink-600 rounded-full opacity-20 animate-bounce-gentle animation-delay-400"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-blue-300 to-green-400 rounded-full opacity-10 animate-bounce-gentle animation-delay-200"></div>
      </div>

      <div className="relative z-10 w-full max-w-md">
        {/* Navigation */}
        <div className="mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors group"
          >
            <i className="fas fa-arrow-left mr-2 group-hover:-translate-x-1 transition-transform"></i>
            Back to Home
          </Link>
        </div>

        {/* Login Card */}
        <div className="login-card animate-fade-in-up">
          {/* Header */}
          <div className="text-center">
            <div className="mx-auto h-16 w-16 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white mb-4">
              <i className="fas fa-shield-alt text-2xl"></i>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h2>
            <p className="text-gray-600 mb-8">Sign in to access your dashboard</p>
          </div>

          {/* Demo Credentials */}
          <div className="mb-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg animate-fade-in-up-delay-200">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <i className="fas fa-info-circle text-blue-500 mr-2"></i>
                <span className="text-sm font-medium text-blue-800">Demo Credentials</span>
              </div>
              <button 
                type="button"
                onClick={() => {
                  setEmail('admin@dashboard.com');
                  setPassword('admin123');
                }}
                className="px-3 py-1 text-xs bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
              >
                Auto Fill
              </button>
            </div>
            <div className="text-sm text-blue-700 space-y-1">
              <div className="flex items-center">
                <i className="fas fa-envelope w-4 mr-2"></i>
                <code className="bg-blue-100 px-2 py-1 rounded text-xs">admin@dashboard.com</code>
              </div>
              <div className="flex items-center">
                <i className="fas fa-key w-4 mr-2"></i>
                <code className="bg-blue-100 px-2 py-1 rounded text-xs">admin123</code>
              </div>
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg animate-fade-in-up">
              <div className="flex items-center">
                <i className="fas fa-exclamation-triangle text-red-500 mr-2"></i>
                <span className="text-sm text-red-600">{error}</span>
              </div>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="animate-fade-in-up-delay-400">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <i className="fas fa-envelope text-gray-400"></i>
                </div>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="input pl-10 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div className="animate-fade-in-up-delay-600">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <i className="fas fa-lock text-gray-400"></i>
                </div>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="input pl-10 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between animate-fade-in-up-delay-600">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded transition-colors"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                  Remember me
                </label>
              </div>
              <a href="#" className="text-sm text-blue-600 hover:text-blue-500 transition-colors">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full btn-primary btn-lg group animate-fade-in-up-delay-600 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden"
            >
              {loading ? (
                <>
                  <div className="loading-spinner mr-2"></div>
                  Signing in...
                </>
              ) : (
                <>
                  <i className="fas fa-sign-in-alt mr-2 group-hover:scale-110 transition-transform"></i>
                  Sign In
                  <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
                </>
              )}
            </button>
          </form>

          {/* Footer */}
          <div className="mt-8 text-center animate-fade-in-up-delay-600">
            <p className="text-sm text-gray-600">
              Don't have an account?{' '}
              <a href="#" className="font-medium text-blue-600 hover:text-blue-500 transition-colors">
                Contact Administrator
              </a>
            </p>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-8 text-center animate-fade-in-up-delay-600">
          <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
            <div className="flex items-center">
              <i className="fas fa-shield-alt text-green-500 mr-1"></i>
              Secure
            </div>
            <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
            <div className="flex items-center">
              <i className="fas fa-lock text-blue-500 mr-1"></i>
              Encrypted
            </div>
            <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
            <div className="flex items-center">
              <i className="fas fa-clock text-purple-500 mr-1"></i>
              24/7 Access
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;