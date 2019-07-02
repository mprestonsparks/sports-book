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
            };
        case NEW_POST:
            // ********  UPDATE TO POST TO MongoDB; Ref. 59:10 on Redux vid   ********
            return {
                ...state,
                item: action.payload
            };
        default:
            return state;

    }
}