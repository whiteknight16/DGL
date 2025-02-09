import { z } from "zod";

export const userNameValidation = z
  .string()
  .min(3, "Username must be atleast 3 character long")
  .max(20, "Username must be atmost 20 character long");

export const signUpSchema = z.object({
  email: z.string().email({ message: "Invalid email" }),
  password: z
    .string()
    .min(6, { message: "Password must be atleast 6 character long" }),
  username: userNameValidation,
});
