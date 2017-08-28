import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import { connect } from 'react-redux';

import './app.css';

import Edit from '../routes/edit';
import Home from '../routes/home';
import Newsletter from '../routes/newsletter';
import Products from '../routes/products';
import Success from '../routes/success';

class App extends Component {
  render() {
    let menu = (
      <div className='menu-container'>
        <button className='switch' onClick={this.props.toggleMenu}><h3>&#9776;</h3></button>
      </div>
    );

    if (this.props.menu.showMenu) {
      menu = (
        <div className='menu-container'>
          <button className='switch' onClick={this.props.toggleMenu}><h3>&#10005;</h3></button>
          <ul className='menu'>
            <Link to='/' onClick={this.props.removeMenu}><li className='selection'>Home</li></Link>
            <Link to='/products' onClick={this.props.removeMenu}><li className='selection'>Products</li></Link>
            <Link to='/newsletter' onClick={this.props.removeMenu}><li className='selection-last'>Newsletter</li></Link>
          </ul>
        </div>
      );
    }

    return (
      <div>
        <Router>
          <div>
            {menu}
            <Route exact path='/' component={Home} />
            <Route path='/products' component={Products} />
            <Route path='/newsletter' component={Newsletter} />
            <Route path='/success' component={Success} />
            <Route path='/edit' component={Edit} />
          </div>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    menu: state.menu
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleMenu: () => {
      dispatch({
        type: 'TOGGLE_MENU'
      });
    },
    removeMenu: () => {
      dispatch({
        type: 'REMOVE_MENU'
      });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
