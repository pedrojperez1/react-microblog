import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Form, FormGroup, Input, Button } from "reactstrap";
import { addComment } from "./actions";

const CommentForm = ({postId}) => {
    const [comment, setComment] = useState('');
    const dispatch = useDispatch();

    const handleChange = (e) => {
        e.preventDefault();
        setComment(e.target.value);
    };

    const handleSubmit = () => {
        dispatch(addComment(postId, comment));
        setComment('');
    };

    return (
        <div className="CommentForm">
            <Form>
                <FormGroup>
                    <Input
                        type="text"
                        name="comment"
                        placeholder="New comment"
                        onChange={handleChange}
                        value={comment}
                    />
                </FormGroup>
                <Button onClick={handleSubmit}>Submit</Button>
            </Form>
        </div>
    )
};

export default CommentForm;