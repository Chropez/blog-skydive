import express from "express";
import controller from "../controllers/users";

const router = express.Router();

router.get("/", controller.users);
router.get("/:id", controller.users);

export = router;