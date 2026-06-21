const Internship = require("../models/Internship");

const createInternship = async (req, res) => {
  try {
    const { company, role, link, deadline } =
      req.body;

    const internship = await Internship.create({
      company,
      role,
      link,
      deadline,
      postedBy: req.user,
    });

    res.status(201).json(internship);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getInternships = async (req, res) => {
  try {
    const internships = await Internship.find()
      .populate("postedBy", "name email");

    res.status(200).json(internships);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createInternship,
  getInternships,
};