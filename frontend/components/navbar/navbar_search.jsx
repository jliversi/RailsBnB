import React from 'react';

class NavBarSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: ""
    }
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { location } = this.state;
    if (location.length > 0) {
      const params = {
        location: this.state.location
      }
      this.props.fetchSpots(params).then(this.props.history.push('/index'));
    } else {
      this.props.fetchSpots({}).then(this.props.history.push('/index'));
    }
  }

  render() {

    return (
      <div className="nav-bar-search-container">
        <form className="nav-bar-search-form" onSubmit={this.handleSubmit}>
          <i className='material-icons'>search</i>
          <input 
            type="text" 
            onChange={this.update('location')}
            placeholder={`Try "Manhattan"`}
          />
        </form>
      </div>
    )

  }
} 

export default NavBarSearch;