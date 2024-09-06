import React from 'react';

const MainPage = () => {
  return (
    <div className="flex flex-col lg:flex-row h-screen">
      {/* Left Window: Login Form */}
      <div className="lg:w-1/2 w-full flex items-center justify-center bg-slate-700 p-8">
        <div className="max-w-md w-full space-y-6">
          {/* Title */}
          <h2 className="text-center text-4xl font-extrabold text-white">
            infinity X <br/>Welcome Back Admin
          </h2>
          {/* Form */}
        
          <form className="mt-8 space-y-6 ">
            <div className="rounded-md shadow-sm -space-y-px ">
              <div>
                {/* Email Input */}
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                {/* Password Input */}
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>
            {/* Sign In Button */}
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Right Window: Flower Image */}
      <div className="lg:w-1/2 w-full flex items-center justify-center bg-gray-200">
        <img
          src="https://media.istockphoto.com/id/1746077663/photo/graduate-certificate-program-online-study-creative.jpg?s=612x612&w=0&k=20&c=jt-FZvoro7WDVF8hanbWTSAo8jvGX-pQg_pMr18uY58="
          alt="Flower"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default MainPage;
