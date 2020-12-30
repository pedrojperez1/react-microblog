import React, { useEffect } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import { Col, Container, Row, Button } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import Comments from "./Comments";
import { deletePost, getPost } from "./actions";

const PostDetails = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const {postId} = useParams();
    const posts = useSelector(store => store.posts);
    const post = posts[postId];

    // if we dont have post, request it from the API
    useEffect(() => {
        async function findPost() {
          dispatch(getPost(postId));
        }
        if (!post) {
          findPost();
        }
      }, [dispatch, postId, post]);

    const handleDelete = () => {
        dispatch(deletePost(postId));
        history.push("/");
    }
    if (!post) {
        return <h1>Loading...</h1>
    } else {
        return (
            <div className="PostDetails">
                <Container fluid={true} className="mt-5">
                    <Row>
                        <Col xs="10">
                            <h1>{post.title}</h1>
                            <p className="lead">{post.description}</p>
                        </Col>
                        <Col  className="text-right" xs="2">
                            <Link to={`/edit/${postId}`}><Button className="mx-1" color="secondary" size="sm">Edit</Button></Link>
                            <Button 
                                className="mx-1" 
                                color="danger"
                                size="sm" 
                                onClick={handleDelete}
                            >Delete</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p>{post.body}</p>
                        </Col>
                    </Row>
                    <hr className="my-3" />
                    <Row>
                        <Comments postId={postId}/>
                    </Row>
                </Container>
            </div>
        )
    }
}; 

export default PostDetails;