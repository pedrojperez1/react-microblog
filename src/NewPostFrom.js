import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { addPost, editPost } from "./actions";
import "./NewPostForm.css";

const NewPostFrom = () => {
    const { postId } = useParams();
    const posts = useSelector(store => store.posts);
    const existingPost = posts[postId];
    const INITIAL_STATE = existingPost ? 
        existingPost : {
            title: '',
            description: '',
            body: ''
        };
    const [formData, setFormData] = useState(INITIAL_STATE);
    const history = useHistory();
    const handleChange = (e) => {
        e.preventDefault();
        const {name, value} = e.target;
        setFormData(oldFormData => ({...oldFormData, [name] : value}))
    }

    const dispatch = useDispatch();

    const handleSave = (e) => {
        e.preventDefault();
        if (!postId) {
            dispatch(addPost({...formData}));
        } else {
            dispatch(editPost(postId, {...formData}))
        }
        history.push("/");
    }

    return (
        <div className="NewPostForm">
            <Form className="NewPostForm-form border my-3 px-5 py-3">
                <h1 className="mb-5">{postId ? "Edit Post" : "New Post"}</h1>
                <FormGroup>
                    <Label for="title">Title</Label>
                    <Input className="form-control"
                        type="text"
                        name="title"
                        onChange={handleChange}
                        value={formData.title}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="description">Description</Label>
                    <Input className="form-control"
                        type="text"
                        name="description"
                        onChange={handleChange}
                        value={formData.description}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="body">Body</Label>
                    <Input className="form-control"
                        type="textarea"
                        name="body"
                        onChange={handleChange}
                        value={formData.body}
                    />
                </FormGroup>
                <Button className="my-3 mx-1" color="primary" onClick={handleSave}>Save</Button>
                <Link to="/">
                    <Button className="my-3 mx-1" color="secondary">Cancel</Button>
                </Link>
            </Form>

        </div>
    )
};

export default NewPostFrom;