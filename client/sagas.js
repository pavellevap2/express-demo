import { call, takeEvery, all } from "redux-saga/effects";
import { signup } from "./managers";
import { navigate } from "./navigation";
import { INITIALIZE_REQUEST, SIGNUP_REQUEST } from "./actions";

const initializeUserWorker = function*() {
  const token = localStorage.getItem("token");

  if (!token) {
    yield call(navigate, "/signup");
  }
};

const initializeUserWatcher = function*() {
  yield takeEvery(INITIALIZE_REQUEST, initializeUserWorker);
};

const signupWorker = function*({ payload: { email, password } }) {
  try {
    const token = yield call(signup, email, password);
    console.log("token", token);
    localStorage.setItem("token", token);
    yield call(navigate, "/");
  } catch (err) {
    console.log(err, "error in signUp");
  }
};

const signupWatcher = function*() {
  yield takeEvery(SIGNUP_REQUEST, signupWorker);
};

export default function*() {
  yield all([call(initializeUserWatcher), call(signupWatcher)]);
}
