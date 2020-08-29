import React from "react";
import "./Header.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import CameraAltOutlinedIcon from "@material-ui/icons/CameraAltOutlined";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";
import { IconButton } from "@material-ui/core";

function Header() {
  return (
    <div className="header">
      <IconButton>
        <CameraAltOutlinedIcon />
      </IconButton>
      <Link to="/">
        <img
          className="header__logo"
          src="https://pics.prcm.jp/2ae4be3ce4631/48328230/gif/48328230.gif"
          alt="instagram-logo"
        />
      </Link>
      <IconButton>
        <SendOutlinedIcon />
      </IconButton>
    </div>
  );
}

export default Header;
