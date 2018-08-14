import * as R from "ramda";
import { connect } from "react-redux";
import { Form } from "../components";
import { signupRequest } from "../actions";

const mapStateToProps = R.applySpec({
  title: R.always("Signup")
});

const mapDispatchToProps = {
  makeAuth: signupRequest
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);
