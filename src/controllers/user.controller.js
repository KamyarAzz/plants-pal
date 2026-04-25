import ApiError from "../utils/apiError.js";
import {User} from "../models/user.model.js";
import jwt from "jsonwebtoken";
import process from "process";

const generateJWT = (id) => {
  return jwt.sign({id}, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
};

const registrationValidation = (username, email, password) => {
  return Boolean(username && email && password);
};

const loginValidation = (email, password) => {
  return Boolean(email && password);
};

const registerUser = async (req, res) => {
  const {username, email, password} = req.body;

  if (!registrationValidation(username, email, password)) {
    throw new ApiError(400, "Invalid registration data");
  }

  const userExists = await User.findOne({email: email.toLowerCase()});
  if (userExists) {
    throw new ApiError(400, "User already exists");
  }

  const user = await User.create({
    username,
    email: email.toLowerCase(),
    password,
  });

  const token = generateJWT(user._id);

  return res.status(201).json({
    message: "User registered successfully",
    token,
    id: user._id,
    username: user.username,
    email: user.email,
  });
};

const loginUser = async (req, res) => {
  const {email, password} = req.body;
  if (!loginValidation(email, password)) {
    throw new ApiError(400, "Invalid login data");
  }

  const user = await User.findOne({email: email.toLowerCase()});
  if (!user) throw new ApiError(401, "User not found");

  const passwordsMatch = await user.matchPassword(password);
  if (!passwordsMatch) throw new ApiError(401, "Invalid credentials");

  const token = generateJWT(user._id);

  return res.status(200).json({
    message: "Login successful",
    id: user._id,
    username: user.username,
    email: user.email,
    token,
  });
};

const getUser = async (req, res) => {
  const userId = req.user.id;
  const user = await User.findById(userId);
  if (!user) throw new ApiError(404, "User not found");
  return res.status(200).json({message: "User found", user});
};

const updateUser = async (req, res) => {
  const userId = req.user.id;
  const updatedUser = await User.findByIdAndUpdate(userId, req.body, {
    returnDocument: "after",
    runValidators: true,
  }).select("-password");

  if (!updatedUser) {
    throw new ApiError(404, "User not found");
  }

  return res
    .status(200)
    .json({message: "User updated successfully", user: updatedUser});
};

const deleteUser = async (req, res) => {
  const userId = req.user.id;
  const deletedUser = await User.findByIdAndDelete(userId);

  if (!deletedUser) {
    throw new ApiError(404, "User not found");
  }

  return res.status(200).json({message: "User deleted successfully"});
};

export {registerUser, loginUser, updateUser, deleteUser, getUser};
