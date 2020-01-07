import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  submit = () => {
    console.log(this.email.value);
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <Welcome text="Welcome to using Props" />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>

          <input type="text" ref={input => (this.text = input)} />
          <input type="email" ref={input => (this.email = input)} />

          <button onClick={this.submit}>Show Value</button>
        </header>
      </div>
    );
  }
}

class Welcome extends Component {
  render() {
    const { text } = this.props;
    return <h1>{text}</h1>;
  }
}

export default App;
