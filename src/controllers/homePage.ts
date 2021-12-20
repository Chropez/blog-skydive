import { Request, Response, NextFunction } from "express";
import logging from "../config/logging";

const NAMESPACE = "Home";

const homePage = (req: Request, res: Response, next: NextFunction) => {
  logging.info(NAMESPACE, "Home Page Route Called");

  return res.render("home.html");
};

export default { homePage };
