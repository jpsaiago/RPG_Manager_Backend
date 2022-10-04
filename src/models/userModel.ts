import { model, Schema } from "mongoose";

interface IUser {
  username: string;
  email: string;
  password: string;
}

const userSchema = new Schema<IUser>({
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const UserModel = model("User", userSchema);

export { UserModel, IUser };
