import React, { Component } from 'react';
import { connect } from 'react-redux';

class Edit extends Component {
  constructor() {
    super();
    this.state = {
      changesSaved: false,
      firstName: '',
      lastName: '',
      email: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  render() {
    let changeNote = '';
    if (this.state.changesSaved) {
      changeNote = (
        <p>Changes have been saved.</p>
      );
    }

    return (
      <div className='container'>
        <form className='newsletter-form'>
          <label htmlFor='fname'>First Name:</label>
          <input className='field'
            id='firstName'
            type='text'
            name='fname'
            placeholder={this.props.user.firstName}
            onChange={this.handleChange}/>

          <label htmlFor='lname'>Last Name:</label>
          <input className='field'
            id='lastName'
            type='text'
            name='lname'
            placeholder={this.props.user.lastName}
            onChange={this.handleChange}/>

          <label htmlFor='email'>Email:</label>
          <input className='field'
            id='email'
            type='email'
            name='email'
            placeholder={this.props.user.email}
            onChange={this.handleChange}/>
          <br/>
          <button className='submit-btn'
            type='button'
            onClick={() => {
                this.props.setUser(this.state);
                this.setState({ changesSaved: true });
              }
            }>Save Changes</button>
          {changeNote}
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setUser: user => {
      dispatch({
        type: 'SET_USER',
        payload: user
      });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Edit);
