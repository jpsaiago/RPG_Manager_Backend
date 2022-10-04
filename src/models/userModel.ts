import { model, Schema } from "mongoose";
import { z } from "zod";

const registerValidation = z.object({
  username: z.string(),
  email: z.string().email(),
  password: z
    .string()
    .min(8, "This password is too short, it should be at least 8 characters long"),
});

interface IUser {
  username: string;
  email: string;
  password: string;
  passwordConfirmation?: string;
}

const userSchema = new Schema<IUser>({
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const UserModel = model("User", userSchema);

export { UserModel, IUser, registerValidation };
