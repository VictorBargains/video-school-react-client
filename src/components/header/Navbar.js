import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { logoutUser } from '../../actions/authActions';
import SearchBar from './SearchBar';

class NavBar extends Component {
  onLogoutClick(e) {
    e.preventDefault();
    this.props.logoutUser();
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    const authLinks = (
      <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <Link className="nav-link" to="/dashboard">Dashboard</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/course-catalog">Catalog</Link>
      </li>
        <li className="nav-item">
          <Link className="nav-link" to="/course-form">Create Course</Link>
        </li>
        <li className="nav-item">
         <a href="#" onClick={this.onLogoutClick.bind(this)} className="nav-link">Logout</a>
        </li>
      </ul>
    );

    const guestLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/login">Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/register">Signup</Link>
        </li>
      </ul>
    );
    
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand" to="/">VS LOGO</Link>
        <button className="navbar-toggler" data-toggle="collapse" data-target="#mobile-nav">
         <span className="navbar-toggler-icon"></span>
        </button>

        {/* <div id="navbarNav" className="collapse navbar-collapse">
         <SearchBar /> 
        </div>
        {isAuthenticated ? authLinks: guestLinks}
      </div> */}
      <div className="collapse navbar-collapse" id="mobile-nav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                {/* <Link className="nav-link" to="/profiles">
                  {' '}
                  Developers
                </Link> */}
                <SearchBar />
              </li>
            </ul>
            {isAuthenticated ? authLinks : guestLinks}
          </div>
        </div>
    </nav>
    );
  }
};

NavBar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logoutUser })(
  NavBar
);