"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const adminLogin_1 = __importDefault(require("../controllers/adminLogin"));
const router = express_1.default.Router();
router.get("/interface", adminLogin_1.default.adminLogin);
module.exports = router;
