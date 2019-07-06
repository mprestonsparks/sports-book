import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class DashboardCard extends Component {
    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    };

    render() {
        const { user } = this.props.auth;
        return (
            <div>
                {user.name ? (
                    <div className="row valign-wrapper">
                        <div className="col s12 valign">
                            <div className="card blue-grey darken-1">
                                <div className="card-content white-text">
                                    <span className="card-title"> {user.name.split(" ")[0]} </span>
                                    <p>Probably carosel through some data like "top winners", etc</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                        <div className="row valign-wrapper">
                            <div className="col s12 valign">
                                <div className="card blue-grey darken-1">
                                    <div className="card-content white-text">
                                        <span className="card-title"> NOT LOGGED IN </span>
                                        <p>Probably carosel through some data like "top winners", etc</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
            </div>
        );
    }
}

DashboardCard.propTypes = {
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps
)(DashboardCard);