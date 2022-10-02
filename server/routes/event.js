import express from "express";
import { getEvents, createEvents, deleteEvents } from "../controllers/event.js";

const router = express.Router();

router.get("/", getEvents);
router.post("/", createEvents);
router.delete("/:_id", deleteEvents);

export default router;
