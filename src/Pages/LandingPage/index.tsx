import React, {useEffect, useCallback} from 'react';
import {connect} from 'react-redux';
import {reduxRequest} from '../../redux/actions/test';
import logo from '../../assets/icons/logo.svg';
import './LandingPage.scss';

type LandingPageProps = {
  isLoading: boolean;
  message: string;
  error: string;
  reduxRequest(): void;
};

export const LandingPage: React.FC<LandingPageProps> = ({
  isLoading,
  message,
  error,
  reduxRequest,
}) => {
  const callReduxTest = useCallback(() => {
    reduxRequest();
  }, [reduxRequest]);
  useEffect(() => {
    callReduxTest();
  }, [callReduxTest]);
  return (
    <div className="App">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <header className="App-header">
          <p>Message: {message}</p>
          {error && <p>{error}</p>}
          <h3>Welcome To Trainer App UI</h3>
          <img src={logo} className="App-logo" alt="logo" />
          <p>We are getting started soon!!!</p>
        </header>
      )}
    </div>
  );
};

const mapStateToProps = ({test}: {test: LandingPageProps}) => ({
  isLoading: test.isLoading,
  message: test.message,
  error: test.error,
});

const mapDispatchToProps = {
  reduxRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
