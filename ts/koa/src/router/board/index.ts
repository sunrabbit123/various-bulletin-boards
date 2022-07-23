import Router from "koa-router";
import * as Service from "./service";

const board: Router = new Router();

board.get("/:idx", Service.getB);
board.get("/", Service.getBList);
board.post("/", Service.createBList);
board.patch("/:idx", Service.patchB);
board.delete("/:idx", Service.deleteB);

export default board;
