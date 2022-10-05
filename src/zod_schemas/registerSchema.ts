import z from "zod";

const registerSchema = z
  .object({
    username: z.string(),
    email: z.string().email(),
    password: z
      .string()
      .min(8, "This password is too short, it should be at least 8 characters long"),
  })
  .superRefine(({ password }, ctx) => {
    const expressions = {
      number: /\d/,
      caps: /[A-Z]/,
    };
    if (!expressions.number.test(password) || !expressions.caps.test(password))
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message:
          "Your password should contain at least one lower case letter, one upper case letter and one number.",
      });
  });

export { registerSchema };
