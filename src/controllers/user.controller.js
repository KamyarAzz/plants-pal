import { User } from "../models/user.model.js";
import jwt from "jsonwebtoken";
import process from "process";

const generateJWT = (id) => {
  const newJWT = jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
  return newJWT;
};

const registrationValidation = (username, email, password) => {
  if (!username || !email || !password) return false;
  return true;
};

const loginValidation = (email, password) => {
  if (!email || !password) return false;
  return true;
};

const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!registrationValidation(username, email, password))
      return res.status(400).json({ message: "Invalid data" });

    const userExists = await User.findOne({ email: email.toLowerCase() });
    if (userExists)
      return res.status(400).json({ message: "User already exists" });

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
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!loginValidation(email, password))
      return res.status(400).json({ message: "Invalid data" });

    const user = await User.findOne({ email: email.toLowerCase() });
    if (!user) return res.status(401).json({ message: "User not found" });

    const passwordsMatch = await user.matchPassword(password);
    if (!passwordsMatch)
      return res.status(401).json({ message: "Invalid credentials" });

    const token = await generateJWT(user._id);

    return res.status(200).json({
      message: "Login successful",
      id: user._id,
      username: user.username,
      email: user.email,
      token,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    if (!user) return res.status(404).json({ message: "User not found" });
    return res.status(200).json({ message: "User found", user });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

const updateUser = async (req, res) => {
  try {
    res.status(200).json({ message: "User updated successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export { registerUser, loginUser, updateUser, deleteUser, getUser };
