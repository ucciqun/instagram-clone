import React from "react";
import "./Footer.css";
import { useHistory } from "react-router-dom";
import AccountIcon from "./AccountIcon";

import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import AddBoxOutlinedIcon from "@material-ui/icons/AddBoxOutlined";
import AddBoxIcon from "@material-ui/icons/AddBox";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import FavoriteIcon from "@material-ui/icons/Favorite";

function Footer() {
  const history = useHistory();
  const items = [
    {
      iconOutline: HomeOutlinedIcon,
      iconFilled: HomeIcon,
      link: "/",
    },
    {
      iconOutline: SearchIcon,
      iconFilled: SearchIcon,
      link: "/search",
    },
    {
      iconOutline: AddBoxOutlinedIcon,
      iconFilled: AddBoxIcon,
      link: "/submit",
    },
    {
      iconOutline: FavoriteBorderOutlinedIcon,
      iconFilled: FavoriteIcon,
      link: "/activity",
    },
    {
      iconOutline: "",
      iconFilled: "",
      link: "profile",
    },
  ];
  return (
    <div className="footer">
      <h1>THIS IS FOOTER</h1>
      <AccountIcon active={true} style={{ width: 60, height: 60 }} />
    </div>
  );
}

export default Footer;
