import * as R from "ramda";
import { connect } from "react-redux";
import { signin } from "../managers";
import { Form } from "../components";

const mapStateToProps = R.applySpec({
  title: R.always("Signin")
});

const mapDispatchToProps = {
  makeAuth: signin
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);
