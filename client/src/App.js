import React, { Component } from "react";
import logo from "./logo.svg";
import "./scss/styles.scss";
import Main from "./Components/Main";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Main />
      </div>
    );
  }
}

export default App;
