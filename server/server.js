const express = require("express");
const volleyball = require("volleyball");
const path = require("path");

const app = express();

// logging middleware
app.use(volleyball);

// serve up the static stuff
app.use(express.static(path.join(__dirname, "../public")));

// parse body data from requests using built-in express stuff.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// sending all API routes to their own files in API folder
app.use("/api", require("./api"));

// send index.html for any other requests
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

// error handling middleware
app.use(function(err, req, res, next) {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || "Internal server error.");
});
module.exports = app;
