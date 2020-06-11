import React from 'react';
import {Link} from 'react-router-dom';
import tutorsBg from '../../assets/images/ist-bg.svg';

const Instructor = () => {
  return (
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
  );
};

export default Instructor;
