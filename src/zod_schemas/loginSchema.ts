import { z } from "zod";

const loginSchema = z
  .object({
    username: z.string().optional(),
    email: z.string().email().optional(),
    password: z.string(),
  })
  .superRefine(({ username, email }, ctx) => {
    if (!(username || email)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Please provide login credentials.",
        fatal: true,
      });
    }

    if (username && email) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Please provide only one login credential.",
      });
    }
  });

export { loginSchema };
