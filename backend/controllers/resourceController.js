const Resource = require("../models/Resource");

const createResource = async (req, res) => {
  try {
    const { title, subject, link } = req.body;

    const resource = await Resource.create({
      title,
      subject,
      link,
      uploadedBy: req.user,
    });

    res.status(201).json(resource);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getResources = async (req, res) => {
  try {
    const resources = await Resource.find()
      .populate("uploadedBy", "name email");

    res.status(200).json(resources);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createResource,
  getResources,
};