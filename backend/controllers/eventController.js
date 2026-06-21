const Event = require("../models/Event");

const createEvent = async (req, res) => {
  try {
    const { title, description, date, location } = req.body;

    const event = await Event.create({
      title,
      description,
      date,
      location,
      createdBy: req.user,
    });

    res.status(201).json(event);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getEvents = async (req, res) => {
  try {
    const events = await Event.find().populate(
      "createdBy",
      "name email"
    );

    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
const deleteEvent = async (
  req,
  res
) => {
  try {
    const event =
      await Event.findById(
        req.params.id
      );

    if (!event) {
      return res
        .status(404)
        .json({
          message:
            "Event not found",
        });
    }

    if (
      event.createdBy.toString() !==
      req.user.toString()
    ) {
      return res
        .status(401)
        .json({
          message:
            "Not authorized to delete this event",
        });
    }

    await Event.findByIdAndDelete(
      req.params.id
    );

    res.status(200).json({
      message:
        "Event deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message:
        error.message,
    });
  }
};

module.exports = {
  createEvent,
  getEvents,
  deleteEvent,
};