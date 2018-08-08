import React from "react";
import styled from "styled-components";
import axios from "axios";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      email: ""
    };
    this._hanleSubmit = this._hanleSubmit.bind(this);
  }

  _hanleSubmit(event) {
    const { password, email } = this.state;

    fetch("http://localhost:8080/api/signUp", {
      method: "POST",
      body: JSON.stringify({
        password,
        email
      })
    })
      .then(res => {
        console.log(res, "res");
      })
      .catch(err => console.log("error", err));

    event.preventDefault();
  }

  render() {
    const { password, email } = this.state;

    return (
      <form onSubmit={this._hanleSubmit}>
        <h1>Sign up</h1>
        <input
          value={email}
          onChange={e =>
            this.setState({
              email: e.target.value
            })
          }
        />
        <input
          value={password}
          onChange={e =>
            this.setState({
              password: e.target.value
            })
          }
        />
        <button type="submit">SEND</button>
      </form>
    );
  }
}

export default Form;
