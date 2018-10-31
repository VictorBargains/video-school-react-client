import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Landing extends Component {
  render() {
    return (
        <div className="landing">
          <div className="dark-overlay landing-inner text-light">
            <div className="container">
              <div className="row">
                <div className="col-md-12 text-center">
                  <h1 className="display-3 mt-5 mb-4">Video School</h1>
                  <p className="lead">Create or Purchase a course to begin Video School. Start your online video learning today.</p>
                  <hr />
                  <Link to="/register" className="btn btn-lg btn-info mr-2">Sign Up</Link>
                  <Link to="/login" className="btn btn-lg btn-light">Login</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
  }
}

export default Landing;