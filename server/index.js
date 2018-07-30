const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const FS = require("fs");
const process = require("process");
const HTTP = require("http");
const app = express();

app.use("/public", express.static(path.join(__dirname, "../public")));

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

const PORT = 8080;

app.listen(PORT, () => {
  console.log(
    `listens on port ${PORT} -> http://localhost:${PORT}, on process -> ${
      process.pid
    }`
  );
});
