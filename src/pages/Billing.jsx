import React from 'react';
import DashboardLayout from '../components/DashboardLayout';

const Billing = () => {
  return (
    <DashboardLayout>
      {/* Page Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Billing & Invoices</h1>
            <p className="text-gray-600">Manage your billing information and view transaction history</p>
          </div>
          <div className="flex space-x-3">
            <button className="btn-secondary">
              <i className="fas fa-credit-card mr-2"></i>
              Add Payment
            </button>
            <button className="btn-primary">
              <i className="fas fa-plus mr-2"></i>
              New Invoice
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap -mx-3">
        <div className="w-full max-w-full px-3 mb-6 md:w-6/12 md:flex-none">
          <div className="relative flex flex-col min-w-0 break-words bg-white border-0 border-transparent border-solid shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
            <div className="p-4 pb-0 mb-0 rounded-t-2xl">
              <h6 className="mb-0 dark:text-white">Payment Method</h6>
            </div>
            <div className="flex-auto p-4">
              <div className="flex flex-wrap -mx-3">
                <div className="w-full max-w-full px-3 mb-4">
                  <div className="relative flex flex-row items-center flex-auto min-w-0 p-6 break-words bg-transparent border border-solid shadow-none rounded-xl border-slate-100 dark:border-slate-700 bg-clip-border">
                    <img className="mb-0 mr-4 w-10" src="https://themewagon.github.io/argon-dashboard-tailwind/assets/img/logos/mastercard.png" alt="logo" />
                    <h6 className="mb-0 dark:text-white">**** **** **** 7852</h6>
                    <i className="ml-auto cursor-pointer fas fa-pencil-alt dark:text-white/80 text-slate-700" aria-hidden="true"></i>
                  </div>
                </div>
                <div className="w-full max-w-full px-3 mb-4">
                  <div className="relative flex flex-row items-center flex-auto min-w-0 p-6 break-words bg-transparent border border-solid shadow-none rounded-xl border-slate-100 dark:border-slate-700 bg-clip-border">
                    <img className="mb-0 mr-4 w-10" src="https://themewagon.github.io/argon-dashboard-tailwind/assets/img/logos/visa.png" alt="logo" />
                    <h6 className="mb-0 dark:text-white">**** **** **** 5248</h6>
                    <i className="ml-auto cursor-pointer fas fa-pencil-alt dark:text-white/80 text-slate-700" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full max-w-full px-3 md:w-6/12 md:flex-none">
          <div className="relative flex flex-col h-full min-w-0 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
            <div className="p-4 pb-0 mb-0 rounded-t-2xl">
              <div className="flex justify-between items-center">
                <h6 className="mb-0 dark:text-white">Invoices</h6>
                <button className="inline-block px-8 py-2 m-0 text-xs font-bold leading-normal text-center text-white uppercase align-middle transition-all ease-in border-0 rounded-lg shadow-md cursor-pointer bg-150 bg-gradient-to-tl from-gray-900 to-slate-800 leading-pro bg-x-25 hover:shadow-soft-xs active:opacity-85">View All</button>
              </div>
            </div>
            <div className="flex-auto p-4">
              <ul className="flex flex-col pl-0 mb-0 rounded-lg">
                <li className="relative flex justify-between py-2 pr-4 mb-2 border-0 rounded-t-inherit rounded-xl">
                  <div className="flex flex-col">
                    <h6 className="mb-1 text-sm font-semibold leading-normal dark:text-white text-slate-700">March, 01, 2020</h6>
                    <span className="text-xs leading-tight dark:text-white/80">#MS-415646</span>
                  </div>
                  <div className="flex items-center text-sm leading-normal">
                    $180
                    <button className="inline-block py-1 px-0 mb-0 ml-6 text-sm font-bold leading-normal text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer ease-soft-in bg-150 tracking-tight-rem bg-x-25 text-slate-700 dark:text-white">
                      <i className="mr-1 fas fa-file-pdf text-lg relative top-px" aria-hidden="true"></i>
                      PDF
                    </button>
                  </div>
                </li>
                <li className="relative flex justify-between py-2 pr-4 mb-2 border-0 border-t-0 rounded-xl">
                  <div className="flex flex-col">
                    <h6 className="mb-1 text-sm font-semibold leading-normal dark:text-white text-slate-700">February, 10, 2021</h6>
                    <span className="text-xs leading-tight dark:text-white/80">#RV-126749</span>
                  </div>
                  <div className="flex items-center text-sm leading-normal">
                    $250
                    <button className="inline-block py-1 px-0 mb-0 ml-6 text-sm font-bold leading-normal text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer ease-soft-in bg-150 tracking-tight-rem bg-x-25 text-slate-700 dark:text-white">
                      <i className="mr-1 fas fa-file-pdf text-lg relative top-px" aria-hidden="true"></i>
                      PDF
                    </button>
                  </div>
                </li>
                <li className="relative flex justify-between py-2 pr-4 mb-2 border-0 border-t-0 rounded-xl">
                  <div className="flex flex-col">
                    <h6 className="mb-1 text-sm font-semibold leading-normal dark:text-white text-slate-700">April, 05, 2020</h6>
                    <span className="text-xs leading-tight dark:text-white/80">#FB-212562</span>
                  </div>
                  <div className="flex items-center text-sm leading-normal">
                    $560
                    <button className="inline-block py-1 px-0 mb-0 ml-6 text-sm font-bold leading-normal text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer ease-soft-in bg-150 tracking-tight-rem bg-x-25 text-slate-700 dark:text-white">
                      <i className="mr-1 fas fa-file-pdf text-lg relative top-px" aria-hidden="true"></i>
                      PDF
                    </button>
                  </div>
                </li>
                <li className="relative flex justify-between py-2 pr-4 border-0 border-t-0 rounded-b-inherit rounded-xl">
                  <div className="flex flex-col">
                    <h6 className="mb-1 text-sm font-semibold leading-normal dark:text-white text-slate-700">June, 25, 2019</h6>
                    <span className="text-xs leading-tight dark:text-white/80">#QW-103578</span>
                  </div>
                  <div className="flex items-center text-sm leading-normal">
                    $120
                    <button className="inline-block py-1 px-0 mb-0 ml-6 text-sm font-bold leading-normal text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer ease-soft-in bg-150 tracking-tight-rem bg-x-25 text-slate-700 dark:text-white">
                      <i className="mr-1 fas fa-file-pdf text-lg relative top-px" aria-hidden="true"></i>
                      PDF
                    </button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Billing Information */}
      <div className="flex flex-wrap -mx-3">
        <div className="w-full max-w-full px-3 mt-6">
          <div className="relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
            <div className="p-4 pb-0 mb-0 rounded-t-2xl">
              <div className="flex justify-between items-center">
                <h6 className="mb-0 dark:text-white">Billing Information</h6>
                <button className="inline-block px-8 py-2 m-0 text-xs font-bold leading-normal text-center text-white uppercase align-middle transition-all ease-in border-0 rounded-lg shadow-md cursor-pointer bg-150 bg-gradient-to-tl from-gray-900 to-slate-800 leading-pro bg-x-25 hover:shadow-soft-xs active:opacity-85">
                  <i className="fas fa-plus"></i>&nbsp;&nbsp;Add New Card
                </button>
              </div>
            </div>
            <div className="flex-auto px-0 pt-0 pb-2">
              <div className="p-0 overflow-x-auto">
                <table className="items-center w-full mb-0 align-top border-collapse dark:border-white/40 text-slate-500">
                  <thead className="align-bottom">
                    <tr>
                      <th className="px-6 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Company</th>
                      <th className="px-6 py-3 pl-2 font-bold text-left uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Email</th>
                      <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">VAT Number</th>
                      <th className="px-6 py-3 font-semibold capitalize align-middle bg-transparent border-b border-collapse border-solid shadow-none dark:border-white/40 dark:text-white tracking-none whitespace-nowrap text-slate-400 opacity-70"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                        <div className="flex px-2 py-1">
                          <div className="flex flex-col justify-center">
                            <h6 className="mb-0 text-sm leading-normal dark:text-white">Oliver Liam</h6>
                            <p className="mb-0 text-xs leading-tight dark:text-white dark:opacity-80 text-slate-400">Company Name: Viking Burrito</p>
                            <p className="mb-0 text-xs leading-tight dark:text-white dark:opacity-80 text-slate-400">Country: United States</p>
                          </div>
                        </div>
                      </td>
                      <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                        <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-80">oliver@burrito.com</p>
                      </td>
                      <td className="p-2 text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                        <span className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400">FRB1235476</span>
                      </td>
                      <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                        <button className="inline-block px-5 py-2.5 mb-0 font-bold text-center uppercase align-middle transition-all bg-transparent border border-solid rounded-lg shadow-none cursor-pointer leading-pro ease-soft-in text-xs bg-150 active:shadow-soft-xs tracking-tight-rem border-slate-700 text-slate-700 hover:bg-transparent hover:text-slate-700 hover:shadow-none active:bg-slate-700 active:text-white active:hover:bg-transparent active:hover:text-slate-700 active:hover:shadow-none dark:border-white dark:text-white dark:hover:bg-transparent dark:hover:text-white dark:hover:shadow-none dark:active:bg-white dark:active:text-slate-700 dark:active:hover:bg-transparent dark:active:hover:text-white">
                          <i className="fas fa-pencil-alt text-2xs mr-1"></i>
                          EDIT
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                        <div className="flex px-2 py-1">
                          <div className="flex flex-col justify-center">
                            <h6 className="mb-0 text-sm leading-normal dark:text-white">Lucas Harper</h6>
                            <p className="mb-0 text-xs leading-tight dark:text-white dark:opacity-80 text-slate-400">Company Name: Stone Tech Zone</p>
                            <p className="mb-0 text-xs leading-tight dark:text-white dark:opacity-80 text-slate-400">Country: United Kingdom</p>
                          </div>
                        </div>
                      </td>
                      <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                        <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-80">lucas@stone-tech.com</p>
                      </td>
                      <td className="p-2 text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                        <span className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400">FRB1235476</span>
                      </td>
                      <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                        <button className="inline-block px-5 py-2.5 mb-0 font-bold text-center uppercase align-middle transition-all bg-transparent border border-solid rounded-lg shadow-none cursor-pointer leading-pro ease-soft-in text-xs bg-150 active:shadow-soft-xs tracking-tight-rem border-slate-700 text-slate-700 hover:bg-transparent hover:text-slate-700 hover:shadow-none active:bg-slate-700 active:text-white active:hover:bg-transparent active:hover:text-slate-700 active:hover:shadow-none dark:border-white dark:text-white dark:hover:bg-transparent dark:hover:text-white dark:hover:shadow-none dark:active:bg-white dark:active:text-slate-700 dark:active:hover:bg-transparent dark:active:hover:text-white">
                          <i className="fas fa-pencil-alt text-2xs mr-1"></i>
                          EDIT
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

      {/* Transactions */}
      <div className="flex flex-wrap -mx-3">
        <div className="w-full max-w-full px-3 mt-6">
          <div className="relative flex flex-col min-w-0 break-words bg-white border-0 border-transparent border-solid shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
            <div className="p-4 pb-0 mb-0 rounded-t-2xl">
              <h6 className="mb-0 dark:text-white">Your Transaction's</h6>
              <p className="text-sm leading-normal dark:text-white dark:opacity-60">
                <i className="fa fa-arrow-up text-emerald-500" aria-hidden="true"></i>
                <span className="font-semibold">23%</span> this month
              </p>
            </div>
            <div className="flex-auto p-4">
              <div className="before:border-r-solid relative before:absolute before:top-0 before:left-4 before:h-full before:border-r-2 before:border-r-slate-100 dark:before:border-r-white/10 before:content-[''] before:lg:-ml-px">
                <div className="relative flex items-center p-0 mt-2 ml-0">
                  <div className="z-10 inline-flex items-center justify-center w-6 h-6 mb-0 font-semibold text-white transition-all duration-200 ease-in-out text-size-sm bg-emerald-500 rounded-circle leading-pro">
                    <i className="ni ni-bold-down leading-none text-size-xs relative top-[1px]"></i>
                  </div>
                  <div className="flex items-center justify-between w-full ml-4">
                    <div>
                      <h6 className="mb-0 text-sm font-semibold leading-normal text-size-sm dark:text-white">Netflix</h6>
                      <p className="mb-0 text-xs leading-tight dark:text-white/80 text-slate-400">27 March 2020, at 12:30 PM</p>
                    </div>
                    <div className="flex items-center text-sm leading-normal">
                      - $ 2,500
                      <button className="inline-block py-1 px-0 mb-0 ml-6 text-sm font-bold leading-normal text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer ease-soft-in bg-150 tracking-tight-rem bg-x-25 text-slate-700 dark:text-white">
                        <i className="fas fa-play mr-1"></i>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="relative flex items-center p-0 mt-4 ml-0">
                  <div className="z-10 inline-flex items-center justify-center w-6 h-6 mb-0 font-semibold text-white transition-all duration-200 ease-in-out text-size-sm bg-red-600 rounded-circle leading-pro">
                    <i className="ni ni-bold-up leading-none text-size-xs relative top-[1px]"></i>
                  </div>
                  <div className="flex items-center justify-between w-full ml-4">
                    <div>
                      <h6 className="mb-0 text-sm font-semibold leading-normal text-size-sm dark:text-white">Apple</h6>
                      <p className="mb-0 text-xs leading-tight dark:text-white/80 text-slate-400">27 March 2020, at 04:30 AM</p>
                    </div>
                    <div className="flex items-center text-sm leading-normal">
                      + $ 2,000
                      <button className="inline-block py-1 px-0 mb-0 ml-6 text-sm font-bold leading-normal text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer ease-soft-in bg-150 tracking-tight-rem bg-x-25 text-slate-700 dark:text-white">
                        <i className="fas fa-exclamation mr-1"></i>
                      </button>
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

export default Billing;