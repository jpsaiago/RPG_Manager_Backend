import { Request, Response, NextFunction } from "express";
import chalk from "chalk";

const request = (info: string) => {
  console.log(chalk.blueBright(`[${new Date().toLocaleDateString}] [INFO] ${info}`));
};

const warning = (err: Error) => {
  console.log(chalk.redBright(`[${new Date().toLocaleDateString}] [WARNING] ${err.message}`));
};

const logger = {
  request,
  warning,
};
export default logger;
