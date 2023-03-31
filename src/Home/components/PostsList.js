import React from "react";
import { useEffect, useState } from "react";
import {getPostId, getPosts} from './server/api';
import PostCard from "./PostCard";

const PostsList = ({onSearch}) => {
    const [posts, setPosts] = useState([]);
    const [specificPost, setSpecificPost] = useState([]);

    useEffect(() => {
        getPosts().then(data => setPosts(data))
        .catch(error => console.log(error))
    }, []);

    useEffect(() => {
        if (onSearch) {
            getPostId(onSearch).then(data => setSpecificPost([data]))
            .catch(error => console.log(error))
        } else {
            setSpecificPost(null);
        }
    }, [onSearch]);

    return (
        <div className="bg-white">
            <div className="max-w-2xl mx-auto py-16 px-4 sm:py-16 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-extrabold text-gray-900 mb-6">
                    POSTS
                </h2>
                <div id="second-section" className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"> 
                    {specificPost && specificPost.length ===1 ? (
                        <PostCard key={specificPost[0].id} userId={specificPost[0].userId} id={specificPost[0].id} title={specificPost[0].title} body={specificPost[0].body} />
                    ) : (
                        posts.map(post => (
                            <PostCard key={post.id} userId={post.userId} id={post.id} title={post.title} body={post.body} />
                        ))
                    )}
                </div>
            </div>
        </div>
    )
};

export default PostsList;