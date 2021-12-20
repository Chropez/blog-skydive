import express, { Express, Response, Request, NextFunction } from "express";
import bodyParser from "body-parser";
import helmet from "helmet";
import config from "./config/config";
import logging from "./config/logging";
import http from "http";

import healthcheck from "./routes/healthcheck";
import homePage from "./routes/homePage";
import posts from "./routes/posts";
import users from "./routes/users";
import adminLogin from "./routes/adminLogin";
import ejs from "ejs";

const NAMESPACE = "Server";
const router: Express = express();

router.use(helmet());

router.use((req: Request, res: Response, next: NextFunction) => {
  logging.info(
    NAMESPACE,
    `METHOD [${req.method}], URL - [{req.url}], IP = [${req.socket.remoteAddress}]`
  );

  res.on("finish", () => {
    logging.info(
      NAMESPACE,
      `METHOD [${req.method}], URL - [{req.url}], IP = [${req.socket.remoteAddress}], STATUS - [${res.statusCode}]`
    );
  });

  next();
});

/* Parse the request */
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

/* Rules of the API */
router.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );

  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "GET PATCH POST, PUT, DELETE");

    return res.status(200).json({});
  }

  next();
});

/* EJS Html rendering */
router.engine("html", require("ejs").renderFile);
router.use(express.static("static"));

/* Routes */
router.use("/healthcheck", healthcheck);
router.use("/", homePage);
router.use("/posts", posts);
router.use("/posts/:id", posts);
router.use("/users", users);
router.use("/admin", adminLogin);

/* Error Handling */
router.use((req, res, next) => {
  const error = new Error("Not Found");

  return res.status(404).json({
    message: error.message,
  });
});

/* Create the server */
const httpServer = http.createServer(router);
httpServer.listen(config.server.port, () =>
  logging.info(
    NAMESPACE,
    `Server running on ${config.server.port}:${config.server.port}`
  )
);
