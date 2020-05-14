import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {useForm} from 'react-hook-form';
import {signup} from '../../../redux/actions/auth';
import {ReactComponent as SignupImage} from '../../../assets/images/login.svg';
import {ReactComponent as Logo} from '../../../assets/images/logo.svg';
import {SignupSchema} from '../../../formValidationSchema';
import './index.scss';

interface SignupProps {
  signup(payload): void;
}

const Signup: React.FC<SignupProps> = ({signup}) => {
  const {register, handleSubmit, errors} = useForm({
    validationSchema: SignupSchema,
  });

  const onSubmit = (data) => signup(data);

  const rendeValidationError = (name) => {
    if (errors[name])
      return <span className="error">{errors[name].message}</span>;
  };

  return (
    <div className="signup-wrapper">
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
            <div className="terms-wrapper">
              <div className="terms-and-condition">
                <input
                  type="checkbox"
                  name="termsAndCondition"
                  ref={register}
                />
                <span>I agree with terms and conditionss</span>
              </div>
              {rendeValidationError('termsAndCondition')}
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

              <div className="login-redirect">
                <Link to="/login" className="login-link">
                  <span>
                    Already have an account?&nbsp;
                    <span className="sign-in">Sign in.</span>
                  </span>
                </Link>
              </div>
            </div>
          </form>
        </div>
        <div className="tc">
          <span className="terms">Term of use. Privacy policy</span>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  signup,
};

export default connect(null, mapDispatchToProps)(Signup);
