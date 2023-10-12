import User from "../models/userModel.js";
import { errorHandler } from "../utils/error.js";
import bcrypt from "bcryptjs/dist/bcrypt.js";
import jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {
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

export const signin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const validUser = await User.findOne({ email });
    if (!validUser) return next(errorHandler(404, "user not found!"));
    const validPassword = bcrypt.compareSync(password, validUser.password);
    if (!validPassword)
      return next(errorHandler(401, "incorrect username or password"));
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
    const {password : pass, ...rest} = validUser._doc
    res
      .cookie("acess_token", token, { httpOnly: true })
      .status(200)
      .json(rest);
  } catch (error) {
    next(error);
  }
};
