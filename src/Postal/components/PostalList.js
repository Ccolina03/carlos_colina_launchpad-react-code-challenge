import React from "react";
import sendPostalData from "../server/api";
import { useState, useEffect } from "react";
import PostalCard from "./PostalCard";

const PostalList = ({postal}) => {
   const [postalData, setPostalData]=useState([])

   useEffect(() => {
    sendPostalData(postal).then(data => (setPostalData(data)))
    .catch(error => console.log(error));
  }, []);

  return (
    <div>
       <PostalCard onPostalData={postalData}/>
    </div>
  );
}
export default PostalList;