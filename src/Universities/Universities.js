import React from "react";
import TabBar from "./components/TabBar";
import Intro from "./components/Intro";
import UniversitiesList from "./components/UniversitiesList";
const Universities = () => {
    return(
        <div> 
        <TabBar/>
        <Intro/>
        <UniversitiesList/>
        </div>
    )
}
export default Universities;