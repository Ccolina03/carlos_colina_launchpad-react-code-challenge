import React from "react";
import TabBar from "./components/TabBar";
import Intro from "./components/Intro";
import PostsList from "./components/PostsList";
import Input from "./components/Input";
import { useState } from "react";
import AddPostModal from "./components/AddPostModal";


const Home = () => {

    const [search, setSearch] = useState("")
    const [showModal, setShowModal] = useState(false);

    const HandleInput = (numbers) => {
        setSearch(numbers)
    }

    return (
        <div className="flex justify-center">
            <TabBar/>
            <Intro/>
            <Input onHandleInput={HandleInput}/>
            <button className ="text-white bg-gradient-to-r from-pink-200 via-pink-500 to-pink-400 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={() => setShowModal(true)}>Add Post</button>
            <AddPostModal showModal={showModal} setShowModal={setShowModal} />
            {(search !== "") ? <PostsList onSearch={search}/> : <PostsList />}
        </div>
    );
}

export default Home;