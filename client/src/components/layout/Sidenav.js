import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import LogoutButton from "./LogoutButton";

class Sidenav extends Component {
    onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
    };

  render() {
    const { user } = this.props.auth;
    console.log("THIS THING",user)
    return (
      <div>
        <ul id="slide-out" className="sidenav sidenav-fixed">
            <li>
                <div className="user-view">
                    <div className="background red">
                        {/* <img src="images/office.jpg" alt="background"/> */}
                    </div>
                    {/* <i class="material-icons">person_outline</i> */}
                    <div className="white valign-center align-center">
                        {/* <a href="#user"><i class="material-icons">person_outline</i></a> */}
                        <h2>LOGO</h2>
                    </div>


                    { user.name ? (
                        <div>
                            <span className="white-text name">{user.name.split(" ")[0]}</span>
                            {/* <span className="white-text email"><LogoutButton /></span> */}
                            <button
                                style={{
                                    width: "150px",
                                    borderRadius: "3px",
                                    letterSpacing: "1.5px",
                                    marginTop: "1rem"
                                }}
                                onClick={this.onLogoutClick}
                                className="btn btn-small waves-effect waves-light hoverable accent-3"
                            >
                                Logout
                            </button>
                        </div>
                    ) : (
                        <div>
                            <div className="col s6">
                                <Link
                                    to="/register"
                                    style={{
                                    width: "140px",
                                    borderRadius: "3px",
                                    letterSpacing: "1.5px"
                                    }}
                                    className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                                >
                                    Register
                                </Link>
                            </div>
                            <div className="col s6">
                                <Link
                                    to="/login"
                                    style={{
                                    width: "140px",
                                    borderRadius: "3px",
                                    letterSpacing: "1.5px"
                                    }}
                                    className="btn btn-large btn-flat waves-effect white black-text"
                                >
                                    Log In
                                </Link>
                            </div>
                        </div>
                    )}



                    
                    
                    
                </div>
            </li>
            <li><a href="#!">First Sidebar Link</a></li>
            <li><a href="#!">Second Sidebar Link</a></li>
        </ul>
        {/* <a href={"google.com"} data-target="slide-out" class="sidenav-trigger"> */}
            {/* <i class="material-icons">menu</i> */}
        {/* </a> */}
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