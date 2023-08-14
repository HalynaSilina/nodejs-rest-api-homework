import { isValidObjectId } from "mongoose";
import {HttpError} from "../utils/index.js";

const isValidId = (req, res, next)=> {
    const {id} = req.params;
    if(!isValidObjectId(id)) {
        return next(HttpError(404))
    }
    next();
}

export default isValidId;