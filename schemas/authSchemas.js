import Joi from "joi";
import emailRegex from "../constants/user-constants.js";

const userSignUpSchema = Joi.object({
  name: Joi.string().required().messages({
    "any.required": "missing required name field",
  }),
  email: Joi.string()
    .required()
    .pattern(emailRegex)
    .message("invalid email")
    .messages({
      "any.required": "missing required email field",
    }),
  password: Joi.string().required().messages({
    "any.required": "missing required phone field",
  }),
});

const userSignInSchema = Joi.object({
  email: Joi.string()
    .required()
    .pattern(emailRegex)
    .message("invalid email")
    .messages({
      "any.required": "missing required email field",
    }),
  password: Joi.string().required().messages({
    "any.required": "missing required phone field",
  }),
});

export default { userSignUpSchema, userSignInSchema };
