import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      email: ""
    };
  }

  render() {
    const { password, email } = this.state;
    const { title } = this.props;

    return (
      <form onSubmit={this._handleSubmit}>
        <h1>{title}</h1>
        <input value={email} name="email" onChange={this._onChangeInput} />
        <input
          value={password}
          name="password"
          onChange={this._onChangeInput}
        />
        <button type="submit">SEND</button>
      </form>
    );
  }

  _onChangeInput = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  _handleSubmit = event => {
    const { password, email } = this.state;
    const { makeAuth } = this.props;

    makeAuth(password, email);
    event.preventDefault();
  };
}

export default Form;
