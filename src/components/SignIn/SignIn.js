import React from "react";

const SignIn = ({ onRouteChange }) => {
  return (
    <div className="flex items-center ">
      <div className="container mx-auto">
        <div className="max-w-md mx-auto my-10">
          <div className="text-center">
            <h1 className="my-3 text-3xl font-semibold  text-white">Sign in</h1>
          </div>
          <div className="m-7">
            <form action="">
              <div className="mb-6">
                <label className="block mb-2 text-sm text-white text-left">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="you@company.com"
                  className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                />
              </div>
              <div className="mb-6">
                <div className="flex justify-between mb-2">
                  <label className="text-sm text-white">
                    Password
                  </label>
                </div>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Your Password"
                  className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                />
              </div>
              <div className="mb-6">
                <button
                  onClick={() => onRouteChange("home")}
                  type="button"
                  className="w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none"
                >
                  Sign in
                </button>
              </div>
              <p className="text-sm text-center text-gray-300">
                Don&#x27;t have an account yet?{" "}
                <span
                  onClick={() => onRouteChange("register")}
                  className="text-indigo-300 focus:text-indigo-400 cursor-pointer"
                >
                  Register
                </span>
                .
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
