import { z } from "zod";

export const messageSchema = z.object({
  message: z
    .string()
    .min(1, { message: "Message must be atleast 1 character long" })
    .max(500, { message: "Message must be atmost 500 character long" }),
});
