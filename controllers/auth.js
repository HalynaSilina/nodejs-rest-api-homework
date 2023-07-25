import bcript from "bcryptjs";
import { Jwt } from "jsonwebtoken";
import dotenv from "dotenv";
import User from "../models/user.js";
import HttpError from "../utils/index.js";
import { ctrlWrapper } from "../decorators/index.js";

dotenv.config();

const { JWT_SECRET } = process.env;

const signup = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) throw HttpError(409, "Email in use");
  const hashPass = bcript.hash(password, 10);
  const newUser = await User.create(...req.body, hashPass);
  res.status(201).json({
    user: {
      email: newUser.email,
      subscription: newUser.subscription,
    },
  });
};

const signin = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) throw HttpError(401, "Email or password is wrong");
  const comparePass = bcript.compare(password, user.password);
  if (!comparePass) throw HttpError(401, "Email or password is wrong");
  const payload = {
    id: user._id,
  };
  const token = Jwt.sign(payload, JWT_SECRET, { expiresIn: "1d" });
  res.status(200).json({
    token: token,
    user: {
      email: user.email,
      subscription: user.subscription,
    },
  });
};

export default {
  signup: ctrlWrapper(signup),
  signin: ctrlWrapper(signin),
};
