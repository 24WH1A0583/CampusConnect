const express = require("express");

const router = express.Router();

const {
  createInternship,
  getInternships,
  deleteInternship,
} = require("../controllers/internshipController");

const protect = require("../middleware/authMiddleware");

router.post("/", protect, createInternship);
router.get("/", getInternships);
router.delete(
  "/:id",
  protect,
  deleteInternship
);

module.exports = router;