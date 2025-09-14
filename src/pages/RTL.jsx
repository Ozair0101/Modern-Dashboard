import React from 'react';
import DashboardLayout from '../components/DashboardLayout';

const RTL = () => {
  return (
    <DashboardLayout>
      <div className="flex flex-wrap -mx-3" dir="rtl">
        <div className="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4">
          <div className="relative flex flex-col min-w-0 break-words bg-white shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
            <div className="flex-auto p-4">
              <div className="flex flex-row -mx-3">
                <div className="flex-none w-2/3 max-w-full px-3">
                  <div>
                    <p className="mb-0 font-sans text-sm font-semibold leading-normal uppercase dark:text-white dark:opacity-60">أموال اليوم</p>
                    <h5 className="mb-2 font-bold dark:text-white">$53,000</h5>
                    <p className="mb-0 dark:text-white dark:opacity-60">
                      <span className="text-sm font-bold leading-normal text-emerald-500">+55%</span>
                      منذ الأمس
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
                    <p className="mb-0 font-sans text-sm font-semibold leading-normal uppercase dark:text-white dark:opacity-60">مستخدمو اليوم</p>
                    <h5 className="mb-2 font-bold dark:text-white">2,300</h5>
                    <p className="mb-0 dark:text-white dark:opacity-60">
                      <span className="text-sm font-bold leading-normal text-emerald-500">+3%</span>
                      منذ الأسبوع الماضي
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
                    <p className="mb-0 font-sans text-sm font-semibold leading-normal uppercase dark:text-white dark:opacity-60">عملاء جدد</p>
                    <h5 className="mb-2 font-bold dark:text-white">+3,462</h5>
                    <p className="mb-0 dark:text-white dark:opacity-60">
                      <span className="text-sm font-bold leading-normal text-red-600">-2%</span>
                      منذ الربع الماضي
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
                    <p className="mb-0 font-sans text-sm font-semibold leading-normal uppercase dark:text-white dark:opacity-60">المبيعات</p>
                    <h5 className="mb-2 font-bold dark:text-white">$103,430</h5>
                    <p className="mb-0 dark:text-white dark:opacity-60">
                      <span className="text-sm font-bold leading-normal text-emerald-500">+5%</span>
                      من الشهر الماضي
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

      <div className="flex flex-wrap mt-6 -mx-3" dir="rtl">
        <div className="w-full max-w-full px-3 mt-0 lg:w-7/12 lg:flex-none">
          <div className="border-black/12.5 dark:bg-slate-850 dark:shadow-dark-xl shadow-xl relative z-20 flex min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border">
            <div className="border-black/12.5 mb-0 rounded-t-2xl border-b-0 border-solid p-6 pt-4 pb-0">
              <h6 className="capitalize dark:text-white">نظرة عامة على المبيعات</h6>
              <p className="mb-0 text-sm leading-normal dark:text-white dark:opacity-60">
                <i className="fa fa-arrow-up text-emerald-500"></i>
                <span className="font-semibold">4% أكثر</span> في عام 2021
              </p>
            </div>
            <div className="flex-auto p-4">
              <div className="before:border-r-solid relative before:absolute before:top-0 before:right-4 before:h-full before:border-r-2 before:border-r-slate-100 dark:before:border-r-white/10 before:content-[''] before:lg:-mr-px">
                <div className="relative flex items-center p-0 mt-2 mr-0">
                  <div className="z-10 inline-flex items-center justify-center w-6 h-6 mb-0 font-semibold text-white transition-all duration-200 ease-in-out text-size-sm bg-emerald-500 rounded-circle leading-pro">
                    <i className="ni ni-bell-55 leading-none text-size-xs relative top-[1px]"></i>
                  </div>
                  <div className="flex items-center justify-between w-full mr-4">
                    <div>
                      <h6 className="mb-0 text-sm font-semibold leading-normal text-size-sm dark:text-white">$2400, تغييرات التصميم</h6>
                      <p className="mb-0 text-xs leading-tight dark:text-white/80 text-slate-400">22 ديسمبر 7:20 مساءً</p>
                    </div>
                  </div>
                </div>

                <div className="relative flex items-center p-0 mt-2 mr-0">
                  <div className="z-10 inline-flex items-center justify-center w-6 h-6 mb-0 font-semibold text-white transition-all duration-200 ease-in-out text-size-sm bg-red-600 rounded-circle leading-pro">
                    <i className="ni ni-html5 leading-none text-size-xs relative top-[1px]"></i>
                  </div>
                  <div className="flex items-center justify-between w-full mr-4">
                    <div>
                      <h6 className="mb-0 text-sm font-semibold leading-normal text-size-sm dark:text-white">طلب جديد #1832412</h6>
                      <p className="mb-0 text-xs leading-tight dark:text-white/80 text-slate-400">21 ديسمبر 11 مساءً</p>
                    </div>
                  </div>
                </div>

                <div className="relative flex items-center p-0 mt-2 mr-0">
                  <div className="z-10 inline-flex items-center justify-center w-6 h-6 mb-0 font-semibold text-white transition-all duration-200 ease-in-out text-size-sm bg-blue-500 rounded-circle leading-pro">
                    <i className="ni ni-cart leading-none text-size-xs relative top-[1px]"></i>
                  </div>
                  <div className="flex items-center justify-between w-full mr-4">
                    <div>
                      <h6 className="mb-0 text-sm font-semibold leading-normal text-size-sm dark:text-white">مدفوعات الخادم لشهر أبريل</h6>
                      <p className="mb-0 text-xs leading-tight dark:text-white/80 text-slate-400">21 ديسمبر 9:34 مساءً</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full max-w-full px-3 lg:w-5/12 lg:flex-none">
          <div className="border-black/12.5 shadow-xl dark:bg-slate-850 dark:shadow-dark-xl relative flex min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border">
            <div className="p-4 pb-0 mb-0 rounded-t-4">
              <h6 className="mb-0 dark:text-white">نظرة عامة على الطلبات</h6>
              <p className="text-sm leading-normal dark:text-white dark:opacity-60">
                <i className="fa fa-arrow-up text-emerald-500" aria-hidden="true"></i>
                <span className="font-semibold">24%</span> هذا الشهر
              </p>
            </div>
            <div className="flex-auto p-4">
              <div className="h-60">
                <canvas id="chart-bar-rtl" height="300"></canvas>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default RTL;