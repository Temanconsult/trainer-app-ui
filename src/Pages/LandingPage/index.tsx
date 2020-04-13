import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../assets/icons/logo.svg';
import tutor from '../../assets/images/tut&learner.svg';
import datascience from '../../assets/images/datascience.svg';
import pmp from '../../assets/images/pmp.svg';
import devops from '../../assets/images/devops.svg';
import js from '../../assets/images/js.png';
import avatar from '../../assets/images/avatar.png';
import tutorsBg from '../../assets/images/ist-bg.svg';
import footerBg from '../../assets/images/footbg.png';
import more from '../../assets/icons/more.svg';
import {ReactComponent as Arrow} from '../../assets/icons/arrow.svg';

export const LandingPage = () => {
  return (
    <div className="landing-page__container">
      {/* header */}
      <div className="header-hero py-6 lg:px-16">
        <div className="header px-2 flex flex-row items-center lg:p-16 lg:pr-8 lg:pt-10">
          <img src={logo} className="mr-10 xl:mr-20" alt="best tutor logo" />
          {/* md:flex-col */}
          <nav className="nav hidden md:flex w-full md:justify-end lg:items-center lg:flex-row lg:justify-between">
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

        {/* hero */}
        <div className="hero flex pt-16 md:px-16">
          <div className="left items-center md:items-start w-full p-2  flex flex-col justify-evenly h-full lg:w-2/5">
            <h1 className="text-3xl font-bold mb-10">
              Learn with ease <br /> and at your own pace
            </h1>
            <span className="text-base mb-10 xl:text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et
              erat felis. Sed odio lorem, facilisis non gravida nec, dignissim
              eget risus. Fusce ut vulputate est. Aliquam ut arcu efficitur nisl
              aliquam pulvinar eu nec libero. Proin commodo vel elit id sodales.
            </span>
            <Link to="!#" className="pri-btn text-xl inline-block">
              Learn more
            </Link>
          </div>
          <div className="right flex justify-end h-full w-full hidden lg:flex lg:w-3/5">
            <img
              src={tutor}
              alt="teacher teaching a student"
              className="h-auto"
            />
          </div>
        </div>
      </div>

      {/* courses */}
      <div className="courses h-auto p-2 lg:px-32">
        <h1 className="text-2xl font-medium p-6 text-white text-center">
          Our Courses
        </h1>
        <div className="courses-list grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          <div className="course-card flex flex-col justify-evenly shadow-2xl bg-white px-6 rounded items-start">
            <img src={datascience} alt="data science course" />
            <h1 className="font-medium text-black text-2xl">Scrum Master</h1>
            <span className="text-xl text-gray-900">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et
              erat felis. Sed odio lorem, facilisis
            </span>
            <Link to="!#">
              <Arrow />
            </Link>
          </div>
          <div className="course-card flex flex-col justify-evenly shadow-2xl bg-white px-6 rounded items-start">
            <img src={pmp} alt="data science course" />
            <h1 className="font-medium text-black text-2xl">PMP</h1>
            <span className="text-xl text-gray-900">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et
              erat felis. Sed odio lorem, facilisis
            </span>
            <Link to="!#">
              <Arrow />
            </Link>
          </div>
          <div className="course-card flex flex-col justify-evenly shadow-2xl bg-white px-6 rounded items-start">
            <img src={devops} alt="data science course" />
            <h1 className="font-medium text-black text-2xl">Devops</h1>
            <span className="text-xl text-gray-900">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et
              erat felis. Sed odio lorem, facilisis
            </span>
            <Link to="!#">
              <Arrow />
            </Link>
          </div>
          <div className="course-card flex flex-col justify-evenly shadow-2xl bg-white px-6 rounded items-start">
            <img src={js} alt="data science course" />
            <h1 className="font-medium text-black text-2xl">JavaScript</h1>
            <span className="text-xl text-gray-900">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et
              erat felis. Sed odio lorem, facilisis
            </span>
            <Link to="!#">
              <Arrow />
            </Link>
          </div>
          <div className="course-card flex flex-col justify-evenly shadow-2xl bg-white px-6 rounded items-start">
            <img src={datascience} alt="data science course" />
            <h1 className="font-medium text-black text-2xl">Scrum Master</h1>
            <span className="text-xl text-gray-900">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et
              erat felis. Sed odio lorem, facilisis
            </span>
            <Link to="!#">
              <Arrow />
            </Link>
          </div>
          <div className="course-card flex flex-col justify-evenly shadow-2xl bg-white px-6 rounded items-start">
            <img src={datascience} alt="data science course" />
            <h1 className="font-medium text-black text-2xl">Scrum Master</h1>
            <span className="text-xl text-gray-900">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et
              erat felis. Sed odio lorem, facilisis
            </span>
            <Link to="!#">
              <Arrow />
            </Link>
          </div>
        </div>
        <div className="flex flex-row justify-end items-center py-6">
          <Link
            to="#"
            className="bg-white p-2 rounded-full px-6 flex items-center"
          >
            <span className="text-center font-medium mr-4">More</span>
            <img
              src={more}
              alt="Link To More Courses"
              style={{width: '30px', height: 'auto'}}
            />
          </Link>
        </div>
      </div>

      {/* about us */}
      <div className="about-us h-auto p-2 pt-6 lg:px-24">
        <h1 className="text-2xl font-medium p-6 text-center">
          What they say about us
        </h1>
        <div className="about-us-cards__wrapper grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          <div className="about-us-card flex flex-col items-center bg-custom-aboutCard justify-between">
            <div className="p-6 flex flex-col items-center justify-around">
              <img src={avatar} alt="client testimony" />
              <div>
                <p className="text-3xl leading-3 pt-6 text-custom-primary">"</p>
                <span className="py-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  et erat felis. Sed odio lorem, facilisis
                </span>
              </div>
            </div>
            <div className="card-footer w-full bg-white text-center p-4 shadow-md">
              <h1 className="text-xl font-medium">Dayo Adebisi</h1>
              <span>Srum Master Student</span>
            </div>
          </div>

          <div className="about-us-card flex flex-col items-center bg-custom-aboutCard justify-between">
            <div className="p-6 flex flex-col items-center justify-around">
              <img src={avatar} alt="client testimony" />
              <div>
                <p className="text-3xl leading-3 pt-6 text-custom-primary">"</p>
                <span className="py-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  et erat felis. Sed odio lorem, facilisis
                </span>
              </div>
            </div>
            <div className="card-footer w-full bg-white text-center p-4 shadow-md">
              <h1 className="text-xl font-medium">Dayo Adebisi</h1>
              <span>Srum Master Student</span>
            </div>
          </div>
          <div className="about-us-card flex flex-col items-center bg-custom-aboutCard justify-between">
            <div className="p-6 flex flex-col items-center justify-around">
              <img src={avatar} alt="client testimony" />
              <div>
                <p className="text-3xl leading-3 pt-6 text-custom-primary">"</p>
                <span className="py-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  et erat felis. Sed odio lorem, facilisis
                </span>
              </div>
            </div>
            <div className="card-footer w-full bg-white text-center p-4 shadow-md">
              <h1 className="text-xl font-medium">Dayo Adebisi</h1>
              <span>Srum Master Student</span>
            </div>
          </div>
        </div>
      </div>

      {/* tutors */}
      <div
        className="tutors flex flex-col justify-center items-center h-64 py-12 text-center bg-cover bg-center my-10"
        style={{backgroundImage: `url(${tutorsBg})`}}
      >
        <div className="text-wrapper">
          <h1 className="text-4xl font-medium">Become an Instructor</h1>
          <Link
            to="#"
            className="pri-btn bg-custom-teach shadow-lg text-xl inline-block"
          >
            Teach here
          </Link>
        </div>
      </div>

      {/* footer */}
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
    </div>
  );
};

export default LandingPage;
