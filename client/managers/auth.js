import ENDPOINTS from "../api";

export const makeSignIn = (email, password) =>
  fetch(ENDPOINTS.SIGNIN, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      password,
      email
    })
  })
    .then(res => res.json())
    .then(res => {
      console.log(res);
    })
    .catch(err => console.log("error", err));

export const makeSignUp = (email, password) =>
  fetch(ENDPOINTS.SIGNUP, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      password,
      email
    })
  })
    .then(res => res.json())
    .then(res => {
      console.log(res);
    })
    .catch(err => err.status);
