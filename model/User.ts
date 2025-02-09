import mongoose, { Schema, Document } from "mongoose";
import { default } from '../tailwind.config';

export interface Message extends Document{
    content:string,
    createdAt:Date,
}

const MessageSchema: Schema<Message> = new Schema({
    content: { type: String, required: true },
    createdAt: { type: Date, required: true, default: Date.now() },
});

export interface User extends Document{
    username:string,
    email:string,
    password:string,
    verifyCode:string,
    verifyCodeExpires:Date,
    isVerified:boolean,
    isAcceptingMessages:boolean,
    messages:Message[],
}

const UserSchema: Schema<User> = new Schema({
    username: { type: String, required: [true, "Username is required"],unique:true },
    email: { type: String, required: [true,"Email is required"], unique: true, lowercase: true, match: [/\S+@\S+\.\S+/, "Please enter a valid email"] },
    password: { type: String, required: [true, "Password is required"] },
    verifyCode: { type: String, required: [true, "Verify code is required"] },
    verifyCodeExpires: { type: Date, required: true },
    isVerified: { type: Boolean, default: false },
    isAcceptingMessages: { type: Boolean, required: true, default: true },
    messages: [MessageSchema],
});


const UserModel=(mongoose.models.User as mongoose.Model<User>)||(mongoose.model<User>("User", UserSchema));
export default UserModel;