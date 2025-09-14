import React from 'react';
import DashboardLayout from '../components/DashboardLayout';

const Tables = () => {
  return (
    <DashboardLayout>
      {/* Page Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Data Tables</h1>
            <p className="text-gray-600">Manage your data with powerful tables and insights</p>
          </div>
          <div className="flex space-x-3">
            <button className="btn-secondary">
              <i className="fas fa-download mr-2"></i>
              Export
            </button>
            <button className="btn-primary">
              <i className="fas fa-plus mr-2"></i>
              Add New
            </button>
          </div>
        </div>
      </div>

      {/* Team Members Table */}
      <div className="dashboard-card mb-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-xl font-semibold text-gray-900">Team Members</h3>
            <p className="text-gray-600 text-sm">Manage your team and their account permissions</p>
          </div>
          <div className="flex items-center space-x-3">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search members..." 
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <i className="fas fa-search absolute left-3 top-3 text-gray-400"></i>
            </div>
            <button className="btn-outline">
              <i className="fas fa-filter mr-2"></i>
              Filter
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-4 px-6 font-semibold text-gray-700 uppercase text-sm tracking-wide">Author</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-700 uppercase text-sm tracking-wide">Function</th>
                <th className="text-center py-4 px-6 font-semibold text-gray-700 uppercase text-sm tracking-wide">Status</th>
                <th className="text-center py-4 px-6 font-semibold text-gray-700 uppercase text-sm tracking-wide">Employed</th>
                <th className="text-center py-4 px-6 font-semibold text-gray-700 uppercase text-sm tracking-wide">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                <td className="py-4 px-6">
                  <div className="flex items-center">
                    <img 
                      src="https://themewagon.github.io/argon-dashboard-tailwind/assets/img/team-2.jpg" 
                      className="w-10 h-10 rounded-xl mr-4 object-cover" 
                      alt="user1" 
                    />
                    <div>
                      <h6 className="font-semibold text-gray-900">John Michael</h6>
                      <p className="text-sm text-gray-500">john@creative-tim.com</p>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-6">
                  <div>
                    <h6 className="font-semibold text-gray-900">Manager</h6>
                    <p className="text-sm text-gray-500">Organization</p>
                  </div>
                </td>
                <td className="py-4 px-6 text-center">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                    Online
                  </span>
                </td>
                <td className="py-4 px-6 text-center text-sm text-gray-600">
                  23/04/18
                </td>
                <td className="py-4 px-6 text-center">
                  <button className="text-blue-600 hover:text-blue-800 font-semibold text-sm transition-colors">
                    <i className="fas fa-edit mr-1"></i>
                    Edit
                  </button>
                </td>
              </tr>
              <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                <td className="py-4 px-6">
                  <div className="flex items-center">
                    <img 
                      src="https://themewagon.github.io/argon-dashboard-tailwind/assets/img/team-3.jpg" 
                      className="w-10 h-10 rounded-xl mr-4 object-cover" 
                      alt="user2" 
                    />
                    <div>
                      <h6 className="font-semibold text-gray-900">Alexa Liras</h6>
                      <p className="text-sm text-gray-500">alexa@creative-tim.com</p>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-6">
                  <div>
                    <h6 className="font-semibold text-gray-900">Programmer</h6>
                    <p className="text-sm text-gray-500">Developer</p>
                  </div>
                </td>
                <td className="py-4 px-6 text-center">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-800">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mr-2"></div>
                    Offline
                  </span>
                </td>
                <td className="py-4 px-6 text-center text-sm text-gray-600">
                  11/01/19
                </td>
                <td className="py-4 px-6 text-center">
                  <button className="text-blue-600 hover:text-blue-800 font-semibold text-sm transition-colors">
                    <i className="fas fa-edit mr-1"></i>
                    Edit
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Projects Table */}
      <div className="dashboard-card">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-xl font-semibold text-gray-900">Projects Overview</h3>
            <p className="text-gray-600 text-sm">Track project progress and manage resources</p>
          </div>
          <button className="btn-primary">
            <i className="fas fa-plus mr-2"></i>
            New Project
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-4 px-6 font-semibold text-gray-700 uppercase text-sm tracking-wide">Project</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-700 uppercase text-sm tracking-wide">Budget</th>
                <th className="text-center py-4 px-6 font-semibold text-gray-700 uppercase text-sm tracking-wide">Status</th>
                <th className="text-center py-4 px-6 font-semibold text-gray-700 uppercase text-sm tracking-wide">Completion</th>
                <th className="text-center py-4 px-6 font-semibold text-gray-700 uppercase text-sm tracking-wide">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                <td className="py-4 px-6">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                      <i className="fas fa-code text-white"></i>
                    </div>
                    <div>
                      <h6 className="font-semibold text-gray-900">Dashboard Development</h6>
                      <p className="text-sm text-gray-500">React + Tailwind CSS</p>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-6 font-semibold text-gray-900">
                  $2,500
                </td>
                <td className="py-4 px-6 text-center">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                    Active
                  </span>
                </td>
                <td className="py-4 px-6">
                  <div className="flex items-center justify-center">
                    <span className="text-sm font-semibold text-gray-700 mr-3">75%</span>
                    <div className="w-24 bg-gray-200 rounded-full h-2">
                      <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full" style={{width: '75%'}}></div>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-6 text-center">
                  <button className="text-gray-600 hover:text-blue-600 transition-colors">
                    <i className="fas fa-cog"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Tables;