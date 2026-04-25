import jwt from "jsonwebtoken";
import process from "process";
import ApiError from "../utils/apiError.js";

export const requireAuth = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return next(new ApiError(401, "Unauthorized: No token provided"));
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = {id: decoded.id};
    next();
  } catch (error) {
    return next(
      new ApiError(401, "Unauthorized: Invalid or expired token", {
        originalMessage: error.message,
      }),
    );
  }
};
