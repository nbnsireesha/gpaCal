const router = require("express").Router();
const articleController = require("../../controllers/articleController");

// Matches with "/api/students"
router.route("/")
  .post(articleController.create);

module.exports = router;
