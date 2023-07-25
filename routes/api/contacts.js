import express from "express";
import ctrl from "../../controllers/contacts.js";
import schema from "../../schemas/contactSchemas.js";
import {
  isEmptyReq,
  validateRequestBody,
  isValidId,
  isEmptyFavorite,
} from "../../middlewares/index.js";

const contactsRouter = express.Router();

contactsRouter.get("/", ctrl.getAllContacts);

contactsRouter.get("/:id", isValidId, ctrl.getById);

contactsRouter.post(
  "/",
  isEmptyReq,
  validateRequestBody(schema.contactSchema),
  ctrl.addNewContact
);

contactsRouter.delete("/:id", isValidId, ctrl.deleteContactById);

contactsRouter.put(
  "/:id",
  isValidId,
  isEmptyReq,
  validateRequestBody(schema.contactSchema),
  ctrl.updateContactById
);

contactsRouter.patch(
  "/:id/favorite",
  isValidId,
  isEmptyFavorite,
  validateRequestBody(schema.contactUpdateFavoriteSchema),
  ctrl.updateStatusContact
);

export default contactsRouter;
