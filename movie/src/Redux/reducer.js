// import { ADD_DESCRIPTION, GET_FOLLOWINGPOSTS } from "./actionType"
// import { GET_LOGGEDINUSERPOSTS } from "./actionType"

const initialState = {
    description: [],
    loggedinuserposts: [],
    following_posts: [],
    dp: {},
}

export default function reducer(state = initialState, { type, payload }) {
   console.log("type", type)
    switch (type) {
        // case ADD_DESCRIPTION:
        //     return {
        //         ...state,
        //         description: payload,
        //     }

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