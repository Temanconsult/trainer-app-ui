import React from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as SignupImage} from '../../../assets/images/login.svg';
import {ReactComponent as Logo} from '../../../assets/images/logo.svg';
import {useForm} from 'react-hook-form';
import * as yup from 'yup';

const SignupSchema = yup.object().shape({
  firstname: yup.string().required('First name is required'),
  lastname: yup.string().required('Last name is required'),
  username: yup.string().required('User name is required'),
  email: yup.string().email().required(),
  password: yup.string().min(6, 'Password should be at least 6 characters'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Confirm password is required'),
  termsAndCondition: yup.boolean().required(),
});

const Signup = () => {
  const {register, handleSubmit, errors} = useForm({
    validationSchema: SignupSchema,
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
          <form
            className="flex flex-col w-10/12 md:w-8/12 h-full"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex justify-between flex-col md:flex-row lg:flex-row">
              <div className="input-wrapper my-4 md:mr-2 lg:mr-2 md:mr-2 lg:mr-2 w-1/2">
                <input
                  type="text"
                  name="firstname"
                  ref={register}
                  placeholder="First name"
                  className={
                    errors.firstname
                      ? 'input-error m-0 md:w-full lg:w-full'
                      : 'input md:w-full lg:w-full'
                  }
                />
                {rendeValidationError('firstname')}
              </div>

              <div className="input-wrapper my-4 w-1/2">
                <input
                  type="text"
                  name="lastname"
                  ref={register}
                  placeholder="Last name"
                  className={
                    errors.lastname
                      ? 'input-error m-0 md:w-full lg:w-full'
                      : 'input md:w-full lg:w-full'
                  }
                />
                {rendeValidationError('lastname')}
              </div>
            </div>

            <div className="input-wrapper my-4 w-full">
              <input
                type="text"
                name="username"
                ref={register}
                placeholder="Username"
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
                type="text"
                name="email"
                ref={register}
                placeholder="Email"
                className={
                  errors.email
                    ? 'input py-2 border-red-500 border-b text-xs outline-none'
                    : 'input py-2 border-gray-400 border-b text-xs outline-none'
                }
              />
              {rendeValidationError('email')}
            </div>

            <div className="input-wrapper my-4 w-full">
              <input
                type="password"
                name="password"
                ref={register}
                placeholder="Password"
                className={
                  errors.password
                    ? 'input py-2 border-red-500 border-b text-xs outline-none'
                    : 'input py-2 border-gray-400 border-b text-xs outline-none'
                }
              />
              {rendeValidationError('password')}
            </div>

            <div className="input-wrapper my-4 w-full">
              <input
                type="password"
                name="confirmPassword"
                ref={register}
                placeholder="Confirm Password"
                className={
                  errors.confirmPassword
                    ? 'input py-2 border-red-500 border-b text-xs outline-none'
                    : 'input py-2 border-gray-400 border-b text-xs outline-none'
                }
              />
              {rendeValidationError('confirmPassword')}
            </div>
            <div className="flex justify-between mt-6 items-center">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="termsAndCondition"
                  ref={register}
                />
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
              <Link
                to="#"
                className="btn bg-custom-fb w-1/2 mt-2 text-white w-full md:w-1/2 lg:w-full xl:w-1/2"
              >
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
