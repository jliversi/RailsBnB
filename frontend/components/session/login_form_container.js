import { connect } from 'react-redux';
import LoginForm from './login_form';
import { login } from '../../actions/session_actions';

const msp = (state, ownProps) => {
  return {};
};

const mdp = dispatch => {
  return {
    submit: (user) => dispatch(login(user))
  };
};


export default connect(msp, mdp)(LoginForm);