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
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-gradient-to-br from-primary-400 to-accent-600 rounded-full opacity-20 animate-bounce-gentle"></div>
        <div className="absolute -bottom-40 -left-32 w-96 h-96 bg-gradient-to-tr from-accent-400 to-primary-600 rounded-full opacity-20 animate-bounce-gentle animation-delay-400"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-primary-300 to-accent-400 rounded-full opacity-10 animate-bounce-gentle animation-delay-200"></div>
      </div>

      <div className="relative z-10 w-full max-w-md">
        {/* Navigation */}
        <div className="mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center text-white/80 hover:text-white transition-colors group"
          >
            <i className="fas fa-arrow-left mr-2 group-hover:-translate-x-1 transition-transform"></i>
            Back to Home
          </Link>
        </div>

        {/* Login Card */}
        <div className="login-card animate-fade-in-up">
          {/* Header */}
          <div className="text-center">
            <div className="mx-auto h-16 w-16 flex items-center justify-center rounded-full bg-gradient-to-r from-primary-500 to-accent-600 text-white mb-4">
              <i className="fas fa-shield-alt text-2xl"></i>
            </div>
            <h2 className="text-3xl font-bold text-white mb-2">Welcome Back</h2>
            <p className="text-white/80 mb-8">Sign in to access your dashboard</p>
          </div>

          {/* Demo Credentials */}
          <div className="mb-6 p-4 bg-theme-light/40 border border-border rounded-lg animate-fade-in-up-delay-200">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <i className="fas fa-info-circle text-primary-400 mr-2"></i>
                <span className="text-sm font-medium text-white">Demo Credentials</span>
              </div>
              <button 
                type="button"
                onClick={() => {
                  setEmail('dev@dev.com');
                  setPassword('dev');
                }}
                className="px-3 py-1 text-xs bg-primary-500 text-white rounded hover:bg-primary-600 transition-colors"
              >
                Auto Fill
              </button>
            </div>
            <div className="text-sm text-white/80 space-y-1">
              <div className="flex items-center">
                <i className="fas fa-envelope w-4 mr-2"></i>
                <code className="bg-theme-light/60 px-2 py-1 rounded text-xs text-white">dev@dev.com</code>
              </div>
              <div className="flex items-center">
                <i className="fas fa-key w-4 mr-2"></i>
                <code className="bg-theme-light/60 px-2 py-1 rounded text-xs text-white">dev</code>
              </div>
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-lg animate-fade-in-up">
              <div className="flex items-center">
                <i className="fas fa-exclamation-triangle text-red-400 mr-2"></i>
                <span className="text-sm text-red-200">{error}</span>
              </div>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="animate-fade-in-up-delay-400">
              <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <i className="fas fa-envelope text-white/40"></i>
                </div>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full pl-10 pr-3 py-3 bg-theme-light/40 border border-border rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div className="animate-fade-in-up-delay-600">
              <label htmlFor="password" className="block text-sm font-medium text-white mb-2">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <i className="fas fa-lock text-white/40"></i>
                </div>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full pl-10 pr-3 py-3 bg-theme-light/40 border border-border rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
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
                  className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-border bg-theme-light/40 rounded transition-colors"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-white/80">
                  Remember me
                </label>
              </div>
              <a href="#" className="text-sm text-primary-400 hover:text-primary-300 transition-colors">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full btn btn-primary py-3 group animate-fade-in-up-delay-600 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden"
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
            <p className="text-sm text-white/80">
              Don't have an account?{' '}
              <a href="#" className="font-medium text-primary-400 hover:text-primary-300 transition-colors">
                Contact Administrator
              </a>
            </p>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-8 text-center animate-fade-in-up-delay-600">
          <div className="flex items-center justify-center space-x-4 text-sm text-white/60">
            <div className="flex items-center">
              <i className="fas fa-shield-alt text-green-400 mr-1"></i>
              Secure
            </div>
            <div className="w-1 h-1 bg-white/30 rounded-full"></div>
            <div className="flex items-center">
              <i className="fas fa-lock text-primary-400 mr-1"></i>
              Encrypted
            </div>
            <div className="w-1 h-1 bg-white/30 rounded-full"></div>
            <div className="flex items-center">
              <i className="fas fa-clock text-accent-400 mr-1"></i>
              24/7 Access
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;