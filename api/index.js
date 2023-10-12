import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";

dotenv.config();

const uri = process.env.URL;
main()
  .then(() => console.log("Conected to database"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(uri);
}

const app = express();

app.use(express.json());

app.listen(3000, () => console.log("The app is listening on port: 3000"));

app.use("/api", userRouter);
app.use("/api", authRouter);

app.use((err, req, res, next) => {
  const statuscode = err.statusCode || 500;
  const message = err.message || "Internal Server Error!";
  return res.status(statuscode).json({
    sucess: false,
    statuscode: statuscode,
    message: message,
  });
});
