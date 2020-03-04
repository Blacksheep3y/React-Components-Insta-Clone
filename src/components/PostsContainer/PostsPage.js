//Complete the necessary code in this file
// import useState
import React, { useState } from "react";
import Post from "./Post";
import "./Posts.css";
// import data 
import dummyData from "../../dummy-data";

const PostsPage = () => {
  // set up state for your data    // const [dataState, setDataState] = useState(0);

  return (
    <div className="posts-container-wrapper">
      {/* map through data here to return a Post and pass data as props to Post */}
      {dummyData.map((item) => {
            return (
              <Post post={item} />
            )
          })}
    </div>
  );
};

export default PostsPage;