"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const helmet_1 = __importDefault(require("helmet"));
const config_1 = __importDefault(require("./config/config"));
const logging_1 = __importDefault(require("./config/logging"));
const http_1 = __importDefault(require("http"));
const healthcheck_1 = __importDefault(require("./routes/healthcheck"));
const homePage_1 = __importDefault(require("./routes/homePage"));
const posts_1 = __importDefault(require("./routes/posts"));
const users_1 = __importDefault(require("./routes/users"));
const adminLogin_1 = __importDefault(require("./routes/adminLogin"));
const NAMESPACE = "Server";
const router = (0, express_1.default)();
router.use((0, helmet_1.default)());
router.use((req, res, next) => {
    logging_1.default.info(NAMESPACE, `METHOD [${req.method}], URL - [{req.url}], IP = [${req.socket.remoteAddress}]`);
    res.on("finish", () => {
        logging_1.default.info(NAMESPACE, `METHOD [${req.method}], URL - [{req.url}], IP = [${req.socket.remoteAddress}], STATUS - [${res.statusCode}]`);
    });
    next();
});
/* Parse the request */
router.use(body_parser_1.default.urlencoded({ extended: false }));
router.use(body_parser_1.default.json());
/* Rules of the API */
router.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    if (req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "GET PATCH POST, PUT, DELETE");
        return res.status(200).json({});
    }
    next();
});
/* EJS Html rendering */
router.engine("html", require("ejs").renderFile);
router.use(express_1.default.static("static"));
/* Routes */
router.use("/healthcheck", healthcheck_1.default);
router.use("/", homePage_1.default);
router.use("/posts", posts_1.default);
router.use("/posts/:id", posts_1.default);
router.use("/users", users_1.default);
router.use("/admin", adminLogin_1.default);
/* Error Handling */
router.use((req, res, next) => {
    const error = new Error("Not Found");
    return res.status(404).json({
        message: error.message,
    });
});
/* Create the server */
const httpServer = http_1.default.createServer(router);
httpServer.listen(config_1.default.server.port, () => logging_1.default.info(NAMESPACE, `Server running on ${config_1.default.server.port}:${config_1.default.server.port}`));
