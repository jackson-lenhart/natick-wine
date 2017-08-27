import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './style.css';

class Newsletter extends Component {
  constructor() {
    super();
    this.state = {
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
    const description = "to our monthly newsletter so you can get updates for what is on sale. It's absolutely free!"

    return (
      <div className='container'>
        <h1>Subscribe...</h1>
        <h3>{description}</h3>

        <form className='newsletter-form'>
          <label htmlFor='fname'>First Name:</label>
          <input className='field'
            id='firstName'
            type='text'
            placeholder='first name'
            onChange={this.handleChange}/>

          <label htmlFor='lname'>Last Name:</label>
          <input className='field'
            id='lastName'
            type='text'
            placeholder='last name'
            onChange={this.handleChange}/>

          <label htmlFor='email'>Email:</label>
          <input className='field'
            id='email'
            type='email'
            placeholder='email'
            onChange={this.handleChange}/>
            <br/>
          <Link to='/success'>
            <button className='submit-btn'
              type='button'
              onClick={() => {
                  this.props.createUser(this.state);
                }
              }>
              Submit
            </button>
          </Link>
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
    createUser: (name) => {
      dispatch({
        type: 'CREATE_USER',
        payload: name
      });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Newsletter);
