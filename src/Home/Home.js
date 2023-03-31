import React from "react";
import TabBar from "./components/TabBar";
import Intro from "./components/Intro";
import PostsList from "./components/PostsList";

const Home = () => {
    return(
        <div> 
        <TabBar/>
        <Intro/>
        <PostsList/>
        </div>
    )
}
export default Home;