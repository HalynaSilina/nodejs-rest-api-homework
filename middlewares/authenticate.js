import jwt from "jsonwebtoken";
import { ctrlWrapper } from "../decorators/index.js";
import {HttpError} from "../utils/index.js";
import User from "../models/user.js";
import dotenv from "dotenv";

dotenv.config();

const { JWT_SECRET } = process.env;

const authenticate = async (req, res, next) => {
  const { authorization = "" } = req.headers;
  const [bearer, token] = authorization.split(" ");
  if (bearer !== "Bearer") next(HttpError(401));
  try {
    const { id } = jwt.verify(token, JWT_SECRET);
    const user = await User.findById(id);
    if (!user || !user.token) next(HttpError(401));
    req.user = user;
    next();
  } catch {
    next(HttpError(401));
  }
};

export default ctrlWrapper(authenticate);
