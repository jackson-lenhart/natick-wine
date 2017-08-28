import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

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
    if (this.props.user.isActive) {
      return (
        <div className='container'>
          <h1>Welcome back {this.props.user.firstName}!</h1>
          <h3>Your info:</h3>
          <p>Name: {this.props.user.firstName} {this.props.user.lastName}</p>
          <p>Email: {this.props.user.email}</p>
          <Link to='/edit'>
            <button className='submit-btn'>Edit</button>
          </Link>{'  '}
          <button className='submit-btn' onClick={this.props.deactivate}>Deactivate</button>
        </div>
      )
    }

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
            name='fname'
            placeholder='first name'
            onChange={this.handleChange}/>

          <label htmlFor='lname'>Last Name:</label>
          <input className='field'
            id='lastName'
            type='text'
            placeholder='last name'
            name='lname'
            onChange={this.handleChange}/>

          <label htmlFor='email'>Email:</label>
          <input className='field'
            id='email'
            type='email'
            placeholder='email'
            name='email'
            onChange={this.handleChange}/>
            <br/>
          <Link to='/success'>
            <button className='submit-btn'
              type='button'
              onClick={() => {
                  this.props.createUser(this.state);
                }
              }>Submit</button>
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
    createUser: user => {
      dispatch({
        type: 'CREATE_USER',
        payload: user
      });
    },
    deactivate: () => {
      dispatch({
        type: 'DEACTIVATE'
      });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Newsletter);
