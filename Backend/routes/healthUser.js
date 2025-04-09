const express = require("express");
const {
  getUserHealthHistory,
  addHealthAssessment,
} = require("../controllers/healthControllers");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

// Get user health history
router.get("/users/:userId/health", authMiddleware, getUserHealthHistory);

// Add health assessment
router.post(
  "/users/:userId/health/assessment",
  authMiddleware,
  addHealthAssessment
);

module.exports = router;
