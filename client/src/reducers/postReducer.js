import { FETCH_POSTS, NEW_POST } from "../actions/types";

const initialState = {
    // posts that come in from action; action contains fetch request
    items: [],
    // single post added when response received
    item: {}
}

export default function(state = initialState, action) {
    switch(action.type) {
        case FETCH_POSTS:
            console.log('reducer');
            return {
                ...state,
                items: action.payload
            }
        default:
            return state;

    }
}