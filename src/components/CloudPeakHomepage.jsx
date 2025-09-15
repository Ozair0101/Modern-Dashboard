import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const CloudPeakHomepage = () => {
  useEffect(() => {
    // Initialize AOS animations
    if (window.AOS) {
      window.AOS.init({
        once: true,
        duration: 500,
        offset: 100,
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-secondary-900">
      {/* Header */}
      <header className="header z-30">
        <nav className="navbar container">
          {/* Logo */}
          <div className="order-0">
            <Link className="navbar-brand block" to="/">
              <img
                src="/assets/images/logo.svg"
                className="h-[50px]"
                height="50"
                width="175"
                loading="eager"
                alt="CloudPeak Logo"
              />
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <input id="nav-toggle" type="checkbox" className="hidden" title="nav-toggle" />
          <label
            htmlFor="nav-toggle"
            className="order-3 cursor-pointer flex items-center lg:hidden text-white/70 lg:order-1"
          >
            <div className="space-y-3 w-6 -translate-y-[20%]" id="show-button">
              <div className="w-full h-[2px] bg-text transition-transform" id="ham_top"></div>
              <div className="w-full h-[2px] bg-text transition-transform" id="ham_bottom"></div>
            </div>
          </label>

          {/* Navigation Menu */}
          <ul
            id="nav-menu"
            className="navbar-nav shadow-inset shadow-shadow/30 lg:shadow-none order-3 hidden lg:order-1 lg:flex items-center lg:w-auto lg:space-x-2 lg:pb-0"
          >
            <li className="nav-item">
              <a href="#features" className="nav-link">Features</a>
            </li>
            <li className="nav-item">
              <a href="#pricing" className="nav-link">Pricing</a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link">Contact Us</a>
            </li>
            <li className="inline-block lg:hidden mt-4 lg:mt-0">
              <Link className="btn btn-secondary" to="/login">Get Started</Link>
            </li>
          </ul>

          <div className="order-1 ml-auto flex items-center md:order-2 lg:ml-0">
            <Link className="btn btn-secondary hidden lg:inline-block" to="/login">
              Admin Dashboard
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative lg:pb-[450px] overflow-hidden">
        <div className="container relative">
          <div className="row justify-center">
            <div className="xl:col-8 py-10 text-center">
              <div className="flex flex-col items-center gap-8">
                <div className="overflow-hidden">
                  <div className="animate-headshot">
                    <div className="shadow-inset-sm border border-border px-4 pt-1.5 pb-1 rounded-3xl text-white text-sm font-light">
                      <p>New version available. <a href="#" className="text-primary-400 hover:text-primary-300">Download now!</a></p>
                    </div>
                  </div>
                </div>
                <div>
                  <h1
                    data-aos="fade-up-sm"
                    className="font-normal text-h2 lg:text-[5rem] lg:leading-[1.2] mb-3 tracking-tighter"
                  >
                    Elevate Your Business with CloudPeak
                  </h1>
                  <div className="xl:col-9 mx-auto">
                    <p data-aos="fade-up-sm" data-aos-delay="100" className="text-lg text-white/80">
                      Empowering Your Success with Cutting-Edge SaaS Solutions Built
                      for Scalability, Efficiency, and Growth.
                    </p>
                  </div>
                </div>
                <div
                  className="flex flex-wrap gap-3 justify-center"
                  data-aos="fade-up-sm"
                  data-aos-delay="150"
                >
                  <Link
                    className="btn btn-primary group flex items-center max-w-max gap-1"
                    to="/login"
                  >
                    <span>Get Free Version</span>
                    <div className="sr-only">Details</div>
                    <div className="relative w-5 h-5 grid place-items-center overflow-hidden">
                      <i className="fa fa-arrow-right -rotate-45 group-hover:translate-x-full group-hover:-translate-y-full transition-transform duration-500 ease-out w-5 h-5 grid place-items-center"></i>
                      <i className="fa fa-arrow-right -rotate-45 absolute top-full right-full group-hover:translate-x-full group-hover:-translate-y-full transition-transform duration-500 ease-out w-5 h-5 grid place-items-center"></i>
                    </div>
                  </Link>
                  <a className="btn btn-secondary border border-tertiary/70" href="#pricing">
                    Get Pro Version
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard Preview */}
        <div className="relative container-fluid">
          <div className="mt-5 lg:mt-16 pb-10" data-aos="fade-up-sm" data-aos-delay="200">
            <div className="p-6 border border-white/15 rounded-4xl mx-auto w-full sm:w-2/3 xl:max-w-[950px] object-cover lg:absolute lg:top-0 lg:left-1/2 lg:-translate-x-1/2">
              <img
                className="rounded-3xl overflow-hidden"
                src="/assets/images/desktop_dashboard.webp"
                width="1024"
                height="784"
                loading="eager"
                alt="Dashboard Preview"
              />
            </div>
          </div>
        </div>

        {/* Background Shape */}
        <div
          className="hidden lg:block absolute left-10 -bottom-20 w-full -z-10"
          data-aos="fade-in"
          data-aos-delay="500"
          data-aos-duration="2000"
          data-aos-easing="ease-out"
        >
          <img
            src="/assets/images/shapes/hero_blob.webp"
            className="w-full max-w-[2000px] mx-auto lg:scale-110"
            loading="eager"
            alt=""
          />
        </div>
      </section>

      {/* Trusted Brands */}
      <section className="section pt-20 xl:pt-24">
        <div className="container">
          <p className="text-center text-lg mb-10" data-aos="fade-up-sm">
            Trusted by thousands of companies worldwide
          </p>
          <div data-aos="fade-up-sm" data-aos-delay="100">
            <div className="flex flex-wrap justify-around gap-8 opacity-60">
              <img src="/assets/images/brands/boltshift.svg" alt="boltshift" className="h-8" />
              <img src="/assets/images/brands/featherdev.svg" alt="featherdev" className="h-8" />
              <img src="/assets/images/brands/globalbank.svg" alt="globalbank" className="h-8" />
              <img src="/assets/images/brands/lightbox.svg" alt="lightbox" className="h-8" />
              <img src="/assets/images/brands/nietzsche.svg" alt="nietzsche" className="h-8" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitments */}
      <section id="features" className="section">
        <div className="container">
          <div className="grid lg:grid-cols-3 items-center gap-8">
            <div data-aos="fade-up-sm">
              <h2 className="mb-4 text-h4 text-white">We Help Transform Your Business</h2>
              <p className="text-white/80">
                Our mission is to empower individuals and organizations to unleash
                their creative potential
              </p>
            </div>
            
            {/* Feature Cards */}
            <div data-aos="fade-up-sm" data-aos-delay="100">
              <div className="feature-card">
                <div className="w-[60px] h-[60px] bg-theme-light rounded-full grid place-items-center text-primary">
                  <img src="/assets/images/icons/windspeed.svg" alt="icon" loading="lazy" />
                </div>
                <h3 className="text-h5 text-white">Streamlined Workflow</h3>
                <p className="text-sm text-white/80">Effortlessly Collaborate Across Teams and Projects with CloudPeak's Seamless and Intuitive Collaboration Tools</p>
              </div>
            </div>

            <div data-aos="fade-up-sm" data-aos-delay="200">
              <div className="feature-card">
                <div className="w-[60px] h-[60px] bg-theme-light rounded-full grid place-items-center text-primary">
                  <img src="/assets/images/icons/windspeed.svg" alt="icon" loading="lazy" />
                </div>
                <h3 className="text-h5 text-white">Robust Data Security</h3>
                <p className="text-sm text-white/80">Protect Your Sensitive Information with Cutting-Edge Encryption and Security Measures solutions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="section">
        <div className="container">
          <div className="section-intro text-center lg:col-8 mx-auto">
            <h2 data-aos="fade-up-sm" className="title">Our Journey and Mission</h2>
            <p data-aos="fade-up-sm" data-aos-delay="100" className="subtitle">
              Explore Our Inspirational Journey, Values, and Commitment to Providing
              Exceptional SaaS Solutions That Empower Your Business
            </p>
          </div>
          <div className="section-content lg:px-20">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Integration Card */}
              <div data-aos="fade-up-sm" data-aos-delay="100">
                <div className="card">
                  <div className="mb-10">
                    <h2 className="mb-4 text-h4 text-white">Seamless Integration</h2>
                    <p className="text-white/80">CloudPeak's Flexible Integration Options for Enhanced Efficiency.</p>
                  </div>
                  <img
                    draggable="false"
                    src="/assets/images/cards/faster_integration.webp"
                    loading="lazy"
                    width="520"
                    height="480"
                    className="w-full rounded-xl"
                    alt="Seamless Integration"
                  />
                </div>
              </div>

              {/* Scalable Infrastructure Card */}
              <div data-aos="fade-up-sm" data-aos-delay="150">
                <div className="card">
                  <div className="mb-10">
                    <h2 className="mb-4 text-h4 text-white">Scalable Infrastructure</h2>
                    <p className="text-white/80">CloudPeak's Scalable Infrastructure Can Handle Your Increasing Demands and Workloads.</p>
                  </div>
                  <img
                    draggable="false"
                    src="/assets/images/cards/happy_customers.webp"
                    loading="lazy"
                    width="520"
                    height="480"
                    className="w-full rounded-xl"
                    alt="Scalable Infrastructure"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="section">
        <div className="container">
          <div className="section-intro lg:col-6 mx-auto text-center">
            <h2 className="title" data-aos="fade-up-sm">Choose A Plan</h2>
            <p className="subtitle" data-aos="fade-up-sm" data-aos-delay="100">
              Created to Simplify Your Experience and Unlock the Advantages of
              CloudPeak's Innovative Technologies
            </p>

            {/* Price toggle buttons */}
            <div
              data-aos="fade-up-sm"
              data-aos-delay="150"
              className="mt-10 flex items-center gap-x-3 lg:gap-x-5 justify-center text-sm font-light transition-all"
            >
              <span className="text-white duration-500" id="monthly">Monthly</span>
              <label className="inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  value=""
                  aria-label="pricing switch"
                  id="pricing-switch"
                  className="sr-only peer"
                />
                <div className="relative w-[65px] h-[32px] bg-primary peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-[33px] rtl:peer-checked:after:-translate-x-[22px] peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-[24px] after:w-[24px] after:transition-all after:duration-500 after:ease-in-out peer-checked:bg-primary"></div>
              </label>
              <span id="yearly" className="duration-500 text-white/60">Yearly</span>
            </div>
          </div>

          <div className="section-content lg:px-20" data-aos="fade-up-sm" data-aos-delay="150">
            {/* Monthly Price Cards */}
            <div id="monthly-card-container">
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
                {/* Basic Plan */}
                <div className="pricing-card">
                  <div className="pb-5 border-b-[2px] border-border/60 mb-5">
                    <p className="font-medium text-lg text-white">Basic</p>
                    <p className="text-sm font-light text-white/60">For solo designers</p>
                  </div>
                  <div className="flex flex-col justify-between flex-grow gap-y-10 items-start">
                    <div className="flex flex-col gap-y-10 items-start">
                      <div>
                        <h3 className="mb-1 text-white text-3xl font-bold">$19</h3>
                        <p className="text-sm font-light text-white/60">per person, per month</p>
                      </div>
                      <ul className="text-sm font-light green-tick-list text-white/80">
                        <li>Basic Dashboard</li>
                        <li>Simple Expense Tracking</li>
                        <li>Monthly Financial Summary</li>
                        <li>1 Financial Account</li>
                        <li>Email Support</li>
                      </ul>
                    </div>
                    <Link className="btn btn-primary rounded-full mt-auto w-full justify-center" to="/login">
                      Get Started Free
                    </Link>
                  </div>
                </div>

                {/* Premium Plan */}
                <div className="pricing-card featured">
                  <div className="pb-5 border-b-[2px] border-border/60 mb-5">
                    <div className="flex items-center gap-x-2">
                      <p className="font-medium text-lg text-white">Premium</p>
                      <div className="bg-green-400 flex items-center rounded-full">
                        <span className="text-[0.625rem] leading-none py-2 px-4 text-white inline-block font-semibold">
                          Popular
                        </span>
                      </div>
                    </div>
                    <p className="text-sm font-light text-white/60">For small teams</p>
                  </div>
                  <div className="flex flex-col justify-between flex-grow gap-y-10 items-start">
                    <div className="flex flex-col gap-y-10 items-start">
                      <div>
                        <h3 className="mb-1 text-white text-3xl font-bold">$49</h3>
                        <p className="text-sm font-light text-white/60">per person, per month</p>
                      </div>
                      <ul className="text-sm font-light green-tick-list text-white/80">
                        <li>Comprehensive Dashboard</li>
                        <li>Advanced Budgeting Tools</li>
                        <li>Weekly Financial Reports</li>
                        <li>5 Financial Accounts</li>
                        <li>Priority Email Support</li>
                      </ul>
                    </div>
                    <Link className="btn btn-primary rounded-full mt-auto w-full justify-center" to="/login">
                      Get Started Free
                    </Link>
                  </div>
                </div>

                {/* Enterprise Plan */}
                <div className="pricing-card">
                  <div className="pb-5 border-b-[2px] border-border/60 mb-5">
                    <p className="font-medium text-lg text-white">Enterprise</p>
                    <p className="text-sm font-light text-white/60">For large organizations</p>
                  </div>
                  <div className="flex flex-col justify-between flex-grow gap-y-10 items-start">
                    <div className="flex flex-col gap-y-10 items-start">
                      <div>
                        <h3 className="mb-1 text-white text-3xl font-bold">$99</h3>
                        <p className="text-sm font-light text-white/60">per person, per month</p>
                      </div>
                      <ul className="text-sm font-light green-tick-list text-white/80">
                        <li>Customizable Dashboard</li>
                        <li>Advanced Forecasting Tools</li>
                        <li>Real-time Financial Reporting</li>
                        <li>Unlimited Financial Accounts</li>
                        <li>24/7 Dedicated Support</li>
                      </ul>
                    </div>
                    <Link className="btn btn-primary rounded-full mt-auto w-full justify-center" to="/login">
                      Get Started Free
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section">
        <div className="container">
          <div className="border border-border bg-theme-light/60 rounded-3xl sm:rounded-4xl overflow-hidden relative">
            <div className="grid sm:grid-cols-12">
              <div className="px-5 sm:px-12 pr-12 py-7 sm:py-14 relative z-30 sm:col-span-7">
                <div className="section-intro pb-0">
                  <h2 className="title">Ready to Transform Your Experience?</h2>
                  <p className="subtitle mb-10">
                    Get Started Now and Explore New Possibilities with Our
                    Comprehensive Resources.
                  </p>
                  <Link
                    className="btn btn-primary group flex items-center max-w-max gap-1"
                    to="/login"
                  >
                    <span>Get Free Version</span>
                    <div className="sr-only">Details</div>
                    <div className="relative w-5 h-5 grid place-items-center overflow-hidden">
                      <i className="fa fa-arrow-right -rotate-45 group-hover:translate-x-full group-hover:-translate-y-full transition-transform duration-500 ease-out w-5 h-5 grid place-items-center"></i>
                      <i className="fa fa-arrow-right -rotate-45 absolute top-full right-full group-hover:translate-x-full group-hover:-translate-y-full transition-transform duration-500 ease-out w-5 h-5 grid place-items-center"></i>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="relative h-[200px] sm:h-0 sm:col-span-5 z-20">
                <div className="absolute left-10 top-10 sm:left-0 sm:top-20 z-20 rounded-3xl border border-white/15 p-4">
                  <img
                    src="/assets/images/desktop_dashboard.webp"
                    loading="lazy"
                    className="sm:min-w-[700px] min-w-[500px] rounded-2xl overflow-hidden"
                    alt="Dashboard Image"
                    draggable="false"
                  />
                </div>
              </div>
            </div>
            {/* Background Shape */}
            <img
              src="/assets/images/shapes/card_bg_blob.webp"
              loading="lazy"
              alt=""
              draggable="false"
              data-aos="fade-in"
              data-aos-duration="1600"
              data-aos-easing="ease-out"
              className="absolute right-0 bottom-10 w-full max-w-[700px] z-10 opacity-80"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact">
        <div className="container">
          <div className="pb-11 border-b border-white/10">
            <div className="flex flex-col xl:flex-row items-start lg:items-center justify-between gap-8">
              <div className="flex flex-col lg:flex-row gap-8 items-start lg:items-center">
                <Link className="navbar-brand block" to="/">
                  <img
                    src="/assets/images/logo.svg"
                    className=""
                    width="205"
                    height="56"
                    alt="cloudpeak"
                  />
                </Link>
                <div className="w-[1px] bg-white h-5 hidden lg:block"></div>
                <p className="xl:max-w-[420px] text-white/80">
                  Solutions that drive success and propel your business forward
                </p>
              </div>

              <ul className="flex flex-col sm:flex-row flex-wrap gap-8">
                <li>
                  <a href="#features" className="flex items-center gap-x-1 hover:text-white transition-colors duration-300 text-white/80">
                    <span>Features</span>
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="flex items-center gap-x-1 hover:text-white transition-colors duration-300 text-white/80">
                    <span>Pricing</span>
                  </a>
                </li>
                <li>
                  <Link to="/login" className="flex items-center gap-x-1 hover:text-white transition-colors duration-300 text-white/80">
                    <span>Admin Dashboard</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-11 pb-20">
            <div className="flex flex-col lg:flex-row gap-8 justify-between">
              <div className="order-2 lg:order-1">
                <p className="mb-1.5 text-white/60">Copyright © 2024 CloudPeak.</p>
                <p className="text-white/60">All Rights Reserved</p>
              </div>
              <div className="order-1 lg:order-2">
                <ul className="flex flex-col sm:flex-row flex-wrap gap-8">
                  <li>
                    <a href="#" className="flex items-center gap-x-1 hover:text-white transition-colors duration-300 text-white/80">
                      <span>Privacy Policy</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center gap-x-1 hover:text-white transition-colors duration-300 text-white/80">
                      <span>Terms & Conditions</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="order-3 lg:order-3">
                {/* Social links */}
                <ul className="text-white flex items-center gap-5">
                  <li>
                    <a
                      aria-label="facebook"
                      href="#"
                      className="inline-block hover:text-primary transition-colors duration-300 w-6 h-6"
                    >
                      <img src="/assets/images/icons/facebook.svg" alt="facebook" />
                    </a>
                  </li>
                  <li>
                    <a
                      aria-label="instagram"
                      href="#"
                      className="inline-block hover:text-primary transition-colors duration-300 w-6 h-6"
                    >
                      <img src="/assets/images/icons/instagram.svg" alt="instagram" />
                    </a>
                  </li>
                  <li>
                    <a
                      aria-label="linkedin"
                      href="#"
                      className="inline-block hover:text-primary transition-colors duration-300 w-5 h-5"
                    >
                      <img src="/assets/images/icons/linkedin.svg" alt="linkedin" />
                    </a>
                  </li>
                  <li>
                    <a
                      aria-label="x"
                      href="#"
                      className="inline-block hover:text-primary transition-colors duration-300 w-5 h-5"
                    >
                      <img src="/assets/images/icons/x.svg" alt="x" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CloudPeakHomepage;