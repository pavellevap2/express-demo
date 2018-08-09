import React from "react";
import Form from "./Form";
import { makeSignUp } from "../managers";

const SignUpForm = () => <Form title="Sign Up" makeAuth={makeSignUp} />;

export default SignUpForm;
