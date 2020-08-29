import React from "react";
import "./Feed.css";

import Post from "./Post";

function Feed() {
  return (
    <div>
      <Post
        icon="https://pbs.twimg.com/profile_images/1235077513207902215/V1RtvlkE_400x400.jpg"
        user="testaccount"
        pic="https://media.giphy.com/media/f8bSDwmB8vh6YYnp2d/giphy.gif"
        comment="atooooooooom"
      />
    </div>
  );
}

export default Feed;
