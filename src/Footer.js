import React from "react";
import "./Footer.css";
import { useHistory, useLocation } from "react-router-dom";
import AccountIcon from "./AccountIcon";

import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import AddBoxOutlinedIcon from "@material-ui/icons/AddBoxOutlined";
import AddBoxIcon from "@material-ui/icons/AddBox";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { Button } from "@material-ui/core";

function Footer() {
  const history = useHistory();
  const location = useLocation();
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
      iconOutline: AccountIcon,
      iconFilled: AccountIcon,
      link: "/profile",
    },
  ];
  console.log(location);
  return (
    <div className="footer">
      {items.map((e) => (
        <Button onClick={() => history.push(e.link)} style={{ width: "20%" }}>
          {location.pathname === e.link ? (
            <e.iconFilled style={{ width: 40, height: 40 }} />
          ) : (
            <e.iconOutline style={{ width: 40, height: 40 }} />
          )}
        </Button>
      ))}
    </div>
  );
}

export default Footer;
