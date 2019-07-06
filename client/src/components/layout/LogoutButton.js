import React, { Component } from "react";
// import { Link } from "react-router-dom";


class LogoutButton extends Component {
    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    };
    render() {
      return (
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
      );
    }
  }
  
  
  export default LogoutButton;