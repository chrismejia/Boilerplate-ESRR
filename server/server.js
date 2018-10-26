// call in db for use with dbstore
const db = require("./models/index");

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

// attach the session middleware to our app
const session = require("express-session");

// configure and create our database store
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const dbStore = new SequelizeStore({ db: db });

// sync so that our session table gets created
dbStore.sync();

// plug the store into our session middleware
app.use(
  session({
    store: dbStore,
    resave: false,
    saveUninitialized: false,
    secret: process.env.SESSION_SECRET || "a wildly insecure secret"
  })
);

// passport stuff must be added after the session stuff
const passport = require("passport");

app.use(passport.initialize());
app.use(passport.session());

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
