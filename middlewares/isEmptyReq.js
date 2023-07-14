import HttpError from "../utils/index.js";

const isEmptyReq = (schema) => {
  const func = (req, res, next) => {
    if (Object.keys(req.body).length === 0)
      throw HttpError(400, "missing fields");
    next();
  };

  return func;
};

export default isEmptyReq;
