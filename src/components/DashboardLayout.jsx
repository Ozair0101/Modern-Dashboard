import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const DashboardLayout = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const menuItems = [
    { path: '/dashboard', icon: 'ni ni-tv-2', label: 'Dashboard', color: 'text-blue-500' },
    { path: '/dashboard/tables', icon: 'ni ni-calendar-grid-58', label: 'Tables', color: 'text-orange-500' },
    { path: '/dashboard/billing', icon: 'ni ni-credit-card', label: 'Billing', color: 'text-emerald-500' },
    { path: '/dashboard/virtual-reality', icon: 'ni ni-app', label: 'Virtual Reality', color: 'text-cyan-500' },
    { path: '/dashboard/rtl', icon: 'ni ni-world-2', label: 'RTL', color: 'text-red-600' },
  ];

  const accountItems = [
    { path: '/dashboard/profile', icon: 'ni ni-single-02', label: 'Profile', color: 'text-slate-700' },
  ];

  const isActiveRoute = (path) => {
    return location.pathname === path;
  };

  return (
    <div className="m-0 font-sans text-base antialiased font-normal dark:bg-slate-900 leading-default bg-gray-50 text-slate-500">
      {/* External styles for dashboard */}
      <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet" />
      <script src="https://kit.fontawesome.com/42d5adcbca.js" crossOrigin="anonymous"></script>
      <link href="https://themewagon.github.io/argon-dashboard-tailwind/assets/css/nucleo-icons.css" rel="stylesheet" />
      <link href="https://themewagon.github.io/argon-dashboard-tailwind/assets/css/nucleo-svg.css" rel="stylesheet" />
      <link href="https://themewagon.github.io/argon-dashboard-tailwind/assets/css/argon-dashboard-tailwind.css?v=1.0.1" rel="stylesheet" />
      
      <div className="absolute w-full bg-blue-500 dark:hidden min-h-75"></div>
      
      {/* Sidebar */}
      <aside className="fixed inset-y-0 flex-wrap items-center justify-between block w-full p-0 my-4 overflow-y-auto antialiased transition-transform duration-200 -translate-x-full bg-white border-0 shadow-xl dark:shadow-none dark:bg-slate-850 max-w-64 ease-nav-brand z-990 xl:ml-6 rounded-2xl xl:left-0 xl:translate-x-0" aria-expanded="false">
        <div className="h-19">
          <Link className="block px-8 py-6 m-0 text-sm whitespace-nowrap dark:text-white text-slate-700" to="/dashboard">
            <img src="https://themewagon.github.io/argon-dashboard-tailwind/assets/img/logo-ct-dark.png" className="inline h-full max-w-full transition-all duration-200 dark:hidden ease-nav-brand max-h-8" alt="main_logo" />
            <img src="https://themewagon.github.io/argon-dashboard-tailwind/assets/img/logo-ct.png" className="hidden h-full max-w-full transition-all duration-200 dark:inline ease-nav-brand max-h-8" alt="main_logo" />
            <span className="ml-1 font-semibold transition-all duration-200 ease-nav-brand">Argon Dashboard 2</span>
          </Link>
        </div>

        <hr className="h-px mt-0 bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent" />

        <div className="items-center block w-auto max-h-screen overflow-auto h-sidenav grow basis-full">
          <ul className="flex flex-col pl-0 mb-0">
            {menuItems.map((item) => (
              <li key={item.path} className="mt-0.5 w-full">
                <Link 
                  className={`py-2.7 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap rounded-lg px-4 font-semibold transition-colors ${
                    isActiveRoute(item.path) 
                      ? 'bg-blue-500/13 dark:text-white dark:opacity-80 text-slate-700' 
                      : 'dark:text-white dark:opacity-80 text-slate-700'
                  }`} 
                  to={item.path}
                >
                  <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5">
                    <i className={`relative top-0 text-sm leading-normal ${item.color} ${item.icon}`}></i>
                  </div>
                  <span className="ml-1 duration-300 opacity-100 pointer-events-none ease">{item.label}</span>
                </Link>
              </li>
            ))}

            <li className="w-full mt-4">
              <h6 className="pl-6 ml-2 text-xs font-bold leading-tight uppercase dark:text-white opacity-60">Account pages</h6>
            </li>

            {accountItems.map((item) => (
              <li key={item.path} className="mt-0.5 w-full">
                <Link 
                  className={`py-2.7 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap rounded-lg px-4 font-semibold transition-colors ${
                    isActiveRoute(item.path) 
                      ? 'bg-blue-500/13 dark:text-white dark:opacity-80 text-slate-700' 
                      : 'dark:text-white dark:opacity-80 text-slate-700'
                  }`} 
                  to={item.path}
                >
                  <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5">
                    <i className={`relative top-0 text-sm leading-normal ${item.color} ${item.icon}`}></i>
                  </div>
                  <span className="ml-1 duration-300 opacity-100 pointer-events-none ease">{item.label}</span>
                </Link>
              </li>
            ))}

            <li className="mt-0.5 w-full">
              <button 
                onClick={handleLogout}
                className="py-2.7 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap rounded-lg px-4 font-semibold transition-colors dark:text-white dark:opacity-80 text-slate-700 w-full text-left hover:bg-gray-100"
              >
                <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5">
                  <i className="relative top-0 text-sm leading-normal text-red-500 fas fa-sign-out-alt"></i>
                </div>
                <span className="ml-1 duration-300 opacity-100 pointer-events-none ease">Logout</span>
              </button>
            </li>
          </ul>
        </div>
      </aside>

      {/* Main Content */}
      <main className="relative h-full max-h-screen transition-all duration-200 ease-in-out xl:ml-68 rounded-xl">
        {/* Navbar */}
        <nav className="relative flex flex-wrap items-center justify-between px-0 py-2 mx-6 transition-all ease-in shadow-none duration-250 rounded-2xl lg:flex-nowrap lg:justify-start">
          <div className="flex items-center justify-between w-full px-4 py-1 mx-auto flex-wrap-inherit">
            <nav>
              <ol className="flex flex-wrap pt-1 mr-12 bg-transparent rounded-lg sm:mr-16">
                <li className="text-sm leading-normal">
                  <span className="text-white opacity-50">Pages</span>
                </li>
                <li className="text-sm pl-2 capitalize leading-normal text-white before:float-left before:pr-2 before:text-white before:content-['/']" aria-current="page">
                  {location.pathname.split('/').pop() || 'Dashboard'}
                </li>
              </ol>
              <h6 className="mb-0 font-bold text-white capitalize">
                {location.pathname.split('/').pop() || 'Dashboard'}
              </h6>
            </nav>

            <div className="flex items-center mt-2 grow sm:mt-0 sm:mr-6 md:mr-0 lg:flex lg:basis-auto">
              <div className="flex items-center md:ml-auto md:pr-4">
                <div className="relative flex flex-wrap items-stretch w-full transition-all rounded-lg ease">
                  <span className="text-sm ease leading-5.6 absolute z-50 -ml-px flex h-full items-center whitespace-nowrap rounded-lg rounded-tr-none rounded-br-none border border-r-0 border-transparent bg-transparent py-2 px-2.5 text-center font-normal text-slate-500 transition-all">
                    <i className="fas fa-search"></i>
                  </span>
                  <input 
                    type="text" 
                    className="pl-9 text-sm focus:shadow-primary-outline ease w-1/100 leading-5.6 relative -ml-px block min-w-0 flex-auto rounded-lg border border-solid border-gray-300 dark:bg-slate-850 dark:text-white bg-white bg-clip-padding py-2 pr-3 text-gray-700 transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none focus:transition-shadow" 
                    placeholder="Type here..." 
                  />
                </div>
              </div>
              <ul className="flex flex-row justify-end pl-0 mb-0 list-none md-max:w-full">
                <li className="flex items-center">
                  <span className="block px-0 py-2 text-sm font-semibold text-white transition-all ease-nav-brand">
                    <i className="fa fa-user sm:mr-1"></i>
                    <span className="hidden sm:inline">{user?.name || 'User'}</span>
                  </span>
                </li>
                <li className="flex items-center px-4">
                  <button onClick={handleLogout} className="p-0 text-sm text-white transition-all ease-nav-brand">
                    <i className="cursor-pointer fa fa-sign-out-alt"></i>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Page Content */}
        <div className="w-full px-6 py-6 mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;