const express = require("express");

const router = express.Router();

const {
  createInternship,
  getInternships,
} = require("../controllers/internshipController");

const protect = require("../middleware/authMiddleware");

router.post("/", protect, createInternship);
router.get("/", getInternships);

module.exports = router;