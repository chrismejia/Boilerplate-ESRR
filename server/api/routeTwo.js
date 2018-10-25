const router = require("express").Router();

// matches GET requests to /api/routeTwo/
router.get("/", async (req, res, next) => {
  try {
    /* etc */
  } catch (error) {
    next(error);
  }
});

// matches POST requests to /api/routeTwo/
router.post("/", async (req, res, next) => {
  try {
    /* etc */
  } catch (error) {
    next(error);
  }
});

// matches PUT requests to /api/routeTwo/:thingId
router.put("/:thingId", async (req, res, next) => {
  try {
    /* etc */
  } catch (error) {
    next(error);
  }
});

// matches DELETE requests to /api/routeTwo/:thingId
router.delete("/:thingId", async (req, res, next) => {
  try {
    /* etc */
  } catch (error) {
    next(error);
  }
});

module.exports = router;
