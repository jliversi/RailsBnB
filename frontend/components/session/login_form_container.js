import { connect } from 'react-redux';
import LoginForm from './login_form';
import { login, clearSessionErrors } from '../../actions/session_actions';
import { fetchSpots } from '../../actions/spots_actions';

const msp = (state, ownProps) => {
  return {
    errors: state.errors.session.errors
  };
};

const mdp = dispatch => {
  return {
    submit: (user) => dispatch(login(user)),
    clearErrors: () => dispatch(clearSessionErrors()),
    fetchSpots: () => dispatch(fetchSpots({}))
  };
};


export default connect(msp, mdp)(LoginForm);
