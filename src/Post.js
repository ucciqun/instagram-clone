import React from "react";
import "./Post.css";

import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ModeCommentOutlinedIcon from "@material-ui/icons/ModeCommentOutlined";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";
import BookmarkBorderOutlinedIcon from "@material-ui/icons/BookmarkBorderOutlined";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { IconButton, Divider } from "@material-ui/core";

function Post({ icon, user, pic, fav, comment }) {
  return (
    <div className="post">
      <div className="post__header">
        <img className="post__icon" src={icon} alt={user} />
        <p>{user}</p>
        <IconButton style={{ marginLeft: "auto" }}>
          <MoreHorizIcon />
        </IconButton>
      </div>
      <Divider />
      <img className="post__image" src={pic} />
      <div className="post__iconContainer">
        <IconButton>
          <FavoriteBorderIcon />
        </IconButton>
        <IconButton>
          <ModeCommentOutlinedIcon />
        </IconButton>
        <IconButton>
          <SendOutlinedIcon />
        </IconButton>
        <IconButton style={{ marginLeft: "auto" }}>
          <BookmarkBorderOutlinedIcon />
        </IconButton>
      </div>
      <p className="post__comment">
        <span style={{ fontWeight: "bold" }}>
          {user}
          {"  "}
        </span>
        {comment}
      </p>
    </div>
  );
}

export default Post;
