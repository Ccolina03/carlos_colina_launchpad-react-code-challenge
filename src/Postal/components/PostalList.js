import React from "react";
import sendPostalData from "../server/api";
import { useState, useEffect } from "react";

const PostalList = ({postal}) => {
   const [postalData, setPostalData]=useState([])

   useEffect(() => {
    sendPostalData(postal).then(data => (setPostalData(data)))
    .catch(error => console.log(error));
  }, []);

console.log(postalData)
}
export default PostalList;