import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import E2CButton from "./common/Button";
import useWindowSize from "../hooks/useWindowSize";

export default () => {
  const size = useWindowSize();
  const [mobileShow, setMobileShow] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (size.width < 768) {
      setIsMobile(true);
    } else {
      setMobileShow(false);
      setIsMobile(false);
    }
  }, [size.width]);

  return (
    <header className={`py-2 relative z-20 ${mobileShow ? "bg-white" : ""}`}>
      <div className="container mx-auto flex justify-between flex-row">
        <div className="logo">
          <NavLink to="/">
            <img src="/images/logo-1.svg" alt="E2C Logo" />
          </NavLink>
        </div>
        <div className="flex-row items-center justify-center flex">
          <button
            className="block md:hidden mx-2"
            onClick={() => setMobileShow(!mobileShow)}
          >
            <img
              src={mobileShow ? "/images/close.png" : "/images/hamburgar.png"}
              className="w-8"
              alt="hamburgar"
            />
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
                  to="/agent"
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
      <nav className="block md:hidden relative">
        <ul className="absolute bg-white w-full left-0 right-0 top-0 flex flex-col justify-center">
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
              to="/agent"
              className="text-text-01 md:px-2 lg:px-4 xl:px-6"
            >
              Become an agent
            </NavLink>
          </li>
          <li>
            <NavLink to="/signup">Sign Up</NavLink>
          </li>
          <li>
            <NavLink to="/login">
              <E2CButton color="primary" bgColor="white" showBorder={false}>
                Login
              </E2CButton>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
