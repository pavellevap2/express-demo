import * as R from "ramda";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { initializeRequest } from "../actions";
import { App } from "../components";

const mapDispatchToProps = {
  initializeRequest
};

export default R.compose(
  withRouter,
  connect(
    undefined,
    mapDispatchToProps
  )
)(App);
