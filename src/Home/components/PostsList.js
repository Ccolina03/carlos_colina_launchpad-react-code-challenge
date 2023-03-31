import React from "react";
import PostCard from "./PostCard";
import { getPosts } from "./server/api";
import {useState, useEffect} from 'react'


//Data recieved from GET will be fetched here
const PostsList = () => {
    //managing state of posts in screen
    const [posts, setPosts] = useState([])

    useEffect(()=> {
        getPosts().then(data => setPosts(data) )
        .catch(error => console.log(error))
    }, []);

    return (
        <div className="bg-white">
            <div className="max-w-2xl mx-auto py-16 px-4 sm:py-16 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-extrabold text-gray-900 mb-6">
                    POSTS
                </h2>
            
            <div id="second-section" className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"> 
            {
              //Accessing each id as key and product attributes as product and passing to how it is going to be displayed.
            posts.map(post => (
                <PostCard userId={post.userId} id={post.id} title={post.title} body={post.body}/>
            ))
            }
            </div>
        </div>
      </div>
      )
}

export default PostsList;