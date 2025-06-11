import { GET_ALLMOVIES } from "./actionType";
const initialState = {
   allmovies : [],

}

export default function reducer(state = initialState, { type, payload }) {
   console.log("type", type)
    switch (type) {
        case GET_ALLMOVIES:
            return {
                ...state,
                allmovies: payload,
            }

        // case GET_LOGGEDINUSERPOSTS:
        //     return {
        //         ...state,
        //         loggedinuserposts: payload,
        //     }

        // case GET_FOLLOWINGPOSTS:
        //     return {
        //         ...state,
        //         following_posts: payload,
        //     }
        default:
            return state;

    }
}