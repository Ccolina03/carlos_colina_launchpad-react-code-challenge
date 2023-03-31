import React from "react";
import TabBar from "./components/TabBar";
import Intro from "./components/Intro";
import PostsList from "./components/PostsList";
import Input from "./components/Input";
import { useState } from "react";


const Home = () => {

    const [search, setSearch] = useState("")

    const HandleInput = (numbers) => {
        setSearch(numbers)
    }

    return (
        <div>
            <TabBar/>
            <Intro/>
            <Input onHandleInput={HandleInput}/>
            {(search !== "") ? <PostsList onSearch={search}/> : <PostsList />}
        </div>
    );
}
export default Home;