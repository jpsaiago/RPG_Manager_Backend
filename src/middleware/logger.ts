import { Request, Response, NextFunction } from "express";
import chalk from "chalk";

const request = (req: Request, res: Response, next: NextFunction) => {
  console.log(
    chalk.blueBright(
      `[${new Date().toLocaleString()}] [${req.method} - [${req.originalUrl}] - ${req.ip}]`
    )
  );
  if (Object.keys(req.body).length >= 1) {
    console.table(req.body);
  }
  next();
};

const warning = (err: Error) => {
  console.log(chalk.redBright(`[${new Date().toLocaleDateString}] [WARNING] ${err.message}`));
};

const logger = {
  request,
  warning,
};
export default logger;
