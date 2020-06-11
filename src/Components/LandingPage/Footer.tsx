import React from 'react';
import {Link} from 'react-router-dom';
import footerBg from '../../assets/images/footbg.png';
import logo from '../../assets/icons/logo.svg';

const Footer = () => {
  return (
    <div
      className="footer ft-overlay text-white bg-cover bg-center relative pt-6 lg:px-24 xl:px-56"
      style={{backgroundImage: `url(${footerBg})`}}
    >
      <div className="centered-footer w-full lg:flex lg:flex-col">
        <div className="px-6 lg:px-0 z-10">
          <img src={logo} className="mr-20" alt="best tutor logo" />
        </div>
        <div className="footer-content flex flex-col justify-between py-4 px-6 lg:px-0 md:flex-row z-10">
          <div className="footer-1 w-full z-10 md:w-1/2">
            <span className="text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et
              erat felis. Sed odio lorem, facilisis non gravida nec, dignissim
              eget risus. Fusce ut vulputate est. Aliquam ut arcu
            </span>
            <div className="social-media-icons flex items-center pt-2 hidden">
              <ul className="flex">
                <li className="pr-2">
                  <Link to="#">
                    <img src="#" alt="Link to instagram" />
                  </Link>
                </li>
                <li className="pr-2">
                  <Link to="#">
                    <img src="#" alt="Link to twitter" />
                  </Link>
                </li>
                <li className="pr-2">
                  <Link to="#">
                    <img src="#" alt="Link to facebook" />
                  </Link>
                </li>
                <li className="pr-2">
                  <Link to="#">
                    <img src="#" alt="Link to gmail" />
                  </Link>
                </li>
                <li className="pr-2">
                  <Link to="#">
                    <img src="#" alt="Link to youTube" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex justify-between mt-4 z-50 md:mt-0 md:w-2/5">
            <div className="footer-2">
              <h1 className="text-lg mb-2">About Us</h1>
              <ul>
                <li>
                  <Link className="text-base" to="#">
                    Safety
                  </Link>
                </li>
                <li>
                  <Link className="text-base" to="#">
                    Find Courses
                  </Link>
                </li>
                <li>
                  <Link className="text-base" to="#">
                    Become a Tutor
                  </Link>
                </li>
                <li>
                  <Link className="text-base" to="#">
                    Get help
                  </Link>
                </li>
              </ul>
            </div>

            <div className="footer-3">
              <h1 className="text-lg mb-2">Courses</h1>
              <ul>
                <li>
                  <Link className="text-base" to="#">
                    Scrum Master
                  </Link>
                </li>
                <li>
                  <Link className="text-base" to="#">
                    Cloud
                  </Link>
                </li>
                <li>
                  <Link className="text-base" to="#">
                    PMP
                  </Link>
                </li>
                <li>
                  <Link className="text-base" to="#">
                    DevOp
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="app-service border-t-2 flex justify-between items-center py-4 px-6 lg:px-0 z-10 flex-col-reverse md:flex-row lg:w-full">
          <div className="mt-4 text-center text-xs w-full z-10 md:mt-0 md:text-left md:text-base">
            <span> Copyright 2020</span>
          </div>
          <ul className="flex z-10 w-full text-center flex-col md:flex-row md:justify-end">
            <li className="pl-4 text-base">
              <Link to="#">Term of use</Link>
            </li>
            <li className="pl-4 text-base">
              <Link to="#">Privacy Policy</Link>
            </li>
            <li className="pl-4 text-base">
              <Link to="#">Cookie Policy</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
