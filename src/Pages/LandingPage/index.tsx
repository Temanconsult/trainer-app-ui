import React, {useEffect, useCallback} from 'react';
import {connect} from 'react-redux';
import {reduxRequest} from '../../redux/actions/test';
import { LandingPageState, LandingPageProps } from '../../models';
import logo from '../../assets/icons/logo.svg';

export const LandingPage = ({isLoading, message, error}: LandingPageProps) => {
  const callReduxTest = useCallback(() => {
    reduxRequest();
  }, []);
  useEffect(() => {
    callReduxTest();
  }, [callReduxTest]);
  return (
    <div className="flex bg-blue-600 flex-col justify-center h-screen items-center">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <header className="text-center">
          <p>Message: {message}</p>
          {error && <p>{error}</p>}
          <h3>Welcome To Trainer App UI</h3>
          <img src={logo} className="h-64 w-64" alt="logo" />
          <p className="text-white">We are getting started soon!!!</p>
        </header>
      )}
    </div>
  );
};

const mapStateToProps = (test: LandingPageState) => ({
  isLoading: test.isLoading,
  message: test.message,
  error: test.error,
});

const mapDispatchToProps = {
  reduxRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
