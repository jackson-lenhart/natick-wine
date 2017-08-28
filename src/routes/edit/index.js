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

    let changeNote = '';
    if (this.state.changesSaved) {
      changeNote = (
        <p>Changes have been saved.</p>
      );
    }

    return (
      <div className='container'>
        <form className='newsletter-form'>
          {formElements}
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
