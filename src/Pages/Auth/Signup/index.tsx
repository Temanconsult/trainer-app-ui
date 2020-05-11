import React from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as SignupImage} from '../../../assets/images/login.svg';
import {ReactComponent as Logo} from '../../../assets/images/logo.svg';

const Signup = () => {
  return (
    <div className="h-screen flex flex-row">
      <div
        className="h-full w-1/2 hidden lg:block"
        style={{
          backgroundImage: 'linear-gradient(124deg, #ede4ff 50%, #e6dbfb 50%)',
        }}
      >
        <div className="h-full w-full p-5 flex justify-center items-center">
          <SignupImage />
        </div>
      </div>
      <div className="flex flex-col justify-center relative w-full lg:w-1/2 ">
        <div className="flex justify-center mb-4">
          <Logo />
        </div>
        <span className="text-center mb-10 text-black opacity-50">
          Please complete to create your account
        </span>
        <div className="flex flex-col justify-center items-center w-full">
          <form className="flex flex-col w-10/12 md:w-8/12 h-full">
            <div className="flex justify-between flex-col md:flex-row lg:flex-row">
              <input
                type="text"
                placeholder="First name"
                className="my-4 py-2 border-gray-400 border-b text-xs outline-none w-full md:mr-2 lg:mr-2 md:w-1/2 lg:w-1/2"
              />
              <input
                type="text"
                placeholder="Last name"
                className="my-4 py-2 border-gray-400 border-b text-xs outline-none w-full md:ml-2 lg:ml-2 md:w-1/2 lg:w-1/2"
              />
            </div>
            <input
              type="text"
              placeholder="Username"
              className="my-4 py-2 border-gray-400 border-b text-xs outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              className="my-4 py-2 border-gray-400 border-b text-xs outline-none"
            />
            <input
              type="password"
              placeholder="Password"
              className="my-4 py-2 border-gray-400 border-b text-xs outline-none"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="my-4 py-2 border-gray-400 border-b text-xs outline-none"
            />
            <div className="flex justify-between mt-6 items-center">
              <div className="flex items-center">
                <input type="checkbox" />
                <span className="ml-2 italic text-xs opacity-75">
                  I agree with terms and conditionss
                </span>
              </div>
            </div>
            <div className="flex justify-center flex-col mt-10 items-center">
              <button
                type="submit"
                className="btn bg-custom-primary btn-bg text-white w-full md:w-1/2 lg:w-full xl:w-1/2"
              >
                Sign up
              </button>
              <Link
                to="#"
                className="btn border border-custom-twitter text-custom-twitter w-full md:w-1/2 lg:w-full xl:w-1/2 mt-2"
              >
                Sign up with Google
              </Link>
              <Link to="#" className="btn bg-custom-fb w-1/2 mt-2 text-white w-full md:w-1/2 lg:w-full xl:w-1/2">
                Sign up with Facebook
              </Link>

              <Link
                to="/login"
                className="text-center mt-10 text-black text-base underline"
              >
                <span>
                  Already have an account?&nbsp;
                  <span className="text-custom-fb">Sign in.</span>
                </span>
              </Link>
            </div>
          </form>
        </div>
        <span className="absolute left-0 right-0 bottom-0 p-4 text-xs text-center text-custom-gray">
          Term of use. Privacy policy
        </span>
      </div>
    </div>
  );
};

export default Signup;
