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
    const formArr = [
      {
        text: 'First Name:',
        name: 'fname',
        id: 'firstName',
        placeholder: this.props.user.firstName
      },
      {
        text: 'Last Name:',
        name: 'lname',
        id: 'lastName',
        placeholder: this.props.user.lastName
      },
      {
        text: 'Email:',
        name: 'email',
        id: 'email',
        placeholder: this.props.user.email
      }
    ];

    const formElements = formArr.map((item, index) => {
      return (
        <div key={index}>
          <label htmlFor={item.name}>{item.text}</label>
          <input className='field'
            type='text'
            onChange={this.handleChange}
            id={item.id}
            name={item.name}
            placeholder={item.placeholder}/>
        </div>
      );
    });

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
          {formElements}
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
