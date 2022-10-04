import { AnyZodObject, ZodError } from "zod";
import { Request, Response, NextFunction } from "express";

export default function validate(schema: AnyZodObject) {
  return async function (req: Request, res: Response, next: NextFunction) {
    try {
      schema.parse(req.body);
      next();
    } catch (err) {
      if (err instanceof ZodError) {
        res.status(400).send(err.issues);
      }
    }
  };
}
