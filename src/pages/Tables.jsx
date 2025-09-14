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
      {/* Authors Table */}
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
              <div className="p-0 overflow-x-auto">
                <table className="items-center w-full mb-0 align-top border-collapse dark:border-white/40 text-slate-500">
                  <thead className="align-bottom">
                    <tr>
                      <th className="px-6 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Author</th>
                      <th className="px-6 py-3 pl-2 font-bold text-left uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Function</th>
                      <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Status</th>
                      <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Employed</th>
                      <th className="px-6 py-3 font-semibold capitalize align-middle bg-transparent border-b border-collapse border-solid shadow-none dark:border-white/40 dark:text-white tracking-none whitespace-nowrap text-slate-400 opacity-70"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                        <div className="flex px-2 py-1">
                          <div>
                            <img src="https://themewagon.github.io/argon-dashboard-tailwind/assets/img/team-2.jpg" className="inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-in-out h-9 w-9 rounded-xl" alt="user1" />
                          </div>
                          <div className="flex flex-col justify-center">
                            <h6 className="mb-0 text-sm leading-normal dark:text-white">John Michael</h6>
                            <p className="mb-0 text-xs leading-tight dark:text-white dark:opacity-80 text-slate-400">john@creative-tim.com</p>
                          </div>
                        </div>
                      </td>
                      <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                        <div className="flex flex-col justify-center">
                          <h6 className="mb-0 text-sm leading-normal dark:text-white">Manager</h6>
                          <p className="mb-0 text-xs leading-tight dark:text-white dark:opacity-80 text-slate-400">Organization</p>
                        </div>
                      </td>
                      <td className="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                        <span className="bg-gradient-to-tl from-emerald-600 to-lime-400 px-2.5 text-xs rounded-1.8 py-1.4 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white">Online</span>
                      </td>
                      <td className="p-2 text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                        <span className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400">23/04/18</span>
                      </td>
                      <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                        <a href="#" className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400"> Edit </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                        <div className="flex px-2 py-1">
                          <div>
                            <img src="https://themewagon.github.io/argon-dashboard-tailwind/assets/img/team-3.jpg" className="inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-in-out h-9 w-9 rounded-xl" alt="user2" />
                          </div>
                          <div className="flex flex-col justify-center">
                            <h6 className="mb-0 text-sm leading-normal dark:text-white">Alexa Liras</h6>
                            <p className="mb-0 text-xs leading-tight dark:text-white dark:opacity-80 text-slate-400">alexa@creative-tim.com</p>
                          </div>
                        </div>
                      </td>
                      <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                        <div className="flex flex-col justify-center">
                          <h6 className="mb-0 text-sm leading-normal dark:text-white">Programator</h6>
                          <p className="mb-0 text-xs leading-tight dark:text-white dark:opacity-80 text-slate-400">Developer</p>
                        </div>
                      </td>
                      <td className="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                        <span className="bg-gradient-to-tl from-slate-600 to-slate-300 px-2.5 text-xs rounded-1.8 py-1.4 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white">Offline</span>
                      </td>
                      <td className="p-2 text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                        <span className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400">11/01/19</span>
                      </td>
                      <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                        <a href="#" className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400"> Edit </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                        <div className="flex px-2 py-1">
                          <div>
                            <img src="https://themewagon.github.io/argon-dashboard-tailwind/assets/img/team-4.jpg" className="inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-in-out h-9 w-9 rounded-xl" alt="user3" />
                          </div>
                          <div className="flex flex-col justify-center">
                            <h6 className="mb-0 text-sm leading-normal dark:text-white">Laurent Perrier</h6>
                            <p className="mb-0 text-xs leading-tight dark:text-white dark:opacity-80 text-slate-400">laurent@creative-tim.com</p>
                          </div>
                        </div>
                      </td>
                      <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                        <div className="flex flex-col justify-center">
                          <h6 className="mb-0 text-sm leading-normal dark:text-white">Executive</h6>
                          <p className="mb-0 text-xs leading-tight dark:text-white dark:opacity-80 text-slate-400">Projects</p>
                        </div>
                      </td>
                      <td className="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                        <span className="bg-gradient-to-tl from-emerald-600 to-lime-400 px-2.5 text-xs rounded-1.8 py-1.4 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white">Online</span>
                      </td>
                      <td className="p-2 text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                        <span className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400">19/09/17</span>
                      </td>
                      <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                        <a href="#" className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400"> Edit </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Table */}
      <div className="flex flex-wrap -mx-3">
        <div className="flex-none w-full max-w-full px-3">
          <div className="relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
            <div className="p-6 pb-0 mb-0 border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
              <h6 className="dark:text-white">Projects table</h6>
            </div>
            <div className="flex-auto px-0 pt-0 pb-2">
              <div className="p-0 overflow-x-auto">
                <table className="items-center w-full mb-0 align-top border-collapse dark:border-white/40 text-slate-500">
                  <thead className="align-bottom">
                    <tr>
                      <th className="px-6 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Project</th>
                      <th className="px-6 py-3 pl-2 font-bold text-left uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Budget</th>
                      <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Status</th>
                      <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Completion</th>
                      <th className="px-6 py-3 font-semibold capitalize align-middle bg-transparent border-b border-collapse border-solid shadow-none dark:border-white/40 dark:text-white tracking-none whitespace-nowrap"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                        <div className="flex px-2 py-1">
                          <div>
                            <img src="https://themewagon.github.io/argon-dashboard-tailwind/assets/img/small-logos/logo-xd.svg" className="inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-in-out h-9 w-9 rounded-xl" alt="xd" />
                          </div>
                          <div className="flex flex-col justify-center">
                            <h6 className="mb-0 text-sm leading-normal dark:text-white">Argon Dashboard Tailwind</h6>
                            <p className="mb-0 text-xs leading-tight dark:text-white dark:opacity-80 text-slate-400">by Bootstrap</p>
                          </div>
                        </div>
                      </td>
                      <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                        <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-80">$2,500</p>
                      </td>
                      <td className="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                        <span className="bg-gradient-to-tl from-emerald-600 to-lime-400 px-2.5 text-xs rounded-1.8 py-1.4 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white">Online</span>
                      </td>
                      <td className="p-2 text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                        <div className="flex items-center justify-center">
                          <span className="mr-2 text-xs font-semibold leading-tight dark:text-white dark:opacity-80">60%</span>
                          <div className="text-xs h-0.75 w-30 m-0 flex overflow-visible rounded-lg bg-gray-200">
                            <div className="duration-600 ease-soft bg-gradient-to-tl from-blue-600 to-cyan-600 -mt-0.38 -ml-px flex h-1.5 w-3/5 flex-col justify-center overflow-hidden whitespace-nowrap rounded bg-fuchsia-500 text-center text-white transition-all" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                        </div>
                      </td>
                      <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                        <button className="inline-block px-6 py-3 font-bold text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer leading-pro text-xs ease-soft-in bg-150 tracking-tight-rem bg-x-25 text-slate-400">
                          <i className="ni leading-none ni-settings"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                        <div className="flex px-2 py-1">
                          <div>
                            <img src="https://themewagon.github.io/argon-dashboard-tailwind/assets/img/small-logos/logo-atlassian.svg" className="inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-in-out h-9 w-9 rounded-xl" alt="atlassian" />
                          </div>
                          <div className="flex flex-col justify-center">
                            <h6 className="mb-0 text-sm leading-normal dark:text-white">Add Progress Track</h6>
                            <p className="mb-0 text-xs leading-tight dark:text-white dark:opacity-80 text-slate-400">by Alexa Design</p>
                          </div>
                        </div>
                      </td>
                      <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                        <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-80">$5,000</p>
                      </td>
                      <td className="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                        <span className="bg-gradient-to-tl from-slate-600 to-slate-300 px-2.5 text-xs rounded-1.8 py-1.4 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white">Offline</span>
                      </td>
                      <td className="p-2 text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                        <div className="flex items-center justify-center">
                          <span className="mr-2 text-xs font-semibold leading-tight dark:text-white dark:opacity-80">10%</span>
                          <div className="text-xs h-0.75 w-30 m-0 flex overflow-visible rounded-lg bg-gray-200">
                            <div className="duration-600 ease-soft bg-gradient-to-tl from-blue-600 to-cyan-600 -mt-0.38 -ml-px flex h-1.5 w-1/10 flex-col justify-center overflow-hidden whitespace-nowrap rounded bg-fuchsia-500 text-center text-white transition-all" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                        </div>
                      </td>
                      <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                        <button className="inline-block px-6 py-3 font-bold text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer leading-pro text-xs ease-soft-in bg-150 tracking-tight-rem bg-x-25 text-slate-400">
                          <i className="ni leading-none ni-settings"></i>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Tables;