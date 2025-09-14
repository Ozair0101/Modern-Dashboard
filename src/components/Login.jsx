import React, { useState } from 'react';
import { Navigate, Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login, isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const result = await login(email, password);
    
    if (!result.success) {
      setError(result.error);
    }
    
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container sticky top-0 z-sticky">
        <div className="flex flex-wrap -mx-3">
          <div className="w-full max-w-full px-3 flex-0">
            {/* Navbar */}
            <nav className="absolute top-0 left-0 right-0 z-30 flex flex-wrap items-center px-4 py-2 m-6 mb-0 shadow-sm rounded-xl bg-white/80 backdrop-blur-2xl backdrop-saturate-200 lg:flex-nowrap lg:justify-start">
              <div className="flex items-center justify-between w-full p-0 px-6 mx-auto flex-wrap-inherit">
                <Link className="py-1.75 text-sm mr-4 ml-4 whitespace-nowrap font-bold text-slate-700 lg:ml-0" to="/"> 
                  Argon Dashboard 2 
                </Link>
                <div className="items-center flex-grow transition-all duration-500 lg:flex lg:basis-auto">
                  <ul className="flex flex-col pl-0 mx-auto mb-0 list-none lg:flex-row xl:ml-auto">
                    <li>
                      <Link className="flex items-center px-4 py-2 mr-2 font-normal transition-all ease-in-out duration-250 text-sm text-slate-700 lg:px-2" to="/">
                        <i className="mr-1 fa fa-home opacity-60"></i>
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link className="block px-4 py-2 mr-2 font-normal transition-all ease-in-out duration-250 text-sm text-slate-700 lg:px-2" to="/login">
                        <i className="mr-1 fas fa-key opacity-60"></i>
                        Sign In
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>

      <main className="mt-0 transition-all duration-200 ease-in-out">
        <section>
          <div className="relative flex items-center min-h-screen p-0 overflow-hidden bg-center bg-cover">
            <div className="container z-1">
              <div className="flex flex-wrap -mx-3">
                <div className="flex flex-col w-full max-w-full px-3 mx-auto lg:mx-0 shrink-0 md:flex-0 md:w-7/12 lg:w-5/12 xl:w-4/12">
                  <div className="relative flex flex-col min-w-0 break-words bg-transparent border-0 shadow-none lg:py4 dark:bg-gray-950 rounded-2xl bg-clip-border">
                    <div className="p-6 pb-0 mb-0">
                      <h4 className="font-bold">Sign In</h4>
                      <p className="mb-0">Enter your email and password to sign in</p>
                      
                      {/* Demo Credentials Info */}
                      <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                        <p className="text-sm text-blue-800 font-medium">Demo Credentials:</p>
                        <p className="text-xs text-blue-600">Email: admin@dashboard.com</p>
                        <p className="text-xs text-blue-600">Password: admin123</p>
                      </div>
                    </div>
                    
                    <div className="flex-auto p-6">
                      {error && (
                        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                          <p className="text-sm text-red-600">{error}</p>
                        </div>
                      )}
                      
                      <form role="form" onSubmit={handleSubmit}>
                        <div className="mb-4">
                          <input 
                            type="email" 
                            placeholder="Email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="focus:shadow-primary-outline dark:bg-gray-950 dark:placeholder:text-white/80 dark:text-white/80 text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding p-3 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none" 
                          />
                        </div>
                        <div className="mb-4">
                          <input 
                            type="password" 
                            placeholder="Password" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="focus:shadow-primary-outline dark:bg-gray-950 dark:placeholder:text-white/80 dark:text-white/80 text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding p-3 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none" 
                          />
                        </div>
                        <div className="flex items-center pl-12 mb-0.5 text-left min-h-6">
                          <input 
                            id="rememberMe" 
                            className="mt-0.5 rounded-10 duration-250 ease-in-out after:rounded-circle after:shadow-2xl after:duration-250 checked:after:translate-x-5.3 h-5 relative float-left -ml-12 w-10 cursor-pointer appearance-none border border-solid border-gray-200 bg-zinc-700/10 bg-none bg-contain bg-left bg-no-repeat align-top transition-all after:absolute after:top-px after:h-4 after:w-4 after:translate-x-px after:bg-white after:content-[''] checked:border-blue-500/95 checked:bg-blue-500/95 checked:bg-none checked:bg-right" 
                            type="checkbox" 
                            checked={rememberMe}
                            onChange={(e) => setRememberMe(e.target.checked)}
                          />
                          <label className="ml-2 font-normal cursor-pointer select-none text-sm text-slate-700" htmlFor="rememberMe">
                            Remember me
                          </label>
                        </div>
                        <div className="text-center">
                          <button 
                            type="submit" 
                            disabled={loading}
                            className="inline-block w-full px-16 py-3.5 mt-6 mb-0 font-bold leading-normal text-center text-white align-middle transition-all bg-blue-500 border-0 rounded-lg cursor-pointer hover:-translate-y-px active:opacity-85 hover:shadow-xs text-sm ease-in tracking-tight-rem shadow-md bg-150 bg-x-25 disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            {loading ? 'Signing in...' : 'Sign in'}
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="absolute top-0 right-0 flex-col justify-center hidden w-6/12 h-full max-w-full px-3 pr-0 my-auto text-center flex-0 lg:flex">
                  <div className="relative flex flex-col justify-center h-full bg-cover px-24 m-4 overflow-hidden bg-gradient-to-tl from-blue-500 to-violet-500 rounded-xl">
                    <span className="absolute top-0 left-0 w-full h-full bg-center bg-cover bg-gradient-to-tl from-blue-500 to-violet-500 opacity-60"></span>
                    <h4 className="z-20 mt-12 font-bold text-white">"Attention is the new currency"</h4>
                    <p className="z-20 text-white">The more effortless the writing looks, the more effort the writer actually put into the process.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Login;