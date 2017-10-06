import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "../components/header";

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
        </div>
        <div>
          <Header />
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
