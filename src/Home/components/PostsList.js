import React, { useEffect, useState } from "react";
import {useDispatch, useSelector} from 'react-redux';
import { selectAllPost, getPostsStatus, getPostsError, fetchPosts } from "../../store/GetPostsSlice";
import { getPostId } from './server/api';
import PostCard from "./PostCard";

const PostsList = ({onSearch}) => {
    const dispatch = useDispatch();

    const posts = useSelector(selectAllPost);
    const postsStatus = useSelector(getPostsStatus);
    const error = useSelector(getPostsError);

    //replace useState of posts
   // const [posts, setPosts] = useState([]);

    const [specificPost, setSpecificPost] = useState([]);

    useEffect(() => {
        if (postsStatus === 'idle') {
            dispatch(fetchPosts())
        }
       
    }, [dispatch, postsStatus]);

    useEffect(() => {
        if (onSearch) {
            getPostId(onSearch).then(data => setSpecificPost([data]))
            .catch(error => console.log(error))
        } else {
            setSpecificPost([]);
        }
    }, [onSearch]);

    console.log(onSearch)

    let content;

    if (postsStatus === 'loading') {
        content = <p> Loading ...</p>
    } else if (postsStatus === 'succeeded'){
        const postList = onSearch ? specificPost : posts.slice(0, 20);
        content = (
            <div id="second-section" className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                {postList.map(post => (
                    <PostCard key={post.id} userId={post.userId} id={post.id} title={post.title} body={post.body} />
                ))}
            </div>
        );
    } else if (postsStatus === 'failed') {
        content = <p>{error}</p>
    }

    return (
        <div className="bg-white">
            <div className="max-w-2xl mx-auto py-16 px-4 sm:py-16 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-extrabold text-gray-900 mb-6">
                    POSTS
                </h2>
                {content}
            </div>
        </div>
    )
};

export default PostsList