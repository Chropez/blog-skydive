"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const logging_1 = __importDefault(require("../config/logging"));
const NAMESPACE = "Users";
const users = (req, res, next) => {
    logging_1.default.info(NAMESPACE, "Users route called.");
    return res.status(200).json({
        status: "success",
        message: "Users successfully fetched",
    });
};
exports.default = { users };
