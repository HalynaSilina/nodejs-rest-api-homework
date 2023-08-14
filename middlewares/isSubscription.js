import {HttpError} from "../utils/index.js";

const isSubscription = (req, res, next) => {
  if (Object.keys(req.body).length === 0)
    next(HttpError(400, "missing field subscription"));
  const { subscription } = req.body;
  console.log(subscription)
  if (
    subscription !== "starter" &&
    subscription !== "pro" &&
    subscription !== "business"
  )
    next(HttpError(400, "subscription must be starter, pro or business"));
  next();
};

export default isSubscription;
