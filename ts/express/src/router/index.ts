import { Router } from "express";
import board from "./board";

const router = Router();

router.use("/board", board);

export default router;
