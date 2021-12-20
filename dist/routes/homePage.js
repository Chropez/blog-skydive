"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const homePage_1 = __importDefault(require("../controllers/homePage"));
const router = express_1.default.Router();
router.get("/", homePage_1.default.homePage);
module.exports = router;
