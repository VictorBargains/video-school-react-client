import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { logoutUser } from '../../actions/authActions';


import SearchBar from './search-bar';

class NavBar extends Component {
  onLogoutClick(e) {
    e.preventDefault();
    this.props.logoutUser();
  }

  render() {
    const { isAuthenticated } = this.state.auth;

    const authLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
         <a href="#" onClick={this.onLogoutClick.bind(this)} className="nav-link">Logout</a>
        </li>
      </ul>
    );

    const guestLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/course">Create Course</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/register">Signup</Link>
        </li>
      </ul>
    );
    
    return (
      <nav className="navbar fixed-top navbar-expand-md navbar-dark bg-dark mb-3">
      <div className="container">
        <Link className="navbar-brand" to="/">VS LOGO</Link>
        <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarNav">
         <span className="navbar-toggler-icon"></span>
        </button>
        <div id="navbarNav" className="collapse navbar-collapse">
         <SearchBar /> 
        </div>
        {isAuthenticated ? authLinks: guestLinks}
      </div>
    </nav>
    );
  }
};

NavBar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logoutUser })(NavBar);