import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
      unique: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
    avatar: {
      type : String,
      default : 'https://th.bing.com/th/id/R.9acfe78b8e1cfbf4c1b1d1f31745b96b?rik=Uo5g%2b2HI6iHJig&pid=ImgRaw&r=0'
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model('User', userSchema);

export default User;