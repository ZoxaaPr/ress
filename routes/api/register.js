const express = require("express");
const userController = require("../../controllers/userController");
const router = express.Router();

router.get("/", userController.getAllEmail);
router.post("/", userController.create);

module.exports = router;
