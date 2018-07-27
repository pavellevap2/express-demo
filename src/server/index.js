const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(__dirname + "./../../"));

const port = 8080;

app.listen(port, () => {
  console.log(`listens on port ${port} -> http://localhost:${port}`);
});
