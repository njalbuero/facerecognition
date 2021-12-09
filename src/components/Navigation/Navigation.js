import React from "react";
import Logo from "../Logo/Logo";

const Navigation = ({ onRouteChange, isSignedIn }) => {
  return (
    <nav>
      <div className="flex justify-end">
        {isSignedIn ? (
          <div className="m-5">
            <div className="px-3 py-2 bg-indigo-500 rounded">
              <p
                onClick={() => {
                  onRouteChange("signin");
                }}
                className="text-lg text-white cursor-pointer hover:text-gray-800"
              >
                Sign Out
              </p>
            </div>
          </div>
        ) : (
          <div className="m-5">
            <div className="px-3 py-2 bg-indigo-500 rounded inline-block mr-2">
              <p
                onClick={() => {
                  onRouteChange("signin");
                }}
                className="text-lg text-white cursor-pointer hover:text-gray-800"
              >
                Sign In
              </p>
             
            </div>
            <div className="px-3 py-2 bg-indigo-500 rounded inline-block">
              <p
                onClick={() => {
                  onRouteChange("register");
                }}
                className="text-lg text-white cursor-pointer hover:text-gray-800"
              >
                Register
              </p>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
