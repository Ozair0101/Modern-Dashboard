import React from 'react';
import DashboardLayout from '../components/DashboardLayout';

const Dashboard = () => {
  return (
    <DashboardLayout>
      {/* Dashboard Statistics Cards */}
      <div className="flex flex-wrap -mx-3">
        <div className="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4">
          <div className="relative flex flex-col min-w-0 break-words bg-white shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
            <div className="flex-auto p-4">
              <div className="flex flex-row -mx-3">
                <div className="flex-none w-2/3 max-w-full px-3">
                  <div>
                    <p className="mb-0 font-sans text-sm font-semibold leading-normal uppercase dark:text-white dark:opacity-60">Today's Money</p>
                    <h5 className="mb-2 font-bold dark:text-white">$53,000</h5>
                    <p className="mb-0 dark:text-white dark:opacity-60">
                      <span className="text-sm font-bold leading-normal text-emerald-500">+55%</span>
                      since yesterday
                    </p>
                  </div>
                </div>
                <div className="px-3 text-right basis-1/3">
                  <div className="inline-block w-12 h-12 text-center rounded-circle bg-gradient-to-tl from-blue-500 to-violet-500">
                    <i className="ni leading-none ni-money-coins text-lg relative top-3.5 text-white"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4">
          <div className="relative flex flex-col min-w-0 break-words bg-white shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
            <div className="flex-auto p-4">
              <div className="flex flex-row -mx-3">
                <div className="flex-none w-2/3 max-w-full px-3">
                  <div>
                    <p className="mb-0 font-sans text-sm font-semibold leading-normal uppercase dark:text-white dark:opacity-60">Today's Users</p>
                    <h5 className="mb-2 font-bold dark:text-white">2,300</h5>
                    <p className="mb-0 dark:text-white dark:opacity-60">
                      <span className="text-sm font-bold leading-normal text-emerald-500">+3%</span>
                      since last week
                    </p>
                  </div>
                </div>
                <div className="px-3 text-right basis-1/3">
                  <div className="inline-block w-12 h-12 text-center rounded-circle bg-gradient-to-tl from-red-600 to-orange-600">
                    <i className="ni leading-none ni-world text-lg relative top-3.5 text-white"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4">
          <div className="relative flex flex-col min-w-0 break-words bg-white shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
            <div className="flex-auto p-4">
              <div className="flex flex-row -mx-3">
                <div className="flex-none w-2/3 max-w-full px-3">
                  <div>
                    <p className="mb-0 font-sans text-sm font-semibold leading-normal uppercase dark:text-white dark:opacity-60">New Clients</p>
                    <h5 className="mb-2 font-bold dark:text-white">+3,462</h5>
                    <p className="mb-0 dark:text-white dark:opacity-60">
                      <span className="text-sm font-bold leading-normal text-red-600">-2%</span>
                      since last quarter
                    </p>
                  </div>
                </div>
                <div className="px-3 text-right basis-1/3">
                  <div className="inline-block w-12 h-12 text-center rounded-circle bg-gradient-to-tl from-emerald-500 to-teal-400">
                    <i className="ni leading-none ni-paper-diploma text-lg relative top-3.5 text-white"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4">
          <div className="relative flex flex-col min-w-0 break-words bg-white shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
            <div className="flex-auto p-4">
              <div className="flex flex-row -mx-3">
                <div className="flex-none w-2/3 max-w-full px-3">
                  <div>
                    <p className="mb-0 font-sans text-sm font-semibold leading-normal uppercase dark:text-white dark:opacity-60">Sales</p>
                    <h5 className="mb-2 font-bold dark:text-white">$103,430</h5>
                    <p className="mb-0 dark:text-white dark:opacity-60">
                      <span className="text-sm font-bold leading-normal text-emerald-500">+5%</span>
                      than last month
                    </p>
                  </div>
                </div>
                <div className="px-3 text-right basis-1/3">
                  <div className="inline-block w-12 h-12 text-center rounded-circle bg-gradient-to-tl from-orange-500 to-yellow-500">
                    <i className="ni leading-none ni-cart text-lg relative top-3.5 text-white"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Charts Row */}
      <div className="flex flex-wrap mt-6 -mx-3">
        <div className="w-full max-w-full px-3 mt-0 lg:w-7/12 lg:flex-none">
          <div className="border-black/12.5 dark:bg-slate-850 dark:shadow-dark-xl shadow-xl relative z-20 flex min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border">
            <div className="border-black/12.5 mb-0 rounded-t-2xl border-b-0 border-solid p-6 pt-4 pb-0">
              <h6 className="capitalize dark:text-white">Sales overview</h6>
              <p className="mb-0 text-sm leading-normal dark:text-white dark:opacity-60">
                <i className="fa fa-arrow-up text-emerald-500"></i>
                <span className="font-semibold">4% more</span> in 2021
              </p>
            </div>
            <div className="flex-auto p-4">
              <div className="h-80">
                <canvas id="chart-line" height="300"></canvas>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full max-w-full px-3 lg:w-5/12 lg:flex-none">
          <div className="border-black/12.5 shadow-xl dark:bg-slate-850 dark:shadow-dark-xl relative flex min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border">
            <div className="p-4 pb-0 mb-0 rounded-t-4">
              <h6 className="mb-0 dark:text-white">Performance</h6>
            </div>
            <div className="flex-auto p-4">
              <h4 className="font-bold dark:text-white">
                <span className="leading-normal text-sm">Total orders</span>
                <br />
                1,582
              </h4>
              <div className="h-60">
                <canvas id="chart-bar" height="300"></canvas>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Table */}
      <div className="flex flex-wrap mt-6 -mx-3">
        <div className="w-full max-w-full px-3 mt-0 lg:w-7/12 lg:flex-none">
          <div className="border-black/12.5 dark:bg-slate-850 dark:shadow-dark-xl shadow-xl relative z-20 flex min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border">
            <div className="border-black/12.5 mb-0 rounded-t-2xl border-b-0 border-solid p-6 pb-0">
              <h6 className="dark:text-white">Projects table</h6>
            </div>
            <div className="flex-auto px-0 pt-0 pb-2">
              <div className="p-0 overflow-x-auto">
                <table className="items-center w-full mb-0 align-top border-collapse dark:border-white/40 text-slate-500">
                  <thead className="align-bottom">
                    <tr>
                      <th className="px-6 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
                        Project
                      </th>
                      <th className="px-6 py-3 pl-2 font-bold text-left uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
                        Budget
                      </th>
                      <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
                        Status
                      </th>
                      <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
                        Completion
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                        <div className="flex px-2 py-1">
                          <div>
                            <img src="https://themewagon.github.io/argon-dashboard-tailwind/assets/img/team-1.jpg" className="inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-in-out h-9 w-9 rounded-xl" alt="user1" />
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
                        <span className="bg-gradient-to-tl from-emerald-600 to-lime-400 px-2.5 text-xs rounded-1.8 py-1.4 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white">
                          Online
                        </span>
                      </td>
                      <td className="p-2 text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                        <div className="flex items-center justify-center">
                          <span className="mr-2 text-xs font-semibold leading-tight dark:text-white dark:opacity-80">60%</span>
                          <div className="text-xs h-0.75 w-30 m-0 flex overflow-visible rounded-lg bg-gray-200">
                            <div className="duration-600 ease-soft bg-gradient-to-tl from-blue-600 to-cyan-600 -mt-0.38 -ml-px flex h-1.5 w-3/5 flex-col justify-center overflow-hidden whitespace-nowrap rounded bg-fuchsia-500 text-center text-white transition-all" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                        <div className="flex px-2 py-1">
                          <div>
                            <img src="https://themewagon.github.io/argon-dashboard-tailwind/assets/img/team-2.jpg" className="inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-in-out h-9 w-9 rounded-xl" alt="user2" />
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
                        <span className="bg-gradient-to-tl from-slate-600 to-slate-300 px-2.5 text-xs rounded-1.8 py-1.4 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white">
                          Offline
                        </span>
                      </td>
                      <td className="p-2 text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                        <div className="flex items-center justify-center">
                          <span className="mr-2 text-xs font-semibold leading-tight dark:text-white dark:opacity-80">10%</span>
                          <div className="text-xs h-0.75 w-30 m-0 flex overflow-visible rounded-lg bg-gray-200">
                            <div className="duration-600 ease-soft bg-gradient-to-tl from-blue-600 to-cyan-600 -mt-0.38 -ml-px flex h-1.5 w-1/10 flex-col justify-center overflow-hidden whitespace-nowrap rounded bg-fuchsia-500 text-center text-white transition-all" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full max-w-full px-3 mt-0 lg:w-5/12 lg:flex-none">
          <div className="border-black/12.5 shadow-xl dark:bg-slate-850 dark:shadow-dark-xl relative flex min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border">
            <div className="p-4 pb-0 mb-0 rounded-t-4">
              <h6 className="mb-0 dark:text-white">Orders overview</h6>
              <p className="text-sm leading-normal dark:text-white dark:opacity-60">
                <i className="fa fa-arrow-up text-emerald-500" aria-hidden="true"></i>
                <span className="font-semibold">24%</span> this month
              </p>
            </div>
            <div className="flex-auto p-4">
              <div className="before:border-r-solid relative before:absolute before:top-0 before:left-4 before:h-full before:border-r-2 before:border-r-slate-100 dark:before:border-r-white/10 before:content-[''] before:lg:-ml-px">
                <div className="relative flex items-center p-0 mt-2 ml-0">
                  <div className="z-10 inline-flex items-center justify-center w-6 h-6 mb-0 font-semibold text-white transition-all duration-200 ease-in-out text-size-sm bg-emerald-500 rounded-circle leading-pro">
                    <i className="ni ni-bell-55 leading-none text-size-xs relative top-[1px]"></i>
                  </div>
                  <div className="flex items-center justify-between w-full ml-4">
                    <div>
                      <h6 className="mb-0 text-sm font-semibold leading-normal text-size-sm dark:text-white">$2400, Design changes</h6>
                      <p className="mb-0 text-xs leading-tight dark:text-white/80 text-slate-400">22 DEC 7:20 PM</p>
                    </div>
                  </div>
                </div>

                <div className="relative flex items-center p-0 mt-2 ml-0">
                  <div className="z-10 inline-flex items-center justify-center w-6 h-6 mb-0 font-semibold text-white transition-all duration-200 ease-in-out text-size-sm bg-red-600 rounded-circle leading-pro">
                    <i className="ni ni-html5 leading-none text-size-xs relative top-[1px]"></i>
                  </div>
                  <div className="flex items-center justify-between w-full ml-4">
                    <div>
                      <h6 className="mb-0 text-sm font-semibold leading-normal text-size-sm dark:text-white">New order #1832412</h6>
                      <p className="mb-0 text-xs leading-tight dark:text-white/80 text-slate-400">21 DEC 11 PM</p>
                    </div>
                  </div>
                </div>

                <div className="relative flex items-center p-0 mt-2 ml-0">
                  <div className="z-10 inline-flex items-center justify-center w-6 h-6 mb-0 font-semibold text-white transition-all duration-200 ease-in-out text-size-sm bg-blue-500 rounded-circle leading-pro">
                    <i className="ni ni-cart leading-none text-size-xs relative top-[1px]"></i>
                  </div>
                  <div className="flex items-center justify-between w-full ml-4">
                    <div>
                      <h6 className="mb-0 text-sm font-semibold leading-normal text-size-sm dark:text-white">Server payments for April</h6>
                      <p className="mb-0 text-xs leading-tight dark:text-white/80 text-slate-400">21 DEC 9:34 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;