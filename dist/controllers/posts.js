"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const logging_1 = __importDefault(require("../config/logging"));
const NAMESPACE = "Posts";
const posts = (req, res, next) => {
    logging_1.default.info(NAMESPACE, "Post route called");
    return res.status(200).json({
        status: "success",
        message: "Post route successfully",
    });
};
exports.default = { posts };
