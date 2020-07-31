const express = require("express");

const router = express.Router();
const homepage_controller = require("../controller/homepage_controller")


//// url end points for the application to work properly

router.get("/", homepage_controller.mainPage);
router.post("/add", homepage_controller.addPost)
router.get("/delete/:id", homepage_controller.deletePost)

module.exports = router;
