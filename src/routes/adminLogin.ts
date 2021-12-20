import express from "express";
import controller from "../controllers/adminLogin";

const router = express.Router();

router.get("/interface", controller.adminLogin);

export = router;
