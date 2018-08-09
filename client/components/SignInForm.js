import React from "react";
import Form from "./Form";
import { makeSignIn } from "../managers";

const SignInForm = () => <Form title="Sign In" makeAuth={makeSignIn} />;

export default SignInForm;
