import express from "express";
import logger from "../middleware/logger";
import validator from "../middleware/req_validator";
import registerSchema from "../definitions/registerSchema";

const registerController = express.Router();

registerController.use((req, res, next) => logger.request(req, res, next));
registerController.use(validator(registerSchema));

registerController.post("/login", (req, res, next) => console.log("Hi user! I don't work yet."));

export default registerController;
