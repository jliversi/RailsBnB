import React from 'react';
import { Link } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      first_name: ""
    };
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => {
      this.setState({[field]: e.target.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.submit(this.state);
  }

  render() {
    return (
      <div className="login-form-container">
        <Link to="/" className="close-session-form">&times;</Link>

        <form onSubmit={this.handleSubmit}>
          <label htmlFor="login-email">
            <input id="login-email" type="email" placeholder="Email Address" onChange={this.update("email")} />
          </label>
          <label htmlFor="login-password">
            <input id="login-password" type="password" placeholder="Create a Password" onChange={this.update("password")} />
          </label>
          <button className="login-button">Log in</button>
        </form>

        <span>Don’t have an account?</span>
        <Link to="/signup">Sign up</Link>
      </div>
    )
  }

}

export default LoginForm;