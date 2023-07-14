import HttpError from "../utils/index.js";

const validateRequestBody = (schema) => {
  const func = (req, res, next) => {
    if (Object.keys(req.body).length === 0)
      throw HttpError(400, "missing fields");
    const { error } = schema.validate(req.body);
    if (error) {
      next(HttpError(400, error.message));
    }
    next();
  };

  return func;
};

export default validateRequestBody;
