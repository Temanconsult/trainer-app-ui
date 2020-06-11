import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import {login} from '../../../redux/actions/auth';
import {ReactComponent as LoginImage} from '../../../assets/images/login.svg';
import {ReactComponent as Logo} from '../../../assets/images/logo.svg';
import {LoginSchema} from '../../../formValidationSchema';
import './index.scss';

interface LoginProps {
  login(payload): void;
}

export const Login: React.FC<LoginProps> = ({login}) => {
  const {register, handleSubmit, errors} = useForm({
    validationSchema: LoginSchema,
  });

  const onSubmit = (data) => login(data);

  const rendeValidationError = (name) => {
    if (errors[name])
      return <span className="error">{errors[name].message}</span>;
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
              <Link to="/signup" className="signup-link">
                Sign up
              </Link>
            </div>
          </form>
        </div>
        <span className="terms">Term of use. Privacy policy</span>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  login,
};

export default connect(null, mapDispatchToProps)(Login);
