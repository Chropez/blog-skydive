import { Request, Response, NextFunction } from "express";
import logging from "../config/logging";

const NAMESPACE = "Admin Login";

const adminLogin = (req: Request, res: Response, next: NextFunction) => {
  logging.info(NAMESPACE, "Admin Interface Login called");

  return res.status(200).json({
    status: "success",
    message: "Admin Interface Login",
  });
};

export default { adminLogin };
