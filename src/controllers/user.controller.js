import {User} from "../models/user.model.js";

const registrationValidation = (username, email, password) => {
  if (username === null || email === null || password === null) return false;
  return true;
};

const registerUser = async (req, res) => {
  try {
    const {username, email, password} = req.body;

    if (!registrationValidation(username, email, password))
      return res.status(400).json({message: "Invalid data"});

    const userExists = await User.findOne({email: email.toLowerCase()});
    if (userExists)
      return res.status(400).json({message: "User already exists"});

    const user = await User.create({
      username,
      email: email.toLowerCase(),
      password,
    });

    return res.status(201).json({
      message: "User registered successfully",
      user: {userId: user._id, username: user.username, email: user.email},
    });
  } catch (error) {
    res.status(500).json({message: "Server error", error: error.message});
  }
};

export {registerUser};
