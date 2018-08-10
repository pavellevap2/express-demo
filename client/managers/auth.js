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
    .then(res => res.status)
    .catch(err => {
      console.log("error", err, err.status);
    });

export const makeSignUp = (email, password) => {
  console.log(email, password, "data");
  return fetch(ENDPOINTS.SIGNUP, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      password,
      email
    })
  })
    .then(res => res)
    .catch(err => err.status);
};
