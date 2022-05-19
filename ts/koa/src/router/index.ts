import Router from "koa-router";
import board from "./board";

const router: Router = new Router();
router.use("/board", board.routes());

export default router;
