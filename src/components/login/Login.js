import React, { Component } from "react";

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      userName: "",
      password: "",
      error: "",
    };
    this._submitHandler = this._submitHandler.bind(this);
  }
  _submitHandler(event) {
    event.preventDefault();
    if (
      this.state.userName === "team7@gmail.com" ||
      this.state.password === "chicken"
    ) {
      //   console.log("loging");
    } else {
      this.setState({ error: "Wrong Username or Password" });
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={this._submitHandler}>
          <input
            type="email"
            placeholder="team7@gmail.com"
            required
            onChange={(event) => {
              this.setState({ error: "" });
              this.setState({ userName: event.target.value });
            }}
          />
          <input
            type="password"
            required
            onChange={(event) => {
              this.setState({ error: "" });
              this.setState({ password: event.target.value });
            }}
          />
          <button onClick={this._submitHandler}>Login</button>
        </form>
        <p>{this.state.error}</p>
      </div>
    );
  }
}
