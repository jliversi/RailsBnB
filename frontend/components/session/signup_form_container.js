import { connect } from 'react-redux';
import SignupForm from './signup_form';
import { signup, clearSessionErrors } from '../../actions/session_actions';

const msp = (state, ownProps) => {
  return {
    errors: state.errors.session.errors
  };
};

const mdp = dispatch => {
  return {
    submit: (user) => dispatch(signup(user)),
    clearErrors: () => dispatch(clearSessionErrors())
  };
};

export default connect(msp, mdp)(SignupForm);

