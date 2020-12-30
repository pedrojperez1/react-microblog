import React from "react";
import { Button } from "reactstrap";
import { useDispatch } from "react-redux";
import { deleteComment } from "./actions";
 
const Comment = ({postId, commentId, text}) => {
    const dispatch = useDispatch();
    const handleDelete = () => {
        console.log(`deleting comment ${commentId} on post ${postId}`);
        dispatch(deleteComment(postId, commentId));
    }
    return (
        <div className="Comment my-3">
            <span>{text}</span>
            <Button 
                outline 
                className="mx-4" 
                color="danger" 
                size="sm"
                onClick={handleDelete}
            >X</Button>
        </div>
    )
};

export default Comment;