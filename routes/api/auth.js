import express from "express";
import ctrl from "../../controllers/auth.js";
import schema from "../../schemas/authSchemas.js";
import {
  isEmptyReq,
  validateRequestBody,
  isSubscription,
  authenticate,
  upload,
} from "../../middlewares/index.js";

const authRouter = express.Router();

authRouter.post(
  "/register",
  isEmptyReq,
  validateRequestBody(schema.userSchema),
  ctrl.signup
);

authRouter.get("/verify/:verificationToken", ctrl.verify);

authRouter.post(
  "/login",
  isEmptyReq,
  validateRequestBody(schema.userSchema),
  ctrl.signin
);

authRouter.get("/current", authenticate, ctrl.getCurrent);

authRouter.post("/logout", authenticate, ctrl.logout);

authRouter.patch(
  "/",
  authenticate,
  isSubscription,
  validateRequestBody(schema.updateSubscriptionSchema),
  ctrl.updateSubscription
);

authRouter.patch("/avatars", authenticate, upload.single("avatar"), ctrl.updateAvatar)

export default authRouter;
