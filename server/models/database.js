"use strict";

// The sole purpose of this module is to establish a connection to your Postgres database by creating a Sequelize instance (called `db`).

const chalk = require("chalk");
const Sequelize = require("sequelize");

console.log(
  chalk.yellow(`\nOpening database connection to 'boilermaker'...\n`)
);

// create the database instance that can be used in other database files
const db = new Sequelize(
  process.env.DATABASE_URL || "postgres://localhost:5432/boilermaker",
  {
    logging: false // so we don't see all the SQL queries getting made
  }
);

module.exports = db;
