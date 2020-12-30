import React from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Button } from "reactstrap";
import BlogList from "./BlogList";


const Home = () => {
    return (
        <div className="Home">
            <Jumbotron>
                <h1 className="display-3">Microblog</h1>
                <p className="lead">The blog that talks about all things big and small!</p>
                <hr className="my-2" />
                <p className="lead">
                    <Link to="/">
                        <Button className="mx-1" color="primary">Blog</Button>
                    </Link>
                    <Link to="/new">
                        <Button className="mx-1" color="primary">New Post</Button>
                    </Link>
                </p>
            </Jumbotron>
            <BlogList />
        </div>
    )
};

export default Home;