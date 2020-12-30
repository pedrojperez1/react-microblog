import { 
    ADD_POST,
    DELETE_POST, 
    ADD_COMMENT, 
    DELETE_COMMENT,
    GET_ALL_POSTS,
    GET_POST
} from "./actionTypes";
import axios from "axios";
import {API_URL} from "./config";

/* Add a single post */
export function addPost(newPost) {
    return async function(dispatch) {
        const data = {
            title: newPost.title,
            description: newPost.description,
            body: newPost.body
        };
        let res = await axios.post(`${API_URL}/api/posts`, data);
        dispatch(addedPost(res.data));
    }
}
export function addedPost(newPost) {
    return {
        type: ADD_POST,
        newPost
    }
}

/* Delete a single post */
export function deletePost(postId) {
    return async function(dispatch) {
        let res = await axios.delete(`${API_URL}/api/posts/${postId}`);
        if (res.data.message === "deleted") {
            dispatch(deletedPost(postId))
        }
    }
}

export function deletedPost(postId) {
    return {
        type: DELETE_POST,
        postId
    }
}

/* Edit a post */
export function editPost(postId, newPost) {
    return async function(dispatch) {
        const data = {
            title: newPost.title,
            description: newPost.description,
            body: newPost.body
        }
        let res = await axios.put(`${API_URL}/api/posts/${postId}`, data);
        if (res.statusCode === 200) {
            dispatch(editedPost(postId, res.data))
        }
    }
}

export function editedPost(postId, newPost) {
    return {
        type: ADD_POST,
        postId,
        newPost
    }
}

/* Add a comment to post */
export function addComment(postId, text) {
    return async function(dispatch) {
        let res = await axios.post(`${API_URL}/api/posts/${postId}/comments`, { text });
        dispatch(addedComment(postId, res.data));
    }
}
function addedComment(postId, newComment) {
    return {
        type: ADD_COMMENT,
        postId,
        newComment
    }
}

/* Delete a comment */
export function deleteComment(postId, commentId) {
    return async function(dispatch) {
        let res = await axios.delete(`${API_URL}/api/posts/${postId}/comments/${commentId}`);
        if (res.data.message === "deleted") {
            dispatch(deletedComment(postId, commentId))
        }
    }
}

function deletedComment(postId, commentId) {
    return {
        type: DELETE_COMMENT,
        postId,
        commentId
    }
}

/* Fetch ALL posts */
export function getPosts() {
    return async function(dispatch) {
        let res = await axios.get(`${API_URL}/api/posts`);
        const posts = res.data.reduce((obj, next) => (
            {
                ...obj, 
                [next.id]: {
                    title: next.title,
                    description: next.description,
                    body: next.body
                }
            }
        ), {})
        dispatch(gotPosts(posts))
    };
}

function gotPosts(posts) {
    return {
        type: GET_ALL_POSTS,
        posts
    }
}

/* Fetch a single post */
export function getPost(id) {
    return async function(dispatch) {
        let res = await axios.get(`${API_URL}/api/posts/${id}`);
        dispatch(gotPost(res.data))
    };
}

function gotPost(post) {
    return {
        type: GET_POST,
        post
    }
}