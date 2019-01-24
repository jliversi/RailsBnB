import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute, NavRoute } from '../util/route_util';
import SplashContainer from './splash/splash_container';
import NavBarContainer from './navbar/navbar_container';


const App = () => {
  return (
    <div className="app">
      <Switch>
        <AuthRoute exact path="/" component={SplashContainer} /> 
        <ProtectedRoute path="/" component={NavBarContainer} />  
      </Switch>
    </div>
  )
};

export default App;

