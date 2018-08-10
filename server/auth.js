const passport = require("passport");
const { Strategy: LocalStrategy } = require("passport-local");
const { findByCredentials, updateDataBase } = require("../common/helpers");
const express = require("express");
const db = require("../db");
const FS = require("fs");

const router = express.Router();

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password"
    },
    (password, email, next) => {
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

  if (db.users[id]) {
    next(null, db.users[id]);
  } else {
    next(null, {});
  }
});

router.post("/api/signUp", (req, res, next) => {
  console.log("signUpUser");

  const user = {
    email: req.body.email,
    password: req.body.password
  };

  const jsonData = JSON.stringify(updateDataBase(user, db), null, 2);

  FS.writeFile("./db/users.json", jsonData, "utf-8", err => {
    if (err) next(err);
    res.status(200);
    res.json(user);
  });
});

router.post("/api/signIn", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    console.log(req, res, next, err, user, info);
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
