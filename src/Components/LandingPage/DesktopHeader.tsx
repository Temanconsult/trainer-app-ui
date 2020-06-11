import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../assets/icons/logo.svg';

const DesktopHeader = () => {
  return (
    <div className="header hidden pt-6 px-2 md:flex md:flex-row items-center lg:p-16 lg:pr-8 lg:pt-10">
      <img
        src={logo}
        className="mr-10 pl-12 w-1/6 xl:mr-20"
        alt="best tutor logo"
      />
      <nav className="nav md:flex w-full md:justify-end lg:items-center lg:flex-row lg:justify-between">
        <ul className="flex items-center lg:w-2/5">
          <li>
            <Link to="!#" className="pr-8">
              Home
            </Link>
          </li>
          <li>
            <Link to="!#" className="pr-8">
              About
            </Link>
          </li>
          <li>
            <Link to="!#" className="pr-8">
              Courses
            </Link>
          </li>
          <li>
            <Link to="!#" className="pr-8">
              Tutors
            </Link>
          </li>
        </ul>
        <ul className="flex items-center justify-end mt-6 md:mt-0 lg:mt-0 lg:w-1/2">
          <li className="hidden xl:block pr-6">
            <span>Teach On Best Tutor</span>
          </li>
          <li className="pr-6">
            <Link
              to="!#"
              className="rounded-full py-3 px-8 border border-custom-lborder inline-block"
            >
              Login
            </Link>
          </li>
          <li>
            <Link to="!#" className="pri-btn inline-block">
              Sign up
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default DesktopHeader;
