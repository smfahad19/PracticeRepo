const express = require("express");
const router = express.Router();

router.get("/dashboard", (req, res) => {
  res.send("welcome to the dashboard");
});

module.exports = router;
