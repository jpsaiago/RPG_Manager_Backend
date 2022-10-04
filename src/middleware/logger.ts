import { Request, Response, NextFunction } from "express";
import chalk from "chalk";

const request = (req: Request, res: Response, next: NextFunction) => {
  console.log(chalk.blueBright(`[${new Date().toLocaleDateString}] [${req.method} - ${req.ip}]`));
  console.table(req.body);
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
