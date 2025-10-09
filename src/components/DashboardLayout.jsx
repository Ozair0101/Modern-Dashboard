import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const DashboardLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const menuItems = [
    { path: '/dashboard', icon: 'fas fa-chart-line', label: 'Dashboard', color: 'text-blue-500' },
    { path: '/dashboard/users', icon: 'fas fa-users', label: 'Users', color: 'text-blue-500' },
    { path: '/dashboard/skills', icon: 'fas fa-code', label: 'Skills', color: 'text-green-500' },
    { path: '/dashboard/projects', icon: 'fas fa-folder', label: 'Projects', color: 'text-purple-500' },
    { path: '/dashboard/experiences', icon: 'fas fa-briefcase', label: 'Experiences', color: 'text-orange-500' },
    { path: '/dashboard/educations', icon: 'fas fa-graduation-cap', label: 'Educations', color: 'text-red-500' },
    { path: '/dashboard/social-links', icon: 'fas fa-link', label: 'Social Links', color: 'text-indigo-500' },
    { path: '/dashboard/messages', icon: 'fas fa-envelope', label: 'Messages', color: 'text-yellow-500' },
    { path: '/dashboard/testimonials', icon: 'fas fa-comment', label: 'Testimonials', color: 'text-pink-500' },
    { path: '/dashboard/tables', icon: 'fas fa-table', label: 'Tables', color: 'text-orange-500' },
    { path: '/dashboard/virtual-reality', icon: 'fas fa-cube', label: 'Virtual Reality', color: 'text-cyan-500' },
  ];

  const accountItems = [
    { path: '/dashboard/profile', icon: 'fas fa-user', label: 'Profile', color: 'text-gray-600' },
  ];

  const isActiveRoute = (path) => {
    return location.pathname === path;
  };

  const getCurrentPageTitle = () => {
    const path = location.pathname;
    if (path === '/dashboard') return 'Dashboard';
    
    // Map paths to titles
    const pathTitleMap = {
      '/dashboard/users': 'Users',
      '/dashboard/skills': 'Skills',
      '/dashboard/projects': 'Projects',
      '/dashboard/experiences': 'Experiences',
      '/dashboard/educations': 'Educations',
      '/dashboard/social-links': 'Social Links',
      '/dashboard/messages': 'Messages',
      '/dashboard/testimonials': 'Testimonials'
    };
    
    if (pathTitleMap[path]) {
      return pathTitleMap[path];
    }
    
    return path.split('/').pop()?.replace('-', ' ').split(' ').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ') || 'Dashboard';
  };

  return (
    <div className="dashboard-layout">
      {/* Sidebar */}
      <aside className={`dashboard-sidebar ${
        sidebarOpen ? 'mobile-open' : 'mobile-hidden'
      } lg:translate-x-0`}>
        {/* Sidebar Header */}
        <div className="p-6 border-b border-gray-100">
          <Link to="/dashboard" className="flex items-center group">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
              <i className="fas fa-cube text-white text-sm"></i>
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900">Portfolio Admin</h2>
              <p className="text-xs text-gray-500">Management Panel</p>
            </div>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2 custom-scrollbar overflow-y-auto">
          {/* Main Menu */}
          <div className="space-y-1">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`dashboard-nav-item group ${
                  isActiveRoute(item.path) ? 'active bg-blue-50 text-blue-700' : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <i className={`dashboard-nav-icon ${item.icon} ${
                  isActiveRoute(item.path) ? 'text-blue-600' : item.color
                } group-hover:scale-110 transition-transform`}></i>
                <span className="font-medium">{item.label}</span>
                {isActiveRoute(item.path) && (
                  <div className="ml-auto w-2 h-2 bg-blue-600 rounded-full"></div>
                )}
              </Link>
            ))}
          </div>

          {/* Account Section */}
          <div className="pt-6">
            <h3 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
              Account
            </h3>
            <div className="space-y-1">
              {accountItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`dashboard-nav-item group ${
                    isActiveRoute(item.path) ? 'active bg-blue-50 text-blue-700' : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <i className={`dashboard-nav-icon ${item.icon} ${
                    isActiveRoute(item.path) ? 'text-blue-600' : item.color
                  } group-hover:scale-110 transition-transform`}></i>
                  <span className="font-medium">{item.label}</span>
                </Link>
              ))}

              <button
                onClick={handleLogout}
                className="dashboard-nav-item group text-gray-600 hover:bg-red-50 hover:text-red-600 w-full text-left"
              >
                <i className="dashboard-nav-icon fas fa-sign-out-alt text-red-500 group-hover:scale-110 transition-transform"></i>
                <span className="font-medium">Logout</span>
              </button>
            </div>
          </div>
        </nav>

        {/* Sidebar Footer */}
        <div className="p-4 border-t border-gray-100">
          <div className="flex items-center p-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-semibold mr-3">
              {user?.name?.charAt(0) || 'A'}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">
                {user?.name || 'Admin User'}
              </p>
              <p className="text-xs text-gray-500 truncate">
                {user?.email || 'admin@dashboard.com'}
              </p>
            </div>
          </div>
        </div>
      </aside>

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Main Content */}
      <div className="dashboard-content">
        {/* Header */}
        <header className="dashboard-header shadow-sm">
          <div className="flex items-center">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 mr-3"
            >
              <i className="fas fa-bars text-lg"></i>
            </button>
            
            <div>
              <nav className="flex text-sm text-gray-500 mb-1" aria-label="Breadcrumb">
                <Link to="/dashboard" className="hover:text-gray-700 transition-colors">
                  Dashboard
                </Link>
                {location.pathname !== '/dashboard' && (
                  <>
                    <span className="mx-2">/</span>
                    <span className="text-gray-900 font-medium">{getCurrentPageTitle()}</span>
                  </>
                )}
              </nav>
              <h1 className="text-2xl font-bold text-gray-900">{getCurrentPageTitle()}</h1>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="hidden md:block relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <i className="fas fa-search text-gray-400"></i>
              </div>
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm w-64"
              />
            </div>

            {/* Notifications */}
            <button className="relative p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
              <i className="fas fa-bell text-lg"></i>
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

            {/* User Menu */}
            <div className="flex items-center space-x-3">
              <div className="hidden md:block text-right">
                <p className="text-sm font-medium text-gray-900">
                  {user?.name || 'Admin User'}
                </p>
                <p className="text-xs text-gray-500">
                  {user?.role || 'Administrator'}
                </p>
              </div>
              <button 
                onClick={handleLogout}
                className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-semibold hover:scale-105 transition-transform"
              >
                {user?.name?.charAt(0) || 'A'}
              </button>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="dashboard-page custom-scrollbar">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;