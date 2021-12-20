import { Request, Response, NextFunction } from "express";
import logging from "../config/logging";

const NAMESPACE = "Users";

const users = (req: Request, res: Response, next: NextFunction) => {
  logging.info(NAMESPACE, "Users route called.");

  return res.status(200).json({
    status: "success",
    message: "Users successfully fetched",
  });
};

export default { users };
