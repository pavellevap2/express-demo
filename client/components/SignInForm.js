import React from "react";

class SignInForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      email: ""
    };
  }

  render() {
    const { password, email } = this.state;

    return (
      <form onSubmit={this._handleLogIn}>
        <h1>Sign in</h1>
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

  _handleLogIn = event => {
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

export default SignInForm;
