"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const logging_1 = __importDefault(require("../config/logging"));
const NAMESPACE = "Home";
const homePage = (req, res, next) => {
    logging_1.default.info(NAMESPACE, "Home Page Route Called");
    return res.render("home.html");
};
exports.default = { homePage };
