import React from "react";
import styled from "styled-components";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      email: "",
      signInEmai: "",
      signInPassword: ""
    };
  }

  render() {
    const { password, email, signInEmai, signInPassword } = this.state;

    return (
      <React.Fragment>
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
        <form onSubmit={this._handleSignIn}>
          <h1>Sign in</h1>
          <input
            value={signInEmai}
            onChange={e =>
              this.setState({
                signInEmai: e.target.value
              })
            }
          />
          <input
            value={signInPassword}
            onChange={e =>
              this.setState({
                signInPassword: e.target.value
              })
            }
          />
          <button type="submit">SEND</button>
        </form>
      </React.Fragment>
    );
  }

  _hanleSubmit = event => {
    const { password, email } = this.state;

    fetch("http://localhost:8080/api/signUp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        password,
        email
      })
    })
      .then(res => res.json())
      .then(res => {
        console.log(res);
      })
      .catch(err => err.status);

    event.preventDefault();
  };

  _handleSignIn = event => {
    const { signInEmai, signInPassword } = this.state;

    fetch("/api/signIn", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        password: signInPassword,
        email: signInEmai
      })
    })
      .then(res => res.json())
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log("error", err));

    event.preventDefault();
  };
}

export default Form;
