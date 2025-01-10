const express = require("express");
const userControllers = require("../controller/userController");
const router = express.Router();

// router.post("/register",)
router.get("/getdata", userControllers.getAllUsers);
router.post("/register", userControllers.addUser);
router.get("/getuser/:id", userControllers.getUserFromId);
router.patch("/updateuser/:id", userControllers.getUserUpdateById);
router.delete("/deleteuser/:id", userControllers.deleteUserById);

module.exports = router;
