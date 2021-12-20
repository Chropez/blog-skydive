import express from "express";
import controller from "../controllers/posts";

const router = express.Router();

router.get("/", controller.posts);

router.get("/:id", controller.posts);

export = router;
