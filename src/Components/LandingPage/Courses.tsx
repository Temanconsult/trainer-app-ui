import React from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as Arrow} from '../../assets/icons/arrow.svg';
import datascience from '../../assets/images/datascience.svg';
import pmp from '../../assets/images/pmp.svg';
import devops from '../../assets/images/devops.svg';
import js from '../../assets/images/js.png';
import more from '../../assets/icons/more.svg';

const Courses = () => {
  return (
    <div className="courses h-auto p-2 lg:px-32">
      <h1 className="text-2xl font-medium p-6 text-white text-center">
        Our Courses
      </h1>
      <div className="courses-list grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        <div className="course-card flex flex-col justify-evenly shadow-2xl bg-white px-6 rounded items-start">
          <img src={datascience} alt="data science course" />
          <h1 className="font-medium text-black text-2xl">Scrum Master</h1>
          <span className="text-gray-900">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et erat
            felis. Sed odio lorem, facilisis
          </span>
          <Link to="!#">
            <Arrow />
          </Link>
        </div>
        <div className="course-card flex flex-col justify-evenly shadow-2xl bg-white px-6 rounded items-start">
          <img src={pmp} alt="data science course" />
          <h1 className="font-medium text-black text-2xl">PMP</h1>
          <span className="text-gray-900">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et erat
            felis. Sed odio lorem, facilisis
          </span>
          <Link to="!#">
            <Arrow />
          </Link>
        </div>
        <div className="course-card flex flex-col justify-evenly shadow-2xl bg-white px-6 rounded items-start">
          <img src={devops} alt="data science course" />
          <h1 className="font-medium text-black text-2xl">Devops</h1>
          <span className="text-gray-900">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et erat
            felis. Sed odio lorem, facilisis
          </span>
          <Link to="!#">
            <Arrow />
          </Link>
        </div>
        <div className="course-card flex flex-col justify-evenly shadow-2xl bg-white px-6 rounded items-start">
          <img src={js} alt="data science course" />
          <h1 className="font-medium text-black text-2xl">JavaScript</h1>
          <span className="text-gray-900">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et erat
            felis. Sed odio lorem, facilisis
          </span>
          <Link to="!#">
            <Arrow />
          </Link>
        </div>
        <div className="course-card flex flex-col justify-evenly shadow-2xl bg-white px-6 rounded items-start">
          <img src={datascience} alt="data science course" />
          <h1 className="font-medium text-black text-2xl">Scrum Master</h1>
          <span className="text-gray-900">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et erat
            felis. Sed odio lorem, facilisis
          </span>
          <Link to="!#">
            <Arrow />
          </Link>
        </div>
        <div className="course-card flex flex-col justify-evenly shadow-2xl bg-white px-6 rounded items-start">
          <img src={datascience} alt="data science course" />
          <h1 className="font-medium text-black text-2xl">Scrum Master</h1>
          <span className="text-gray-900">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et erat
            felis. Sed odio lorem, facilisis
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
  );
};

export default Courses;
