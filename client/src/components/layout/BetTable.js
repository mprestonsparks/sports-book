import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchBets } from '../../actions/postActions'



class BetTable extends Component {
  componentWillMount() {
      this.props.fetchBets();
  }

//   componentWillReceiveProps(nextProps) {
//     if(nextProps.newPost) {
//         this.props.posts.unshift(nextProps.newPost);
//     }
//   }

  render() {
    const betItems = this.props.bets.map(bet => (
        <tr> 
            <div key={bet._id}>
                <div className="col s2">
                    <td>
                        <div className="row">
                            <div className="col s12 table-header">
                                Date Submitted
                            </div>
                            <div className="col s12">
                                { bet.betDate }
                            </div>
                        </div>                    
                    </td>
                </div>
                <div className="col s2">
                    <td> 
                        <div className="row">
                            <div className="col s12 table-header">
                                Betting On
                            </div>
                            <div className="col s12">
                                { bet.betTeam }
                            </div>
                        </div>
                    </td>
                </div>
                <div className="col s3">
                    <td>
                    <div className="row">
                        <div className="col s12 table-header">
                            Game Date
                        </div>
                        <div className="col s12">
                            <div className="row">
                                <div className="col s12">
                                    { bet.awayTeam } @ { bet.homeTeam }
                                </div>
                                <div className="col s12">
                                    { bet.eventDate }
                                </div>
                            </div>
                        </div>
                    </div>
                    </td>

                </div>
                <div className="col s5">
                    <div className="row">
                        <div className="col s12">
                            <td>
                                <div className="row">
                                    <div className="col s12 table-header">
                                        Bet Amount
                                    </div>
                                    <div className="col s12">
                                        { bet.betAmount }
                                    </div>
                                    <div className="col s12 table-header">
                                        Payout
                                    </div>
                                    <div className="col s12">
                                        { bet.betValue }
                                    </div>
                                </div>
                            </td>
                        </div>    
                    </div>
                </div>
            </div>
        </tr>
    ));

    return (
        <div>
            {/* <div className="row valign-wrapper"> */}
                {/* <div className="col s12 valign"> */}
                <h2 className="table-label">Open Wagers</h2>
                <table className="highlight responsive-table striped">
                    <tbody>
                        { betItems }
                    </tbody>
                </table>
                {/* </div> */}
            {/* </div> */}
        </div>
    );
  }
}

BetTable.propTypes = {
    // fetchPosts function is a property in redux
    fetchBets: PropTypes.func.isRequired,
    bets: PropTypes.array.isRequired,
    // newPost: PropTypes.object
};

const mapStateToProps = state => ({
    // setting to 'posts' bc object is defined as 'posts' in root-reducer
    bets: state.posts.items,
    // newPost: state.posts.item
});

export default connect(mapStateToProps, { fetchBets })(BetTable);