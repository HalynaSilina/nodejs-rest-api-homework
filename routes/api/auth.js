import express from "express";
import ctrl from "../../controllers/auth.js";
import schema from "../../schemas/authSchemas.js";
import {
  isEmptyReq,
  validateRequestBody,
} from "../../middlewares/index.js";

const authRouter = express.Router();

authRouter.post(
  "/register",
  isEmptyReq,
  validateRequestBody(schema.userSignUpSchema),
  ctrl.signup
);

authRouter.post(
  "/login",
  isEmptyReq,
  validateRequestBody(schema.userSignInSchema),
  ctrl.signin
);

export default authRouter;
