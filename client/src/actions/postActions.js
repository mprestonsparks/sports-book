import { FETCH_POSTS, NEW_POST } from "./types";
// const events = require("../routes/api/events");
// const events = require("../../../routes/api/events");


export function fetchPosts() {
    return function(dispatch) {
        // console.log('fetching')
        fetch("/api/events")
        // fetch(events)
            .then(res => res.json())
            .then(posts => dispatch({
                type: FETCH_POSTS,
                payload: posts
            }));
    }
}

export const createPost = postData => dispatch => {
    console.log('action called')
    // fetch('/api/addPost')
    fetch('/', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(postData)
    })
    .then(res => res.json())
    .then(post => 
        dispatch({
            type: NEW_POST,
            payload: post
        })
    );
};

