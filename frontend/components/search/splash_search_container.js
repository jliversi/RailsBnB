import { connect } from 'react-redux';
import { fetchSpots } from '../../actions/spots_actions';
import SplashSearch from './splash_search';
import { withRouter } from 'react-router-dom';

const msp = (state, ownProps) => {
  return {};
}

const mdp = dispatch => {
  return {
    fetchSpots: (params) => dispatch(fetchSpots(params))
  }
}

export default withRouter(connect(msp, mdp)(SplashSearch));



