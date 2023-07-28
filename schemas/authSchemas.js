import Joi from "joi";
import emailRegex from "../constants/user-constants.js";

const userSchema = Joi.object({
  email: Joi.string().required().pattern(emailRegex).messages({
    "any.required": "missing required email field",
    "string.pattern.base": "invalid email",
  }),
  password: Joi.string().required().min(6).max(12).messages({
    "any.required": "missing required password field",
    "string.min": "password length must be at least 6 characters long",
    "string.max": "password length must be less than or equal to 12 characters long",
  }),
});

export default userSchema;
