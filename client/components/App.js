import "regenerator-runtime/runtime";
import React from "react";
import { Switch, Route } from "react-router-dom";
import { SignupFormContainer, SigninFormContainer } from "../containers";
import MainPage from "./MainPage";

class App extends React.Component {
  componentDidMount() {
    this.props.initializeRequest();
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/signin" component={SigninFormContainer} />
        <Route path="/signup" component={SignupFormContainer} />
      </Switch>
    );
  }
}

export default App;
