import dotenv from "dotenv";
import bcrypt from "bcrypt";
dotenv.config();

const saltRounds = 11;
const port = process.env.PORT;
const mongoUsername = process.env.MONGO_USERNAME;
const mongoPassword = process.env.MONGO_PASSWORD;
const mongoURL = `mongodb+srv://${mongoUsername}:${mongoPassword}@rpgmanager.oivrsx8.mongodb.net/`;

export default {
  mongo: {
    username: mongoUsername,
    password: mongoPassword,
    url: mongoURL,
  },
  port,
  saltRounds,
};
