import React from "react";
import TabBar from "./components/TabBar";
import Intro from "./components/Intro";
import Input from "./components/Input";


const PostalLookup = () => {
    const [postal, setPostal]=useState([])

    const handleInput = (input) => {
        setPostal(input)
    }
    return(
        <div>
        <TabBar/>
        <Intro/>
        <Input onInput={handleInput}/>
        { postal & <PostalList postal={postal}/>
        }
        </div>
    )
}

export default PostalLookup;