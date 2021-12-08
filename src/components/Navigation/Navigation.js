import React from "react";
import Logo from "../Logo/Logo";

const Navigation = () => {
  return (
    <nav>
      <div className="flex justify-between">
        <div className="m-5">
          <Logo />
        </div>
        <div className="m-5">
          <div className="px-3 py-2 bg-purple-500 rounded">
            <p className="text-lg text-white cursor-pointer hover:text-gray-800">
              Sign Out
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
