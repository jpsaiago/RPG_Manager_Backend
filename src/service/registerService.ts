import { UserModel, RegisterInput } from "../models/userModel";
import bcrypt from "bcrypt";
import config from "../config";

export default async function registerService({ username, email, password }: RegisterInput) {
  const user = new UserModel({
    username: username,
    email: email,
    password: await bcrypt.hash(password, config.saltRounds),
  });
  return await user.save();
}
