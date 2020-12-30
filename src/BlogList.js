import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "./actions";

const BlogList = () => {
    const dispatch = useDispatch();

    useEffect(() => { // fetch posts on load
        dispatch(getPosts());
    }, [dispatch]);

    const posts = useSelector(store => store.posts);
    console.log("posts:", posts);
    return (
        <div className="BlogList">
            {
                Object.keys(posts).map(p => (
                    <div key={p}>
                        <Link to={`posts/${p}`}><h4>{posts[p].title}</h4></Link>
                        <p>{posts[p].description}</p>
                    </div>
                ))
            }
        </div>
    )
};

export default BlogList;
