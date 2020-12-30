import React from "react";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";
import { useSelector } from "react-redux";

const Comments = ({postId}) => {
    const comments = useSelector(state => state.comments);

    return (
        <div className="Comments">
            <h3>Comments</h3>
            {
                comments[postId] ?
                <CommentList postId={postId} comments={comments[postId]}/> :
                <p className="muted">Be the first to comment!</p>
            }
            <CommentForm postId={postId}/>
        </div>
    )
};

export default Comments;