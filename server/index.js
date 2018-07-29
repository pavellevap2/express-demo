const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const FS = require("fs");
const app = express();

const HTTP = {
  STATUS_CODES: {
    404: "Data is not defined",
    500: "Interval server error"
  }
};

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use("/public", express.static(path.join(__dirname, "../public")));

app.get("/api/users", (req, res, next) => {
  FS.readFile(path.join(__dirname, "./db/users.json"), "utf-8", (err, data) => {
    try {
      if (err) {
        throw { status: 500 };
      } else if (!data) {
        throw { status: 404 };
      }

      res.status(200).send(data);
    } catch (e) {
      return next(e);
    }
  });
});

function errorHandler(err, req, res, next) {
  res.status(err.status);
  res.send({ message: HTTP.STATUS_CODES[err.status] });
}

app.use(errorHandler);

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`listens on port ${PORT} -> http://localhost:${PORT}`);
});
