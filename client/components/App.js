import React from "react";
import { Switch, Route } from "react-router-dom";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";
import MainPage from "./MainPage";

const App = () => (
  <Switch>
    <Route exact path="/" component={MainPage} />
    <Route path="/signin" component={SignInForm} />
    <Route path="/signup" component={SignUpForm} />
  </Switch>
);

export default App;
