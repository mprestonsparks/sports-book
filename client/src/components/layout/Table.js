import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../../actions/postActions'


class Table extends Component {
  componentWillMount() {
      this.props.fetchPosts();
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.newPost) {
        this.props.posts.unshift(nextProps.newPost);
    }
  }

  render() {
    const postItems = this.props.posts.map(post => (
                <tr> 
                <div key={post._id}>
                    <div className="col s2">
                        <td> 
                            <button 
                                className="btn btn-medium waves-effect waves-light blue-grey lighten-5 black-text"
                                id= { post._id } 
                            >
                                Place Bet
                            </button> 
                        </td>
                    </div>
                    <div className="col s2">
                        <td> 
                        <div className="row">
                            <div className="col s12 table-header">
                                Game Date
                            </div>
                            <div className="col s12">
                                { post.eventDate }
                            </div>
                        </div>
                        </td>
                    </div>
                    <div className="col s3">
                        <div className="row">
                            <div className="col s12">
                                <td> 
                                    <div className="row">
                                        <div className="col s12 table-header">
                                            Away Team
                                        </div>
                                        <div className="col s12">
                                            { post.awayTeamName } 
                                        </div>
                                        <div className="col s12 table-header">
                                            Home Team
                                        </div>
                                        <div className="col s12">
                                            { post.homeTeamName } 
                                        </div>
                                    </div>
                                </td>
                            </div>
                        </div>
                    </div>
                    <div className="col s5">
                        <div className="row">
                            <div className="col s12">
                                <td> 
                                    <div className="row">
                                        <div className="col s12 table-header">
                                            Away Odds
                                        </div>
                                        <div className="col s12">
                                            { post.awayTeamOdds } 
                                        </div>
                                        <div className="col s12 table-header">
                                            Home Odds
                                        </div>
                                        <div className="col s12">
                                            { post.homeTeamOdds } 
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
            <h2 className="table-label">Upcoming Events</h2>
            <table className="highlight responsive-table striped">
                <tbody>
                    { postItems }
                </tbody>
            </table>
        </div>
    );
  }
}

Table.propTypes = {
    // fetchPosts function is a property in redux
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    newPost: PropTypes.object
};

const mapStateToProps = state => ({
    // setting to 'posts' bc object is defined as 'posts' in root-reducer
    posts: state.posts.items,
    newPost: state.posts.item
});

export default connect(mapStateToProps, { fetchPosts })(Table);