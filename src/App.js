import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = {
    input: "Hello"
  };
  updateInput = event => {
    this.setState({
      input: event.target.value
    });
  };
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

          <input
            type="text"
            onChange={this.updateInput}
            value={this.state.input}
          />

          <h3>The input value is: {this.state.input}</h3>

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
