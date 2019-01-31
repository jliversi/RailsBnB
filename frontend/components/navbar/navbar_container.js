import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import NavBar from './navbar';
import { withRouter } from 'react-router-dom';
import { fetchSpots } from '../../actions/spots_actions';

const msp = (state, ownProps) => {
  return {
    user: state.entities.users[state.session.id],
    currentUser: state.session.id
  };
};

const mdp = dispatch => {
  return {
    logout: () => dispatch(logout()),
    fetchSpots: (params) => dispatch(fetchSpots(params))
  };
};

export default withRouter(connect(msp, mdp)(NavBar));