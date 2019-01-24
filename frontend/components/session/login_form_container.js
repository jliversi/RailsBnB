import { connect } from 'react-redux';
import LoginForm from './login_form';
import { login, clearSessionErrors } from '../../actions/session_actions';

const msp = (state, ownProps) => {
  return {
    errors: state.errors.session.errors
  };
};

const mdp = dispatch => {
  return {
    submit: (user) => dispatch(login(user)),
    clearErrors: () => dispatch(clearSessionErrors())
  };
};


export default connect(msp, mdp)(LoginForm);
