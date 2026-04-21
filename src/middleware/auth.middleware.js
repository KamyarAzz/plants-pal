import jwt from "jsonwebtoken";
import process from "process";

export const requireAuth = (req, res, next) => {
  // Get the Authorization header
  const authHeader = req.headers.authorization;

  // Check if the header exists and starts with "Bearer "
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({message: "Unauthorized: No token provided"});
  }

  // Extract the token
  const token = authHeader.split(" ")[1];

  try {
    // Verify the token using the secret key
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Attach the decoded user ID to the request object
    req.user = {id: decoded.id};

    // Move on to the actual controller function
    next();
  } catch (error) {
    return res.status(401).json({
      message: "Unauthorized: Invalid or expired token",
      error: error.message,
    });
  }
};
