const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const express = require("express");
const R = require("ramda");
const db = require("../db");
const FS = require("fs");
const uniqid = require("uniqid");

const router = express.Router();

function findByCredentials(email, password, users) {
  return R.find(
    user => user.email == email && user.password == password,
    R.values(users)
  );
}

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password"
    },
    (email, password, next) => {
      console.log("verifyCredentials");
      const user = findByCredentials(email, password, db.users);

      if (user) {
        next(null, user);
      } else {
        next(null, false);
      }
    }
  )
);

passport.serializeUser((user, next) => {
  console.log("serializeUser");
  next(null, user.id);
});

passport.deserializeUser((id, next) => {
  console.log("deserializeUser");
  if (db.users[id]) next(null, db.users[id]);
  else next(null, {});
});

router.post("/api/signUp", (req, res, next) => {
  console.log("signUpUser");
  const user = {
    email: req.body.email,
    password: req.body.password
  };

  const userId = uniqid();
  const updatedDb = R.assoc(userId, { id: userId, ...user }, db.users);
  const jsonData = JSON.stringify(updatedDb, null, 2);

  FS.writeFile("./db/users.json", jsonData, "utf-8", err => {
    if (err) next(err);
    res.status(200);
    res.json(user);
  });
});

router.post("/api/signIn", (req, res, next) => {
  console.log("signIn");
  passport.authenticate("local", (err, user, info) => {
    if (err) return next(err);
    if (!user) {
      res.status(401);
      return res.json(info);
    }

    req.logIn(user, err => {
      if (err) return next(err);
      res.status(200);
      return res.json(user);
    });
  })(req, res, next);
});

module.exports = router;
