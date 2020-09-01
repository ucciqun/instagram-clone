import React, { createContext, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Header from "./Header";
import Story from "./Story";
import Feed from "./Feed";
import Footer from "./Footer";
import Profile from "./Profile";
import { Divider } from "@material-ui/core";

export const User = createContext();

function App() {
  const [account, setAccount] = useState({
    image:
      "https://pbs.twimg.com/profile_images/1235077513207902215/V1RtvlkE_400x400.jpg",
    name: "TEST ACCOUNT",
    active: true,
  });
  return (
    <div className="App">
      <h1>REACT INSTAGRAM-CLOOOOOONE</h1>
      <User.Provider value={[account, setAccount]}>
        <Router>
          <Header />
          <Divider />
          <Route exact path="/">
            <Story />
            <Divider />
            <Feed />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
          <Footer />
        </Router>
      </User.Provider>
    </div>
  );
}

export default App;
