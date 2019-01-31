import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import NavBar from './navbar';
import { withRouter } from 'react-router-dom';

const msp = (state, ownProps) => {
  return {
    user: state.entities.users[state.session.id],
    currentUser: state.session.id
  };
};

const mdp = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};

export default withRouter(connect(msp, mdp)(NavBar));