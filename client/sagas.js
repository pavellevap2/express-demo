import { call, takeEvery, all } from "redux-saga/effects";
import { navigate } from "./navigation";
import { INITIALIZE_REQUEST } from "./actions";

const initializeUserWorker = function*() {
  const token = localStorage.getItem("token");
  console.log("saga");
  if (!token) {
    yield call(navigate, "/signup");
  }
};

const initializeUserWatcher = function*() {
  yield takeEvery(INITIALIZE_REQUEST, initializeUserWorker);
};

export default function*() {
  yield all([yield call(initializeUserWatcher)]);
}
