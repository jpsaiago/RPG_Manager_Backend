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
    //This RegExp equates to at least one lower case letter, one upper case letter and one number
    const expression = /^[A-Z]+[a-z]+[0-9]+$/;
    if (!expression.test(password))
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message:
          "Your password should contain at least one lower case letter, one upper case letter and one number.",
      });
  });

export default registerSchema;
