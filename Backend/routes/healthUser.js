const express = require("express");
const {
  getUserHealthHistory,
  addHealthAssessment,
} = require("../controllers/healthControllers");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();


router.get("/users/:userId/health", authMiddleware, getUserHealthHistory);


router.post(
  "/users/:userId/health/assessment",
  authMiddleware,
  addHealthAssessment
);



module.exports = router;
