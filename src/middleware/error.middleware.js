import process from "process";
import {error as logError} from "../utils/logger.js";
import ApiError from "../utils/apiError.js";

const getMongoErrorDetails = (err) => {
  if (!err || typeof err !== "object") return undefined;

  if (err.code === 11000) {
    return {
      message: "Duplicate field value entered",
      duplicateField: err.keyValue,
    };
  }

  if (err.name === "ValidationError") {
    return {
      message: "Data validation failed",
      validationErrors: Object.values(err.errors).map(
        (validationError) => validationError.message,
      ),
    };
  }

  if (err.name === "CastError") {
    return {
      message: "Invalid identifier provided",
      path: err.path,
      value: err.value,
    };
  }

  return undefined;
};

export const notFoundHandler = (req, res, next) => {
  next(new ApiError(404, `Route ${req.method} ${req.originalUrl} not found`));
};

export const errorHandler = (err, req, res) => {
  const statusCode = err.statusCode || 500;
  const status =
    err.status || (String(statusCode).startsWith("4") ? "fail" : "error");
  const details = err.details || getMongoErrorDetails(err);

  logError("Unhandled error", {
    statusCode,
    status,
    message: err.message,
    path: req.originalUrl,
    method: req.method,
    details,
    stack: err.stack,
  });

  const response = {
    status,
    message: err.message || "Internal Server Error",
  };

  if (details) {
    response.details = details;
  }

  if (process.env.NODE_ENV !== "production") {
    response.stack = err.stack;
  }

  res.status(statusCode).json(response);
};
