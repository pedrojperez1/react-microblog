import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import NewPostForm from "./NewPostFrom";
import PostDetails from "./PostDetails";

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/posts/:postId">
                <PostDetails />
            </Route>
            <Route exact path="/new">
                <NewPostForm />
            </Route>
            <Route exact path="/edit/:postId">
                <NewPostForm />
            </Route>
            <Route exact path="/">
                <Home />
            </Route>
            <Route><h1>404: Not Found</h1></Route>
        </Switch>
    )
};

export default Routes;