import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
// import LogoutButton from "./LogoutButton";

class Sidenav extends Component {
    onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
    };

  render() {
    const { user } = this.props.auth;
    return (
      <div>
        <ul id="slide-out" className="sidenav sidenav-fixed background blue-grey lighten-5 z-depth-0">
            <li>
                <div className="user-view">
                    <div className="background blue darken-4">
                    </div>
                    <div className="valign-center align-center white-text logo">
                        <h3>AWESOME LOGO</h3>
                    </div>

                    { user.name ? (
                        <div>
                            <div className="white-text navbar-username">
                                 {user.name.split(" ")[0]}
                            </div>
                            <div
                                style={{
                                    width: "150px",
                                    borderRadius: "3px",
                                    letterSpacing: "1.5px"
                                    }}
                                onClick={this.onLogoutClick}
                                className="hoverable accent-3 white-text"
                            >
                                Logout
                            </div>
                        </div>
                    ) : (
                        <div>
                            <div className="row">
                                <div className="col s12 hoverable">
                                    <Link
                                        to="/login"
                                        style={{
                                        width: "150px",
                                        borderRadius: "3px",
                                        letterSpacing: "1.5px"
                                        }}
                                        className="white-text"
                                    >
                                        Log In
                                    </Link>
                                </div>
                                <div className="col s12 hoverable">
                                    <Link
                                        to="/register"
                                        style={{
                                        width: "150px",
                                        borderRadius: "3px",
                                        letterSpacing: "1.5px"
                                        }}
                                        className="white-text"
                                    >
                                        Register
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )}  
                </div>
            </li>
            <li className="hoverable"><a href="/">Most Popular</a></li>
            <li className="hoverable"><a href="/dashboard">My Wagers</a></li>
            <hr className="link-break"></hr>
            <li className="hoverable"><a href="/">NFL</a></li>
            <li className="hoverable"><a href="/">NBA</a></li>
            <li className="hoverable"><a href="/">NHL</a></li>
            <li className="hoverable"><a href="/">MLB</a></li>
            <li className="hoverable"><a href="/">All Events</a></li>

        </ul>
      </div>
        
    );
  }
}

Sidenav.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
  };
  
  const mapStateToProps = state => ({
    auth: state.auth
  });
  
  export default connect(
    mapStateToProps,
    { logoutUser }
  )(Sidenav);