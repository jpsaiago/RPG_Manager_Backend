import express from "express";
import logger from "../middleware/logger";
import reqValidator from "../middleware/reqValidator";
import { RegisterInput } from "../models/userModel";
import { registerSchema } from "../zod_schemas/registerSchema";
import registerService from "../service/registerService";

const registerController = express.Router();
registerController.use(logger.request);

registerController.post("/register", reqValidator(registerSchema), async function (req, res) {
  const body = req.body as RegisterInput;
  try {
    await registerService(body);
    res.status(200).send(`User ${body.username} registered successfully`);
  } catch (error) {
    console.warn(error);
  }
});

export default registerController;
