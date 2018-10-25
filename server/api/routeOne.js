const router = require("express").Router();

// matches GET requests to /api/routeOne/
router.get("/", async (req, res, next) => {
  try {
    /* etc */
  } catch (error) {
    next(error);
  }
});

// matches POST requests to /api/routeOne/
router.post("/", async (req, res, next) => {
  try {
    /* etc */
  } catch (error) {
    next(error);
  }
});

// matches PUT requests to /api/routeOne/:thingId
router.put("/:thingId", async (req, res, next) => {
  try {
    /* etc */
  } catch (error) {
    next(error);
  }
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
