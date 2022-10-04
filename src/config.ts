import dotenv from "dotenv";
dotenv.config();

export default {
  saltFactor: <number>(<unknown>process.env.SALT_FACTOR),
  port: <number>(<unknown>process.env.PORT),
};
