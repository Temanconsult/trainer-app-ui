import React from 'react';
import {Link} from 'react-router-dom';

const MobileHeader = () => {
  return (
    <div>
      <div className="header">
        <nav className="pl-4">
          <ul>
            <li>
              <Link to="!#">
                Home
              </Link>
            </li>
            <li>
              <Link to="!#">
                About
              </Link>
            </li>
            <li>
              <Link to="!#">
                Courses
              </Link>
            </li>
            <li>
              <Link to="!#">
                Tutors
              </Link>
            </li>
            <li className="pr-6">
              <Link to="!#">
                Login
              </Link>
            </li>
            <li>
              <Link to="!#">
                Sign up
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MobileHeader;
