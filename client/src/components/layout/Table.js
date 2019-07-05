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
                    <div className="col l3">
                        <td> 
                            <button id= { post._id } >
                                Bet
                            </button> 
                        </td>
                    </div>
                    <div className="col l3">
                        <td> { post.eventDate } </td>
                    </div>
                    <div className="col s3">
                        <div className="row">
                            <div className="col s12">
                                <td> { post.awayTeamName } </td>
                            </div>
                            <div className="col s12">
                                <td> { post.homeTeamName } </td>
                            </div>
                        </div>
                    </div>
                    <div className="col s3">
                        <div className="row">
                            <div className="col s12">
                                <td> { post.awayTeamOdds } </td>
                            </div>
                            <div className="col s12">
                                <td> { post.homeTeamOdds } </td>
                            </div>
                        </div>
                    </div>
            </div>
                </tr>
    ));

    return (
        <table className="highlight responsive-table">
            <tbody>
                { postItems }
            </tbody>
        </table>
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