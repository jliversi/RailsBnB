import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SignupFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SplashContainer from './splash/splash_container';
import NavBarContainer from './navbar/navbar_container';


const App = () => {
  return (
    <div>
      <header>
        <ProtectedRoute path="/" component={NavBarContainer} />  
      </header>
      <AuthRoute path="/" component={SplashContainer} /> 
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
    </div>
  )
};

export default App;

