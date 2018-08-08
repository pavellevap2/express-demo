const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const process = require("process");
const cookieParser = require("cookie-parser");
const session = require("cookie-session");
const passport = require("passport");
const authRouter = require("./auth");

const app = express();

app.use("/public", express.static(path.join(__dirname, "../public")));

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json({}));

app.use(cookieParser());

app.use(session({ name: "session", secret: "SECRET" }));

passport.use(passport.initialize());
passport.use(passport.session());

app.use(authRouter);

const PORT = 8080;

app.listen(PORT, () => {
  console.log(
    `listens on port ${PORT} -> http://localhost:${PORT}, on process -> ${
      process.pid
    }`
  );
});
