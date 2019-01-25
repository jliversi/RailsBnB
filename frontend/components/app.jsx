import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute, NavRoute } from '../util/route_util';
import SplashContainer from './splash/splash_container';
import NavBarContainer from './navbar/navbar_container';
import SpotsIndex from './spots/spots_index';
import SpotsIndexContainer from './spots/spots_index_container';


const App = () => {
  return (
    <div className="app">
      <Switch>
        <AuthRoute exact path="/" component={SplashContainer} /> 
        <ProtectedRoute path="/" component={NavBarContainer} />  
      </Switch>
      <SpotsIndexContainer /> 
    </div>
  )
};

export default App;

