import express from "express";
import ctrl from "../../controllers/contacts.js";
import contactSchema from "../../schemas/contactAddSchema.js";
import isEmptyReq from "../../middlewares/isEmptyReq.js";
import validateRequestBody from "../../middlewares/validateRequestBody.js";

const contactsRouter = express.Router();

contactsRouter.get("/", ctrl.getAllContacts);

contactsRouter.get("/:id", ctrl.getById);

contactsRouter.post(
  "/",
  isEmptyReq,
  validateRequestBody(contactSchema),
  ctrl.addNewContact
);

contactsRouter.delete("/:id", ctrl.deleteContactById);

contactsRouter.put(
  "/:id",
  isEmptyReq,
  validateRequestBody(contactSchema),
  ctrl.updateContactById
);

export default contactsRouter;
