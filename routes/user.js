const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");

router.post("/signup", userController.userSignUp);
router.post("/signin", userController.userLogin);
router.get("/:id", userController.getUser);
router.post("/verify/:email", userController.verifyUser);
router.post("/reset/:email", userController.reset);
router.post("/deposit", userController.depositUpdate);
router.post("/withdraw", userController.withdrawalUpdate);
router.post("/info/:id", userController.updateUserInfo);

module.exports = router;
