import React from 'react';
import DashboardLayout from '../components/DashboardLayout';

const VirtualReality = () => {
  return (
    <DashboardLayout>
      <div className="relative w-full h-full mx-auto">
        <div className="relative flex items-center justify-center w-full h-full overflow-hidden bg-cover rounded-xl" style={{backgroundImage: "url('https://themewagon.github.io/argon-dashboard-tailwind/assets/img/vr-bg.jpg')", minHeight: '500px'}}>
          <span className="absolute top-0 left-0 w-full h-full bg-center bg-cover bg-gradient-to-tl from-gray-900 to-slate-800 opacity-80"></span>
          <div className="relative z-20 flex-auto px-4 py-4 mx-6 my-6 text-center">
            <div className="flex justify-center">
              <div className="w-full max-w-md">
                <div className="relative flex flex-col min-w-0 break-words bg-transparent border-0 shadow-none rounded-2xl bg-clip-border">
                  <div className="p-6">
                    <h1 className="mt-6 mb-1 font-bold text-white text-4xl">Welcome to VR World</h1>
                    <p className="text-white">
                      Once you start to work with three-dimensional visualization, you realize it's something completely different than working in two dimensions.
                    </p>
                    <button type="button" className="inline-block px-16 py-3.5 mt-6 mb-0 font-bold leading-normal text-center text-black uppercase align-middle transition-all bg-white border-0 rounded-lg cursor-pointer hover:-translate-y-px active:opacity-85 hover:shadow-xs text-sm ease-in tracking-tight-rem shadow-md bg-150 bg-x-25">
                      Get Started
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="container mx-auto mt-6">
          <div className="flex flex-wrap -mx-3">
            <div className="w-full max-w-full px-3 lg:w-4/12 lg:flex-none">
              <div className="relative flex flex-col min-w-0 break-words bg-white border-0 border-transparent border-solid shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
                <div className="p-4">
                  <div className="flex">
                    <div className="flex">
                      <div className="w-12 h-12 my-auto">
                        <img className="w-12 h-12 rounded-xl" src="https://themewagon.github.io/argon-dashboard-tailwind/assets/img/team-1.jpg" alt="profile" />
                      </div>
                      <div className="my-auto ml-4">
                        <h6 className="mb-0 text-sm dark:text-white">Nick Daniel</h6>
                        <p className="mb-0 text-xs text-slate-400">Hi! I need more information..</p>
                      </div>
                    </div>
                    <div className="ml-auto text-right">
                      <p className="mb-0 text-xs text-slate-400">11:40 AM</p>
                      <p className="mb-0 text-xs font-bold text-slate-400">
                        <i className="fa fa-check text-emerald-500"></i>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full max-w-full px-3 lg:w-4/12 lg:flex-none">
              <div className="relative flex flex-col min-w-0 break-words bg-white border-0 border-transparent border-solid shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
                <div className="p-4">
                  <div className="flex">
                    <div className="flex">
                      <div className="w-12 h-12 my-auto">
                        <img className="w-12 h-12 rounded-xl" src="https://themewagon.github.io/argon-dashboard-tailwind/assets/img/team-2.jpg" alt="profile" />
                      </div>
                      <div className="my-auto ml-4">
                        <h6 className="mb-0 text-sm dark:text-white">John Snow</h6>
                        <p className="mb-0 text-xs text-slate-400">Awesome work, can you..</p>
                      </div>
                    </div>
                    <div className="ml-auto text-right">
                      <p className="mb-0 text-xs text-slate-400">11:40 AM</p>
                      <p className="mb-0 text-xs font-bold text-slate-400">
                        <i className="fa fa-check text-emerald-500"></i>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full max-w-full px-3 lg:w-4/12 lg:flex-none">
              <div className="relative flex flex-col min-w-0 break-words bg-white border-0 border-transparent border-solid shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
                <div className="p-4">
                  <div className="flex">
                    <div className="flex">
                      <div className="w-12 h-12 my-auto">
                        <img className="w-12 h-12 rounded-xl" src="https://themewagon.github.io/argon-dashboard-tailwind/assets/img/team-3.jpg" alt="profile" />
                      </div>
                      <div className="my-auto ml-4">
                        <h6 className="mb-0 text-sm dark:text-white">Alexa Liras</h6>
                        <p className="mb-0 text-xs text-slate-400">Hi! I need more information..</p>
                      </div>
                    </div>
                    <div className="ml-auto text-right">
                      <p className="mb-0 text-xs text-slate-400">11:40 AM</p>
                      <p className="mb-0 text-xs font-bold text-slate-400">
                        <i className="fa fa-check text-emerald-500"></i>
                      </p>
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

export default VirtualReality;