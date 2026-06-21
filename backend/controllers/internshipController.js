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
const deleteInternship =
  async (req, res) => {
    try {
      const internship =
        await Internship.findById(
          req.params.id
        );

      if (!internship) {
        return res
          .status(404)
          .json({
            message:
              "Internship not found",
          });
      }

      if (
        internship.postedBy.toString() !==
        req.user.toString()
      ) {
        return res
          .status(401)
          .json({
            message:
              "Not authorized to delete this internship",
          });
      }

      await Internship.findByIdAndDelete(
        req.params.id
      );

      res.status(200).json({
        message:
          "Internship deleted successfully",
      });
    } catch (error) {
      res.status(500).json({
        message:
          error.message,
      });
    }
  };
module.exports = {
  createInternship,
  getInternships,
  deleteInternship,
};