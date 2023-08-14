import { HttpError } from "../utils/index.js";

const isEmptyEmailField = (req, res, next) => {
  if (Object.keys(req.body).length === 0)
    next(HttpError(400, "missing required field email"));
  next();
};

export default isEmptyEmailField;
