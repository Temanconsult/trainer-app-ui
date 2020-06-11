import React from 'react';
import {Link} from 'react-router-dom';
import tutor from '../../assets/images/tutor.svg';

const Hero = () => {
  return (
    <div className="header-hero py-6 lg:px-16">
      <div className="hero flex md:px-16">
        <div className="left md:items-start w-full p-2 md:flex flex-col justify-evenly h-full lg:w-2/5">
          <h1 className="text-3xl font-bold mb-10">
            Learn with ease <br /> and at your own pace
          </h1>
          <span className="text-base mb-10 xl:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et erat
            felis. Sed odio lorem, facilisis non gravida nec, dignissim eget
            risus. Fusce ut vulputate est. Aliquam ut arcu efficitur nisl
            aliquam pulvinar eu nec libero. Proin commodo vel elit id sodales.
          </span>
          <Link to="!#" className="pri-btn text-xl inline-block mt-6 md:mt-0">
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
  );
};

export default Hero;
