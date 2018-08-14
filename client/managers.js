import ENDPOINTS from "./api";

export const signin = (email, password) =>
  fetch(ENDPOINTS.SIGNIN, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      password,
      email
    })
  })
    .then(res => res)
    .catch(err => {
      console.log("error", err, err.status);
    });

export const signup = (email, password) =>
  fetch(ENDPOINTS.SIGNUP, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      password,
      email
    })
  })
    .then(res => {
      if (res.status !== 404) {
        return res.json();
      }
    })
    .catch(err => err);
