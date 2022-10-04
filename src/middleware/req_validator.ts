import { ZodEffects, AnyZodObject, ZodError } from "zod";
import { Request, Response, NextFunction } from "express";

export default function validator(schema: AnyZodObject | ZodEffects<AnyZodObject>) {
  return async function (req: Request, res: Response, next: NextFunction) {
    try {
      schema.parse(req.body);
      next();
    } catch (err) {
      if (err instanceof ZodError) {
        next(err);
      }
    }
  };
}
