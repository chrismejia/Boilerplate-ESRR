const User = require("./user");
const ModelTwo = require("./modelTwo");
const db = require("./database"); // exported from there

// Associations
User.belongsTo(ModelTwo);
ModelTwo.hasMany(User);

module.exports = {
  User,
  ModelTwo,
  db
};
