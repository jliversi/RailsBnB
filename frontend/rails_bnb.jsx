import React from 'react';
import ReactDom from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import { fetchSpot, fetchSpots } from './actions/spots_actions';
import 'react-dates/initialize';
import moment from 'moment';
import { isSameDay } from 'react-dates';


document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  
  ReactDom.render(<Root store={store} />, root);

  window.addEventListener("hashchange", () => {
    window.scrollTo(0, 0);
  });


});