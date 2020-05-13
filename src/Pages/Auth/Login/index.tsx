import React from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as LoginImage} from '../../../assets/images/login.svg';
import {ReactComponent as Logo} from '../../../assets/images/logo.svg';
import {useForm} from 'react-hook-form';
import * as yup from 'yup';
import './index.scss';

const LoginSchema = yup.object().shape({
  username: yup.string().required('User name is required'),
  password: yup.string().min(6, 'Password should be at least 6 characters'),
  rememberMe: yup.boolean(),
});

const Login = () => {
  const {register, handleSubmit, errors} = useForm({
    validationSchema: LoginSchema,
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
          <LoginImage />
        </div>
      </div>
      <div className="right-section">
        <div className="logo-wrapper">
          <Logo />
        </div>
        <span className="welcome">
          Welcome back! <br />
          <span>Please login to your account.</span>
        </span>
        <div className="form-wrapper">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="input-wrapper">
              <input
                type="text"
                placeholder="Username"
                name="username"
                ref={register}
                className={errors.username ? 'input-error' : 'input'}
              />
              {rendeValidationError('username')}
            </div>

            <div className="input-wrapper">
              <input
                type="password"
                name="password"
                placeholder="Password"
                ref={register}
                className={errors.username ? 'input-error' : 'input'}
              />
              {rendeValidationError('password')}
            </div>

            <div className="form-footer">
              <div className="remember-me">
                <input type="checkbox" name="rememberMe" ref={register} />
                <span className="ml-2">Remember me</span>
              </div>
              <Link to="#" className="forgot-password">
                Forgot Password?
              </Link>
            </div>
            <div className="submit-btn-wrapper">
              <button type="submit">Login</button>
              <Link
                to="/signup"
                className="signup-link"
              >
                Sign up
              </Link>
            </div>
          </form>
        </div>
        <span className="terms">
          Term of use. Privacy policy
        </span>
      </div>
    </div>
  );
};

export default Login;
