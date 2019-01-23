import { connect } from 'react-redux';
import SignupForm from './signup_form';
import { signup } from '../../actions/session_actions';

const msp = (state, ownProps) => {
  return {};
};

const mdp = dispatch => {
  return {
    submit: (user) => dispatch(signup(user))
  };
};

export default connect(msp, mdp)(SignupForm);