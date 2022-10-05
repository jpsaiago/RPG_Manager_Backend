import express from "express";
import logger from "../middleware/logger";
import validator from "../middleware/reqValidator";
import { loginSchema } from "../zod_schemas/loginSchema";

const loginController = express.Router();

loginController.use((req, res, next) => logger.request(req, res, next));
loginController.use(validator(loginSchema));

loginController.post("/login", (req, res, next) => console.log("Hi user! I don't work yet."));

export default loginController;
