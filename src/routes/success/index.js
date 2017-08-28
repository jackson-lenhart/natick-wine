import React, { Component } from 'react';
import { connect } from 'react-redux';

class Success extends Component {
  render() {
    return (
      <h1>Welcome, {this.props.user.firstName}! Your last name is {this.props.user.lastName}.</h1>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(Success);
