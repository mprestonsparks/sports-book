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
                    <div className="header">
                        <div className="row valign-wrapper">
                            <div className="col s12 valign">
                                <div className="header-greeting"> 
                                    { user.name.split(" ")[0] }'s Bets
                                </div>
                                <div className="header-text">
                                    <p>
                                        You have 5 open bets totaling $690.00 
                                    </p>
                                    <p>
                                        worth a total payout of $845.00
                                    </p>   
                                </div>
                            </div>
                        </div>
                    </div>

                    
                ) : (
                    <div className="header">
                        <div className="row valign-wrapper">
                            <div className="col s12 valign">
                                <div className="header-greeting">
                                    Welcome to TN Sportsbook!
                                </div>
                                <div className="header-text">
                                    <p>Sign in to start betting!</p>
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