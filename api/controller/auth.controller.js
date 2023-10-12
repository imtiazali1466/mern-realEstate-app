import User from "../models/userModel.js";
import bcrypt from "bcryptjs/dist/bcrypt.js";

export const signup = async (req, res, next) => {
//   console.log(req.body);
  const { username, email, password } = req.body;
  const hassedPassword = bcrypt.hashSync(password, 10);
  const newUser = new User({ username, email, password: hassedPassword });
  try {
    await newUser.save();
    res.status(201).json("user created successfully!");
  } catch (error) {
    next(error);
  }
};
