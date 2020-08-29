import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Header from "./Header";
import Story from "./Story";
import Feed from "./Feed";
import { Divider } from "@material-ui/core";

function App() {
  return (
    <div className="App">
      <h1>REACT INSTAGRAM-CLOOOOOONE</h1>
      {/* Header */}
      <Router>
        <Header />
        <Divider />
        <Story />
        <Divider />
        <Feed />
      </Router>
      {/* Story */}
      {/* Feed */}
      {/* Footer */}
    </div>
  );
}

export default App;
