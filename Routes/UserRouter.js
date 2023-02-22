const express = require("express");
const {
  Register,
  Login,
  getAllUsers,
} = require("../Controllers/UserContoller");
const { DataValidation } = require("../MiddleWares/DataValidation");
const { AuthMiddleware } = require("../MiddleWares/AuthMiddleware");
const router = express.Router();

router.post("/register", DataValidation, Register);
router.post("/login", Login);
router.get("/", AuthMiddleware, getAllUsers);

module.exports = router;
