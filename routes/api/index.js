const router = require("express").Router();
const studentRoutes = require("./students");

// student routes 
router.use("/students", studentRoutes);

module.exports = router;
