import { Request, Response, NextFunction } from "express";
import logging from "../config/logging";

const NAMESPACE = "Posts";

const posts = (req: Request, res: Response, next: NextFunction) => {
  logging.info(NAMESPACE, "Post route called");

  return res.status(200).json({
    status: "success",
    message: "Post route successfully",
  });
};

export default { posts };
