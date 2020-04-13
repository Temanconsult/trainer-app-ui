import React from 'react';
import {Link} from 'react-router-dom';
import LoginImage from '../../../assets/images/login.svg';
import Logo from '../../../assets/images/logo.svg';

const Login = () => {
  return (
    <div className="h-screen flex flex-row">
      <div
        className="h-full w-1/2 hidden lg:block"
        style={{
          backgroundImage: 'linear-gradient(124deg, #ddecfe 50%, #dae0fa 50%)',
        }}
      >
        <img
          src={LoginImage}
          alt="Best trainer logo"
          className="h-full w-full p-5 object-center"
        />
      </div>
      <div className="flex flex-col justify-center relative w-full lg:w-1/2 ">
        <img src={Logo} alt="Best tutor logo" className="mb-10" />
        <span className="text-center mb-10 text-black opacity-50 text-xl">
          Welcome back! <br className="sm:inline lg:hidden" />
          <span>Please login to your account.</span>
        </span>
        <div className="flex flex-col justify-center items-center w-full h-64">
          <form className="flex flex-col w-10/12 md:w-8/12 h-full">
            <input
              type="text"
              placeholder="Username"
              className="mb-2 p-4 border-gray-400 border-b text-base outline-none"
            />
            <input
              type="password"
              placeholder="Password"
              className="mb-2 p-4 border-gray-400 border-b text-base outline-none"
            />
            <div className="flex justify-between mt-6 items-center">
              <div className="flex items-center">
                <input type="checkbox" />
                <span className="ml-2">Remember me</span>
              </div>
              <Link to="#" className="italic">
                Forgot Password?
              </Link>
            </div>
            <div className="flex justify-between mt-10 items-center">
              <button type="submit" className="btn btn-blue w-1/2 mr-2">
                Login
              </button>
              <Link to="#" className="btn btn-no-blue w-1/2 ml-2">
                Sign up
              </Link>
            </div>
          </form>
        </div>
        <span className="absolute left-0 right-0 bottom-0 p-4 text-center text-custom-gray">
          Term of use. Privacy policy
        </span>
      </div>
    </div>
  );
};

export default Login;
