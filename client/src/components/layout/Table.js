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
        <div key={post._id}>
            <table className="highlight responsive-table">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Away Team</th>
                        <th>Home Team</th>
                        <th>Away Odds</th>
                        <th>Home Odds</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td> { post.eventDate } </td>
                        <td> { post.awayTeamName } </td>
                        <td> { post.homeTeamName } </td>
                        <td> { post.awayTeamOdds } </td>
                        <td> { post.homeTeamOdds } </td>
                    </tr>


                </tbody>


            {/* <p>{post.homeTeamName}</p> */}
            {/* <p>{post.body}</p> */}


            </table>
        </div>
    ));
    return (
        <div className="col s12 table">
            <h2>Upcoming Events</h2>
            {postItems}

            {/* <p>** ADD BET BUTTON TO TABLE</p> */}
            {/* <table  className="highlight responsive-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Item Name</th>
                        <th>Item Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Alvin</td>
                        <td>Eclair</td>
                        <td>$0.87</td>
                    </tr>
                    <tr>
                        <td>Alan</td>
                        <td>Jellybean</td>
                        <td>$3.76</td>
                    </tr>
                    <tr>
                        <td>Jonathan</td>
                        <td>Lollipop</td>
                        <td>$7.00</td>
                    </tr>
                </tbody>
        </table> */}
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