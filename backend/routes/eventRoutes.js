const express = require("express");

const router = express.Router();

const {
  createEvent,
  getEvents,
  deleteEvent,
} = require("../controllers/eventController");

const protect = require("../middleware/authMiddleware");
router.delete(
  "/:id",
  protect,
  deleteEvent
);

router.post("/", protect, createEvent);
router.get("/", getEvents);

module.exports = router;