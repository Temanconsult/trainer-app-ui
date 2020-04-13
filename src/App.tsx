import React from 'react';
import {Switch, Route} from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import PageNotFound from './Pages/PageNotFound';
import Login from './Pages/Auth/Login';

const App = () => {
  return (
    <>
      <Switch>
        <Route exact={true} path="/login" component={Login} />} />
        <Route exact={true} path="/" component={LandingPage} />} />
        <Route exact={true} path="*" component={PageNotFound} />} />
      </Switch>
    </>
  );
};

export default App;
