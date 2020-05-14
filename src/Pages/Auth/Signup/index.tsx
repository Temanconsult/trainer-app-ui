import React from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as SignupImage} from '../../../assets/images/login.svg';
import {ReactComponent as Logo} from '../../../assets/images/logo.svg';
import {useForm} from 'react-hook-form';
import * as yup from 'yup';
import './index.scss';

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
      return <span className="error">{errors[value].message}</span>;
  };

  return (
    <div className="login-wrapper">
      <div className="left-section">
        <div className="image">
          <SignupImage />
        </div>
      </div>
      <div className="right-section">
        <div className="content">
          <div className="logo-wrapper">
            <Logo />
          </div>
          <span className="welcome">
            Please complete to create your account
          </span>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-wrapper-half">
              <div className="input-wrapper">
                <input
                  type="text"
                  name="firstname"
                  ref={register}
                  placeholder="First name"
                  className={errors.firstname ? 'input-error' : 'input'}
                />
                {rendeValidationError('firstname')}
              </div>

              <div className="input-wrapper">
                <input
                  type="text"
                  name="lastname"
                  ref={register}
                  placeholder="Last name"
                  className={errors.lastname ? 'input-error' : 'input'}
                />
                {rendeValidationError('lastname')}
              </div>
            </div>

            <div className="input-wrapper full">
              <input
                type="text"
                name="username"
                ref={register}
                placeholder="Username"
                className={errors.username ? 'input-error' : 'input'}
              />
              {rendeValidationError('username')}
            </div>

            <div className="input-wrapper full">
              <input
                type="text"
                name="email"
                ref={register}
                placeholder="Email"
                className={errors.email ? 'input-error' : 'input'}
              />
              {rendeValidationError('email')}
            </div>

            <div className="input-wrapper full">
              <input
                type="password"
                name="password"
                ref={register}
                placeholder="Password"
                className={errors.password ? 'input-error' : 'input'}
              />
              {rendeValidationError('password')}
            </div>

            <div className="input-wrapper full">
              <input
                type="password"
                name="confirmPassword"
                ref={register}
                placeholder="Confirm Password"
                className={errors.confirmPassword ? 'input-error' : 'input'}
              />
              {rendeValidationError('confirmPassword')}
            </div>
            <div className="terms-and-condition">
              <input type="checkbox" name="termsAndCondition" ref={register} />
              <span>I agree with terms and conditionss</span>
            </div>

            <div className="btn-container">
              <button type="submit" className="submit">
                Sign up
              </button>
              <button type="button" className="google">
                Sign up with Google
              </button>
              <button type="button" className="facebook">
                Sign up with Facebook
              </button>

              <Link to="/login" className="login-link">
                <span>
                  Already have an account?&nbsp;
                  <span className="sign-in">Sign in.</span>
                </span>
              </Link>
            </div>
          </form>
        </div>
        <span className="terms">Term of use. Privacy policy</span>
      </div>
    </div>
  );
};

export default Signup;
