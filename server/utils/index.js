import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB connection established");
  } catch (error) {
    console.log("DB Error: " + error.message);
    process.exit(1); // Exit the process if DB connection fails
  }
};

export const createJWT = (res, userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });

  // Change sameSite from strict to none when you deploy your app
  res.cookie("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== "development",
    sameSite: "strict", //prevent CSRF attack
    maxAge: 1 * 24 * 60 * 60 * 1000, //1 day
  });
};
