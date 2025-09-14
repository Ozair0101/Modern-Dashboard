import React from 'react';
import DashboardLayout from '../components/DashboardLayout';
import { useAuth } from '../contexts/AuthContext';

const Profile = () => {
  const { user } = useAuth();

  return (
    <DashboardLayout>
      <div className="flex flex-wrap -mx-3">
        <div className="w-full max-w-full px-3 lg:w-1/3 lg:flex-none">
          <div className="relative flex flex-col min-w-0 break-words bg-white border-0 border-transparent border-solid shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
            <div className="relative flex flex-col min-w-0 break-words bg-white border-0 border-transparent border-solid shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
              <div className="p-4 pb-0 mb-0 rounded-t-2xl">
                <div className="flex flex-wrap -mx-3">
                  <div className="flex-none w-auto max-w-full px-3">
                    <div className="text-size-base h-18.5 w-18.5 relative inline-flex items-center justify-center rounded-xl text-white transition-all duration-200 ease-soft-in-out">
                      <img src="https://themewagon.github.io/argon-dashboard-tailwind/assets/img/bruce-mars.jpg" alt="profile_image" className="w-full shadow-soft-sm rounded-xl" />
                    </div>
                  </div>
                  <div className="flex-none w-auto max-w-full px-3 my-auto">
                    <div className="h-full">
                      <h5 className="mb-1 dark:text-white">{user?.name || 'Dashboard Admin'}</h5>
                      <p className="mb-0 font-semibold leading-normal dark:text-white dark:opacity-60 text-sm">{user?.role || 'Administrator'}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex-auto p-4">
              <div className="flex flex-wrap -mx-3">
                <div className="w-full max-w-full px-3">
                  <ul className="flex flex-col pl-0 mb-0 rounded-lg">
                    <li className="relative flex justify-between py-2 pr-4 mb-2 border-0 rounded-t-inherit text-inherit rounded-xl">
                      <div className="flex items-center">
                        <div className="inline-block w-8 h-8 mr-2 text-center text-black bg-center shadow-soft-2xl rounded-xl">
                          <i className="ni leading-none ni-mobile-button text-dark relative top-0.75 text-xs"></i>
                        </div>
                        <div className="flex flex-col items-start justify-center">
                          <h6 className="mb-0 leading-normal text-sm dark:text-white">Mobile</h6>
                          <span className="leading-tight dark:text-white/80 text-xs">(+40) 772 100 200</span>
                        </div>
                      </div>
                      <div className="flex">
                        <button className="group ease-soft-in leading-pro text-xs rounded-3.5xl p-1.2 h-6.5 w-6.5 mx-0 my-auto inline-block cursor-pointer border-0 bg-transparent text-center align-middle font-bold text-slate-700 shadow-none transition-all dark:text-white">
                          <i className="ni ease-bounce text-2xs group-hover:translate-x-1.25 ni-bold-right transition-all duration-200" aria-hidden="true"></i>
                        </button>
                      </div>
                    </li>
                    <li className="relative flex justify-between py-2 pr-4 mb-2 border-0 border-t-0 text-inherit rounded-xl">
                      <div className="flex items-center">
                        <div className="inline-block w-8 h-8 mr-2 text-center text-black bg-center shadow-soft-2xl rounded-xl">
                          <i className="ni leading-none ni-email-83 text-dark relative top-0.75 text-xs"></i>
                        </div>
                        <div className="flex flex-col items-start justify-center">
                          <h6 className="mb-0 leading-normal text-sm dark:text-white">Email</h6>
                          <span className="leading-tight dark:text-white/80 text-xs">{user?.email || 'admin@dashboard.com'}</span>
                        </div>
                      </div>
                      <div className="flex">
                        <button className="group ease-soft-in leading-pro text-xs rounded-3.5xl p-1.2 h-6.5 w-6.5 mx-0 my-auto inline-block cursor-pointer border-0 bg-transparent text-center align-middle font-bold text-slate-700 shadow-none transition-all dark:text-white">
                          <i className="ni ease-bounce text-2xs group-hover:translate-x-1.25 ni-bold-right transition-all duration-200" aria-hidden="true"></i>
                        </button>
                      </div>
                    </li>
                    <li className="relative flex justify-between py-2 pr-4 border-0 border-t-0 rounded-b-inherit text-inherit rounded-xl">
                      <div className="flex items-center">
                        <div className="inline-block w-8 h-8 mr-2 text-center text-black bg-center shadow-soft-2xl rounded-xl">
                          <i className="ni leading-none ni-world text-dark relative top-0.75 text-xs"></i>
                        </div>
                        <div className="flex flex-col items-start justify-center">
                          <h6 className="mb-0 leading-normal text-sm dark:text-white">Social</h6>
                          <span className="leading-tight dark:text-white/80 text-xs">
                            <i className="mr-1 fab fa-facebook text-slate-400 dark:text-white/40"></i>
                            <i className="mr-1 fab fa-twitter text-slate-400 dark:text-white/40"></i>
                            <i className="mr-1 fab fa-instagram text-slate-400 dark:text-white/40"></i>
                          </span>
                        </div>
                      </div>
                      <div className="flex">
                        <button className="group ease-soft-in leading-pro text-xs rounded-3.5xl p-1.2 h-6.5 w-6.5 mx-0 my-auto inline-block cursor-pointer border-0 bg-transparent text-center align-middle font-bold text-slate-700 shadow-none transition-all dark:text-white">
                          <i className="ni ease-bounce text-2xs group-hover:translate-x-1.25 ni-bold-right transition-all duration-200" aria-hidden="true"></i>
                        </button>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="w-full max-w-full px-3 lg:w-2/3 lg:flex-none">
          <div className="relative flex flex-col h-full min-w-0 break-words bg-white border-0 border-transparent border-solid shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
            <div className="p-4 pb-0 mb-0 rounded-t-2xl">
              <div className="flex flex-wrap -mx-3">
                <div className="flex-none w-auto max-w-full px-3">
                  <h6 className="mb-0 dark:text-white">Platform Settings</h6>
                </div>
              </div>
            </div>
            <div className="flex-auto p-4">
              <h6 className="font-bold leading-tight uppercase dark:text-white text-xs text-slate-500">Account</h6>
              <ul className="flex flex-col pl-0 mb-0 rounded-lg">
                <li className="relative block px-0 py-2 bg-white border-0 rounded-t-inherit text-inherit dark:bg-slate-850 rounded-xl">
                  <div className="flex items-center">
                    <div className="inline-block w-4 h-4 mr-2 text-center text-black bg-center shadow-soft-2xl rounded-xl">
                      <input className="w-4.8 h-4.8 ease-soft-in-out after:rounded-circle after:shadow-soft-2xl after:duration-250 checked:after:translate-x-5.25 h-5 relative float-left mt-1 ml-auto w-10 cursor-pointer appearance-none border border-solid border-gray-200 bg-slate-800/10 bg-none bg-contain bg-left bg-no-repeat align-top transition-all after:absolute after:top-px after:h-4 after:w-4 after:translate-x-px after:bg-white after:content-[''] checked:border-slate-800/95 checked:bg-slate-800/95 checked:bg-none checked:bg-right" type="checkbox" checked />
                    </div>
                    <span className="mb-0 font-semibold leading-tight text-sm dark:text-white/80">Email me when someone follows me</span>
                  </div>
                </li>
                <li className="relative block px-0 py-2 bg-white border-0 text-inherit dark:bg-slate-850 rounded-xl">
                  <div className="flex items-center">
                    <div className="inline-block w-4 h-4 mr-2 text-center text-black bg-center shadow-soft-2xl rounded-xl">
                      <input className="w-4.8 h-4.8 ease-soft-in-out after:rounded-circle after:shadow-soft-2xl after:duration-250 checked:after:translate-x-5.25 h-5 relative float-left mt-1 ml-auto w-10 cursor-pointer appearance-none border border-solid border-gray-200 bg-slate-800/10 bg-none bg-contain bg-left bg-no-repeat align-top transition-all after:absolute after:top-px after:h-4 after:w-4 after:translate-x-px after:bg-white after:content-[''] checked:border-slate-800/95 checked:bg-slate-800/95 checked:bg-none checked:bg-right" type="checkbox" />
                    </div>
                    <span className="mb-0 font-semibold leading-tight text-sm dark:text-white/80">Email me when someone answers on my post</span>
                  </div>
                </li>
                <li className="relative block px-0 py-2 bg-white border-0 rounded-b-inherit text-inherit dark:bg-slate-850 rounded-xl">
                  <div className="flex items-center">
                    <div className="inline-block w-4 h-4 mr-2 text-center text-black bg-center shadow-soft-2xl rounded-xl">
                      <input className="w-4.8 h-4.8 ease-soft-in-out after:rounded-circle after:shadow-soft-2xl after:duration-250 checked:after:translate-x-5.25 h-5 relative float-left mt-1 ml-auto w-10 cursor-pointer appearance-none border border-solid border-gray-200 bg-slate-800/10 bg-none bg-contain bg-left bg-no-repeat align-top transition-all after:absolute after:top-px after:h-4 after:w-4 after:translate-x-px after:bg-white after:content-[''] checked:border-slate-800/95 checked:bg-slate-800/95 checked:bg-none checked:bg-right" type="checkbox" checked />
                    </div>
                    <span className="mb-0 font-semibold leading-tight text-sm dark:text-white/80">Email me when someone mentions me</span>
                  </div>
                </li>
              </ul>
              <h6 className="mt-6 font-bold leading-tight uppercase dark:text-white text-xs text-slate-500">Application</h6>
              <ul className="flex flex-col pl-0 mb-0 rounded-lg">
                <li className="relative block px-0 py-2 bg-white border-0 rounded-t-inherit text-inherit dark:bg-slate-850 rounded-xl">
                  <div className="flex items-center">
                    <div className="inline-block w-4 h-4 mr-2 text-center text-black bg-center shadow-soft-2xl rounded-xl">
                      <input className="w-4.8 h-4.8 ease-soft-in-out after:rounded-circle after:shadow-soft-2xl after:duration-250 checked:after:translate-x-5.25 h-5 relative float-left mt-1 ml-auto w-10 cursor-pointer appearance-none border border-solid border-gray-200 bg-slate-800/10 bg-none bg-contain bg-left bg-no-repeat align-top transition-all after:absolute after:top-px after:h-4 after:w-4 after:translate-x-px after:bg-white after:content-[''] checked:border-slate-800/95 checked:bg-slate-800/95 checked:bg-none checked:bg-right" type="checkbox" />
                    </div>
                    <span className="mb-0 font-semibold leading-tight text-sm dark:text-white/80">New launches and projects</span>
                  </div>
                </li>
                <li className="relative block px-0 py-2 bg-white border-0 text-inherit dark:bg-slate-850 rounded-xl">
                  <div className="flex items-center">
                    <div className="inline-block w-4 h-4 mr-2 text-center text-black bg-center shadow-soft-2xl rounded-xl">
                      <input className="w-4.8 h-4.8 ease-soft-in-out after:rounded-circle after:shadow-soft-2xl after:duration-250 checked:after:translate-x-5.25 h-5 relative float-left mt-1 ml-auto w-10 cursor-pointer appearance-none border border-solid border-gray-200 bg-slate-800/10 bg-none bg-contain bg-left bg-no-repeat align-top transition-all after:absolute after:top-px after:h-4 after:w-4 after:translate-x-px after:bg-white after:content-[''] checked:border-slate-800/95 checked:bg-slate-800/95 checked:bg-none checked:bg-right" type="checkbox" checked />
                    </div>
                    <span className="mb-0 font-semibold leading-tight text-sm dark:text-white/80">Monthly product updates</span>
                  </div>
                </li>
                <li className="relative block px-0 py-2 bg-white border-0 rounded-b-inherit text-inherit dark:bg-slate-850 rounded-xl">
                  <div className="flex items-center">
                    <div className="inline-block w-4 h-4 mr-2 text-center text-black bg-center shadow-soft-2xl rounded-xl">
                      <input className="w-4.8 h-4.8 ease-soft-in-out after:rounded-circle after:shadow-soft-2xl after:duration-250 checked:after:translate-x-5.25 h-5 relative float-left mt-1 ml-auto w-10 cursor-pointer appearance-none border border-solid border-gray-200 bg-slate-800/10 bg-none bg-contain bg-left bg-no-repeat align-top transition-all after:absolute after:top-px after:h-4 after:w-4 after:translate-x-px after:bg-white after:content-[''] checked:border-slate-800/95 checked:bg-slate-800/95 checked:bg-none checked:bg-right" type="checkbox" />
                    </div>
                    <span className="mb-0 font-semibold leading-tight text-sm dark:text-white/80">Subscribe to newsletter</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Profile;