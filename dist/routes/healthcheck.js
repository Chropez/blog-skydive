"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const healthcheck_1 = __importDefault(require("../controllers/healthcheck"));
const router = express_1.default.Router();
router.get("/ping", healthcheck_1.default.healthCheck);
module.exports = router;
