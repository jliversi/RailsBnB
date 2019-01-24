import React from 'react';
import { Route, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const Auth = ({ component: Component, path, loggedIn, exact }) => {
  return (
    <Route exact={exact} path={path} render={(props) => (
      !loggedIn ? (
        <Component {...props} />
      ) : (
          <Redirect to="/main/index" />
        )
    )} />
  )
};

const Protected = ({ component: Component, path, loggedIn, exact }) => {
  return (
    <Route exact={exact} path={path} render={(props) => (
      loggedIn ? (
        <Component {...props} />
      ) : (
          <Redirect to="/" />
        )
    )} />
  )
};

const Nav = ({ component: Component, path, loggedIn, exact }) => {
  return (
    <Route exact={exact} path={path} render={(props) => (
      loggedIn ? (
        <Component {...props} />
      ) : (
          null
        )
    )} />
  )
};

const msp = state => {
  return {
    loggedIn: Boolean(state.session.id)
  }
};

export const AuthRoute = withRouter(connect(msp)(Auth));
export const ProtectedRoute = withRouter(connect(msp)(Protected));
export const NavRoute = withRouter(connect(msp)(Nav));