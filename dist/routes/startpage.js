"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const startPage_1 = __importDefault(require("../controllers/startPage"));
const router = express_1.default.Router();
router.get("/", startPage_1.default.startPage);
module.exports = router;
