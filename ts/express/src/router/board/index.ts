import { Router } from "express";
import * as Service from "./board.service";

const board = Router();

board.get("/:idx", Service.getB);
board.get("/", Service.getBList);
board.post("/", Service.createB);
board.patch("/:idx", Service.patchB);
board.delete("/:idx", Service.deleteB);

export default board;
