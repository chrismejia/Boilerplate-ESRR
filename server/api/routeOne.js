const router = require("express").Router();
const User = require("../models/user");
const { hasMatchingPassword } = require("crypto");

// matches GET requests to /api/routeOne/
router.get("/", async (req, res, next) => {
  try {
    /* etc */
  } catch (error) {
    next(error);
  }
});

// Fetch the logged-in user on our session. Our client will make this request every time the client application loads - this allows us to keep the user logged in on the client even after they refresh.
router.get("/me", (req, res, next) => {
  res.json(req.user);
});

// Will create a user. Once the user is created, it should be set as the user on the session.
router.post("/signup", (req, res, next) => {
  User.create(req.body)
    .then(user => {
      req.login(user, err => {
        if (err) next(err);
        else res.json(user);
      });
    })
    .catch(next);
});

// matches POST requests to /api/routeOne/
router.post("/", async (req, res, next) => {
  try {
    /* etc */
  } catch (error) {
    next(error);
  }
});

// Route that returning users will use. Don't forget to check their password! If there are any problems (user doesn't exist, wrong password), give 'em the 401.
router.put("/login", (req, res, next) => {
  User.findOne({
    where: {
      email: req.body.email
    }
  })
    .then(user => {
      if (!user) {
        res.status(401).send("User not found");
      } else if (!user.hasMatchingPassword(req.body.password)) {
        res.status(401).send("Incorrect password");
      } else {
        req.login(user, err => {
          if (err) next(err);
          else res.json(user);
        });
      }
    })
    .catch(next);
});

// matches PUT requests to /api/routeOne/:thingId
router.put("/:thingId", async (req, res, next) => {
  try {
    /* etc */
  } catch (error) {
    next(error);
  }
});

// Destroy the user on our session. Passport makes this very easy by attaching a logout method to the request object.
router.delete("/logout", (req, res, next) => {
  req.logout();
  req.session.destroy();
  res.sendStatus(204);
});

// matches DELETE requests to /api/routeOne/:thingId
router.delete("/:thingId", async (req, res, next) => {
  try {
    /* etc */
  } catch (error) {
    next(error);
  }
});

module.exports = router;
