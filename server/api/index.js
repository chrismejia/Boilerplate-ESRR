const router = require("express").Router();

router.use("/routeOne", require("./routeOne")); // matches all requests to /api/routeOne/
router.use("/routeTwo", require("./routeTwo")); // matches all requests to /api/routeTwo/

router.use((req, res, next) => {
  const err = new Error("API route not found!");
  err.status = 404;
  next(err);
});

module.exports = router;
