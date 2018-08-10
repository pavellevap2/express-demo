const express = require("express");
const path = require("path");
const HTTP = require("http");
const bodyParser = require("body-parser");
const process = require("process");
const cookieParser = require("cookie-parser");
const session = require("cookie-session");
const passport = require("passport");
const authRouter = require("./auth");

const app = express();

app.use(express.static(path.resolve(__dirname, "../public")));

app.use(bodyParser.json({}));

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use(cookieParser());

app.use(session({ name: "session", secret: "SECRET" }));

app.use(passport.initialize());
app.use(passport.session());

app.use(authRouter);

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../public/index.html"));
});

app.use((err, req, res, next) => {
  res.status(500);
  res.json({ message: HTTP.STATUS_CODES[500] });
});

const PORT = 8080;

app.listen(PORT, () => {
  console.log(
    `listens on port ${PORT} -> http://localhost:${PORT}, on process -> ${
      process.pid
    }`
  );
});
