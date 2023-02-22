import { Box } from "@mui/material";
import React from "react";
import Post from "./Post";
import postData from "../PostData";

const Feed = () => {
  return (
    <Box flex={4} p={2}>
      {postData.map((postData) => (
        <Post
          avaimg={postData.avaimg}
          name={postData.name}
          date={postData.date}
          img={postData.img}
        />
      ))}
    </Box>
  );
};

export default Feed;
