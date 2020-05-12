import React from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as LoginImage} from '../../../assets/images/login.svg';
import {ReactComponent as Logo} from '../../../assets/images/logo.svg';
import {useForm} from 'react-hook-form';
import * as yup from 'yup';

const LoginSchema = yup.object().shape({
  username: yup.string().required('User name is required'),
  password: yup.string().min(6, 'Password should be at least 6 characters'),
  rememberMe: yup.boolean()
});

const Login = () => {
  const {register, handleSubmit, errors} = useForm({
    validationSchema: LoginSchema,
  });

  const onSubmit = (data) => console.log(data);

  const rendeValidationError = (value) => {
    if (errors[value])
      return (
        <span className="text-sm text-red-600">{errors[value].message}</span>
      );
  };

  return (
    <div className="h-screen flex flex-row">
      <div
        className="h-full w-1/2 hidden lg:block"
        style={{
          backgroundImage: 'linear-gradient(124deg, #ede4ff 50%, #e6dbfb 50%)',
        }}
      >
        <div className="h-full w-full p-5 flex justify-center items-center">
          <LoginImage />
        </div>
      </div>
      <div className="flex flex-col justify-center relative w-full lg:w-1/2 ">
        <div className="flex justify-center mb-10">
          <Logo />
        </div>
        <span className="text-center mb-10 text-black opacity-50 text-base">
          Welcome back! <br className="sm:inline lg:hidden" />
          <span>Please login to your account.</span>
        </span>
        <div className="flex flex-col justify-center items-center w-full h-64">
          <form
            className="flex flex-col w-10/12 md:w-8/12 h-full"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="input-wrapper my-4 w-full">
              <input
                type="text"
                placeholder="Username"
                name="username"
                ref={register}
                className={
                  errors.username
                    ? 'input py-2 border-red-500 border-b text-xs outline-none'
                    : 'input py-2 border-gray-400 border-b text-xs outline-none'
                }
              />
              {rendeValidationError('username')}
            </div>

            <div className="input-wrapper my-4 w-full">
              <input
                type="password"
                name="password"
                placeholder="Password"
                ref={register}
                className={
                  errors.username
                    ? 'input py-2 border-red-500 border-b text-xs outline-none'
                    : 'input py-2 border-gray-400 border-b text-xs outline-none'
                }
              />
              {rendeValidationError('password')}
            </div>
            <div className="flex justify-between mt-6 items-center">
              <div className="flex items-center">
                <input type="checkbox" name="rememberMe" ref={register} />
                <span className="ml-2">Remember me</span>
              </div>
              <Link to="#" className="italic">
                Forgot Password?
              </Link>
            </div>
            <div className="flex justify-between mt-10 items-center">
              <button
                type="submit"
                className="btn text-white bg-custom-primary w-1/2 mr-2"
              >
                Login
              </button>
              <Link
                to="/signup"
                className="btn text-black border border-custom-primary opacity-75 w-1/2 ml-2"
              >
                Sign up
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

export default Login;
