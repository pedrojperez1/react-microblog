import React from "react";
import Comment from "./Comment";

const CommentList = ({postId, comments}) => {
    return (
        <div className="CommentList">
            {
                comments.map(c => (
                    <Comment key={c.id} commentId={c.id} text={c.text} postId={postId}/>
                ))
            }
        </div>
    )
};

export default CommentList;