import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import { App } from "./containers";
import { Provider } from "react-redux";
import { history } from "./navigation";
import store from "./configureStore";

ReactDOM.render(
  <Router history={history}>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById("root")
);
