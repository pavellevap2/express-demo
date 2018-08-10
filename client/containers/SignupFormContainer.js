import * as R from "ramda";
import { connect } from "react-redux";
import { signup } from "../managers";
import { Form } from "../components";

const mapStateToProps = R.applySpec({
  title: R.always("Signup")
});

const mapDispatchToProps = {
  makeAuth: signup
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);
