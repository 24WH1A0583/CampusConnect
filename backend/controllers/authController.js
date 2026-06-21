const User = require("../models/User");
const bcrypt = require("bcryptjs");

const registerUser = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      branch,
      year,
      interests,
    } = req.body;

    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      branch,
      year,
      interests,
    });

    res.status(201).json({
      message: "User registered successfully",
      user: {
    _id: user._id,
    name: user.name,
    email: user.email,
    branch: user.branch,
    year: user.year,
    interests: user.interests,
  },
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  registerUser,
};