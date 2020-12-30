import { 
    ADD_POST, 
    DELETE_POST, 
    ADD_COMMENT, 
    DELETE_COMMENT,
    GET_ALL_POSTS,
    GET_POST
} from "./actionTypes";

const INITIAL_STATE = {
    posts: [],
    comments: {},
    currentPost: {}
}

function rootReducer(state=INITIAL_STATE, action) {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: {...state.posts, [action.newPost.id]: action.newPost}
            }
        
        case DELETE_POST:
            const postsAfterDelete = {...state.posts};
            delete postsAfterDelete[action.postId];
            return {
                ...state,
                posts: postsAfterDelete
            }

        case ADD_COMMENT:
            const oldComments = state.comments[action.postId];
            const newComments =  oldComments ? [...oldComments, action.newComment] : [action.newComment];
            return {
                ...state, 
                comments: {...state.comments, [action.postId]: newComments}
            }
        case DELETE_COMMENT:
            const commentsAfterDelete = state.comments[action.postId].filter(c => c.id !== action.commentId);
            return {
                ...state,
                comments: {...state.comments, [action.postId]: commentsAfterDelete}
            }

        case GET_ALL_POSTS:
            return {
                ...state,
                posts: action.posts
            }
        case GET_POST:
            return {
                ...state,
                currentPost: action.post
            }
        default:
            return state;
    }
}

export default rootReducer;