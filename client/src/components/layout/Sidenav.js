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
        <ul id="slide-out" className="sidenav sidenav-fixed">
            <li>
                <div className="user-view">
                    <div className="background red">
                    </div>
                    <div className="white valign-center align-center">
                        <h2>LOGO</h2>
                    </div>

                    { user.name ? (
                        <div>
                            <h4 className="white-text">{user.name.split(" ")[0]}</h4>
                            <div
                                style={{
                                    borderRadius: "3px",
                                    letterSpacing: "1.5px",
                                    marginTop: "1rem"
                                }}
                                onClick={this.onLogoutClick}
                                className="hoverable accent-3"
                            >
                                Logout
                            </div>
                        </div>
                    ) : (
                        <div>
                            <div className="row">
                                <div className="col s6">
                                    <Link
                                        to="/login"
                                        style={{
                                        width: "140px",
                                        borderRadius: "3px",
                                        letterSpacing: "1.5px"
                                        }}
                                        className="white-text"
                                    >
                                        Log In
                                    </Link>
                                </div>
                                <div className="col s6">
                                    <Link
                                        to="/register"
                                        style={{
                                        width: "140px",
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
            <li><a href="/">Most Popular</a></li>
            <li><a href="/dashboard">My Wagers</a></li>
            <hr className="link-break"></hr>
            <li><a href="/">NFL</a></li>
            <li><a href="/">NBA</a></li>
            <li><a href="/">NHL</a></li>
            <li><a href="/">MLB</a></li>
            <li><a href="/">All Events</a></li>

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