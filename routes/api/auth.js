import express from "express";
import ctrl from "../../controllers/auth.js";
import schema from "../../schemas/authSchemas.js";
import { isEmptyReq, validateRequestBody, authenticate } from "../../middlewares/index.js";

const authRouter = express.Router();

authRouter.post(
  "/register",
  isEmptyReq,
  validateRequestBody(schema),
  ctrl.signup
);

authRouter.post("/login", isEmptyReq, validateRequestBody(schema), ctrl.signin);

authRouter.get("/current", authenticate, ctrl.getCurrent);

authRouter.post("/logout", authenticate, ctrl.logout);

export default authRouter;
