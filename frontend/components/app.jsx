import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SplashContainer from './splash/splash_container';
import NavBarContainer from './navbar/navbar_container';


const App = () => {
  return (
    <div className="app">
      <header>
        <ProtectedRoute path="/" component={NavBarContainer} />  
      </header>
      <AuthRoute path="/" component={SplashContainer} /> 
    </div>
  )
};

export default App;

