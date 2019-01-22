import React from 'react';
import { Route } from 'react-router-dom';
import SignupFormContainer from './session/signup_form_container';

const App = () => {
  return (
    <div>
      <header>
        <h1>RailsBnb</h1>
      </header>
      <SignupFormContainer /> 
    </div>
  )
};

export default App;

