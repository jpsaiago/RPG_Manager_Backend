import { model, Schema } from "mongoose";

type RegisterInput = {
  username: string;
  email: string;
  password: string;
};

const userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const UserModel = model("User", userSchema);

export { UserModel, RegisterInput };
