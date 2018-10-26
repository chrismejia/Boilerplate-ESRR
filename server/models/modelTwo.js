const Sequelize = require("sequelize");
const db = require("./database");
const passport = require("passport");

const ModelTwo = db.define("model", {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue:
      "https://dummyimage.com/400x400/00ff40/000000.png&text=DummyImage",
    validate: {
      isUrl: true
    }
  },
  address: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true
    }
  },
  description: {
    type: Sequelize.TEXT
  }
});

passport.serializeUser((user, done) => {
  try {
    done(null, user.id);
  } catch (err) {
    done(err);
  }
});

passport.deserializeUser((id, done) => {
  User.findById(id)
    .then(user => done(null, user))
    .catch(done);
});

module.exports = ModelTwo;
