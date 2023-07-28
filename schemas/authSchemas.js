import Joi from "joi";
import emailRegex from "../constants/user-constants.js";

const userSchema = Joi.object({
  email: Joi.string().required().pattern(emailRegex).messages({
    "any.required": "missing required email field",
  }),
  password: Joi.string().required().messages({
    "any.required": "missing required phone field",
  }),
});

export default userSchema;
