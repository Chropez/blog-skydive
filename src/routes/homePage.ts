import express from "express";
import controller from "../controllers/homePage";

const router = express.Router();

router.get("/", controller.homePage);

export = router;
