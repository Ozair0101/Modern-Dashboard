import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './components/Login';
import Dashboard from './pages/Dashboard';
import Tables from './pages/Tables';
import Billing from './pages/Billing';
import VirtualReality from './pages/VirtualReality';
import RTL from './pages/RTL';
import Profile from './pages/Profile';
import './App.css';

// Home Page Component
const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="navbar">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link to="/" className="text-2xl font-bold gradient-text">
                <i className="fas fa-cube mr-2"></i>
                ModernDash
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">
                Features
              </a>
              <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">
                About
              </a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">
                Contact
              </a>
              <Link to="/login" className="btn-primary">
                <i className="fas fa-tachometer-alt mr-2"></i>
                Admin Dashboard
              </Link>
            </div>
            <div className="md:hidden">
              <Link to="/login" className="btn-primary">
                <i className="fas fa-tachometer-alt"></i>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="homepage-hero">
        <div className="homepage-content animate-fade-in-up">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-shadow-lg">
              Modern Dashboard
              <span className="block text-4xl md:text-5xl text-blue-200 font-light mt-2">
                Built for the Future
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-2xl mx-auto leading-relaxed">
              Experience the next generation of dashboard design with beautiful UI, powerful features, and seamless performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/login" className="btn-accent btn-xl group">
                <i className="fas fa-rocket mr-2 group-hover:animate-bounce-gentle"></i>
                Launch Dashboard
                <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
              </Link>
              <a href="#features" className="btn-secondary btn-xl glass text-white border-white/30 hover:bg-white/10">
                <i className="fas fa-play mr-2"></i>
                Learn More
              </a>
            </div>
          </div>
        </div>
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-bounce-gentle"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-white/5 rounded-full animate-bounce-gentle animation-delay-400"></div>
        <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-white/5 rounded-full animate-bounce-gentle animation-delay-200"></div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Powerful Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our dashboard combines cutting-edge technology with intuitive design to deliver an exceptional user experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 feature-grid">
            <div className="feature-card animate-fade-in-up">
              <div className="feature-icon bg-gradient-to-br from-blue-500 to-purple-600 text-white">
                <i className="fas fa-bolt text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Lightning Fast</h3>
              <p className="text-gray-600 leading-relaxed">
                Built with modern technologies for optimal performance and instant loading times.
              </p>
            </div>
            
            <div className="feature-card animate-fade-in-up-delay-200">
              <div className="feature-icon bg-gradient-to-br from-green-500 to-teal-600 text-white">
                <i className="fas fa-shield-alt text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Enterprise Security</h3>
              <p className="text-gray-600 leading-relaxed">
                Advanced authentication and authorization to keep your data safe and secure.
              </p>
            </div>
            
            <div className="feature-card animate-fade-in-up-delay-400">
              <div className="feature-icon bg-gradient-to-br from-purple-500 to-pink-600 text-white">
                <i className="fas fa-mobile-alt text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Fully Responsive</h3>
              <p className="text-gray-600 leading-relaxed">
                Perfect experience across all devices - desktop, tablet, and mobile.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 stats-grid">
            <div className="text-center text-white animate-fade-in-up">
              <div className="text-4xl md:text-5xl font-bold mb-2">99.9%</div>
              <div className="text-lg text-blue-200">Uptime</div>
            </div>
            <div className="text-center text-white animate-fade-in-up-delay-200">
              <div className="text-4xl md:text-5xl font-bold mb-2">10k+</div>
              <div className="text-lg text-blue-200">Active Users</div>
            </div>
            <div className="text-center text-white animate-fade-in-up-delay-400">
              <div className="text-4xl md:text-5xl font-bold mb-2">24/7</div>
              <div className="text-lg text-blue-200">Support</div>
            </div>
            <div className="text-center text-white animate-fade-in-up-delay-600">
              <div className="text-4xl md:text-5xl font-bold mb-2">50ms</div>
              <div className="text-lg text-blue-200">Response Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of users who trust our platform for their dashboard needs. Experience the difference today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/login" className="btn-primary btn-xl group">
                <i className="fas fa-sign-in-alt mr-2"></i>
                Access Dashboard
                <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
              </Link>
              <a href="#contact" className="btn-secondary btn-xl">
                <i className="fas fa-envelope mr-2"></i>
                Contact Sales
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center mb-4">
                <i className="fas fa-cube text-2xl text-blue-400 mr-2"></i>
                <span className="text-xl font-bold">ModernDash</span>
              </div>
              <p className="text-gray-400 mb-4 max-w-md">
                The most advanced dashboard platform for modern businesses. Built with cutting-edge technology and designed for performance.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <i className="fab fa-twitter text-xl"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <i className="fab fa-facebook text-xl"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <i className="fab fa-linkedin text-xl"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <i className="fab fa-github text-xl"></i>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Roadmap</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-400">
            <p>&copy; 2024 ModernDash. All rights reserved. Built with ❤️ for developers.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          
          {/* Protected Dashboard Routes */}
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } />
          <Route path="/dashboard/tables" element={
            <ProtectedRoute>
              <Tables />
            </ProtectedRoute>
          } />
          <Route path="/dashboard/billing" element={
            <ProtectedRoute>
              <Billing />
            </ProtectedRoute>
          } />
          <Route path="/dashboard/virtual-reality" element={
            <ProtectedRoute>
              <VirtualReality />
            </ProtectedRoute>
          } />
          <Route path="/dashboard/rtl" element={
            <ProtectedRoute>
              <RTL />
            </ProtectedRoute>
          } />
          <Route path="/dashboard/profile" element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          } />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App
