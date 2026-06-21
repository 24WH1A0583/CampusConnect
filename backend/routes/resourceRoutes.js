const express = require("express");

const router = express.Router();

const {
  createResource,
  getResources,
} = require("../controllers/resourceController");

const protect = require("../middleware/authMiddleware");

router.post("/", protect, createResource);
router.get("/", getResources);

module.exports = router;