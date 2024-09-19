const router = require("express").Router();

// Define a basic route that sends a JSON response
router.get("/", (req, res) => {
    res.json({ msg: "hello world" });
});

module.exports = router;
