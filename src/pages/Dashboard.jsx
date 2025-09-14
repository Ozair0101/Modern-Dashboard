import React from 'react';
import DashboardLayout from '../components/DashboardLayout';

const Dashboard = () => {
  return (
    <DashboardLayout>
      {/* Welcome Banner */}
      <div className="mb-8 p-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">Welcome back, Admin! 👋</h2>
            <p className="text-blue-100">Here's what's happening with your dashboard today.</p>
          </div>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
        <div className="dashboard-card group hover:scale-105">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 uppercase tracking-wide">Today's Revenue</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">$53,430</p>
              <div className="flex items-center mt-2">
                <span className="text-sm font-medium text-emerald-600 flex items-center">
                  <i className="fas fa-arrow-up mr-1"></i>
                  +12.5%
                </span>
                <span className="text-sm text-gray-500 ml-2">vs yesterday</span>
              </div>
            </div>
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
              <i className="fas fa-dollar-sign text-white"></i>
            </div>
          </div>
        </div>

        <div className="dashboard-card group hover:scale-105">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 uppercase tracking-wide">Total Users</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">12,345</p>
              <div className="flex items-center mt-2">
                <span className="text-sm font-medium text-emerald-600 flex items-center">
                  <i className="fas fa-arrow-up mr-1"></i>
                  +8.2%
                </span>
                <span className="text-sm text-gray-500 ml-2">this week</span>
              </div>
            </div>
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
              <i className="fas fa-users text-white"></i>
            </div>
          </div>
        </div>

        <div className="dashboard-card group hover:scale-105">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 uppercase tracking-wide">New Orders</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">2,847</p>
              <div className="flex items-center mt-2">
                <span className="text-sm font-medium text-orange-600 flex items-center">
                  <i className="fas fa-arrow-down mr-1"></i>
                  -3.1%
                </span>
                <span className="text-sm text-gray-500 ml-2">vs last month</span>
              </div>
            </div>
            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
              <i className="fas fa-shopping-cart text-white"></i>
            </div>
          </div>
        </div>

        <div className="dashboard-card group hover:scale-105">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 uppercase tracking-wide">Performance</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">94.2%</p>
              <div className="flex items-center mt-2">
                <span className="text-sm font-medium text-emerald-600 flex items-center">
                  <i className="fas fa-arrow-up mr-1"></i>
                  +2.4%
                </span>
                <span className="text-sm text-gray-500 ml-2">uptime</span>
              </div>
            </div>
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
              <i className="fas fa-chart-bar text-white"></i>
            </div>
          </div>
        </div>
      </div>

      {/* Charts Placeholder */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="dashboard-card">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Revenue Analytics</h3>
          <div className="h-64 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <i className="fas fa-chart-area text-4xl text-blue-400 mb-4"></i>
              <p className="text-gray-600">Revenue Chart Placeholder</p>
            </div>
          </div>
        </div>
        
        <div className="dashboard-card">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance Metrics</h3>
          <div className="h-64 bg-gradient-to-br from-green-50 to-blue-50 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <i className="fas fa-chart-bar text-4xl text-green-400 mb-4"></i>
              <p className="text-gray-600">Performance Chart Placeholder</p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="dashboard-card">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <button className="btn-primary btn-lg group">
            <i className="fas fa-plus mr-2 group-hover:scale-110 transition-transform"></i>
            Add User
          </button>
          <button className="btn-secondary btn-lg group">
            <i className="fas fa-download mr-2 group-hover:scale-110 transition-transform"></i>
            Export Data
          </button>
          <button className="btn-secondary btn-lg group">
            <i className="fas fa-cog mr-2 group-hover:scale-110 transition-transform"></i>
            Settings
          </button>
          <button className="btn-accent btn-lg group">
            <i className="fas fa-chart-line mr-2 group-hover:scale-110 transition-transform"></i>
            Analytics
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
