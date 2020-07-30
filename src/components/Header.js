import React from "react";
import { NavLink } from "react-router-dom";
import E2CButton from "./common/Button";

export default () => {
  return (
    <header className="bg-white py-2">
      <div className="container mx-auto flex justify-between flex-row">
        <div className="logo">
          <NavLink to="/">
            <img src="/images/logo-1.svg" alt="E2C Logo" />
          </NavLink>
        </div>
        <div className="flex-row items-center justify-center flex">
          <button className="block md:hidden mx-2">
            <img src="/images/hamburgar.png" className="w-8" alt="hamburgar" />
          </button>
          <nav className="hidden md:block">
            <ul className="flex flex-row items-center justify-center uppercase">
              <li>
                <NavLink
                  to="/courses"
                  className="text-text-01 md:px-2 lg:px-4 xl:px-6"
                >
                  Courses
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/solutions"
                  className="text-text-01 md:px-2 lg:px-4 xl:px-6"
                >
                  Solutions
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/pricing"
                  className="text-text-01 md:px-2 lg:px-4 xl:px-6"
                >
                  Pricing
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/agent_signup"
                  className="text-text-01 md:px-2 lg:px-4 xl:px-6"
                >
                  Become an agent
                </NavLink>
              </li>
            </ul>
          </nav>
          <div className="hidden md:block">
            <NavLink to="/signup">
              <E2CButton color="white" bgColor="primary">
                Sign Up
              </E2CButton>
            </NavLink>
            <NavLink to="/login">
              <E2CButton color="primary" bgColor="white" showBorder={false}>
                Login
              </E2CButton>
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};
