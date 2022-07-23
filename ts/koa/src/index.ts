import Koa from "koa";
import controller from "./router";
import bodyParser from "koa-bodyparser";

const app = new Koa();

app.use(controller.routes()).use(controller.allowedMethods()).use(bodyParser());
app.listen(4000, () => {
  console.log("heurm server is listening to port 4000");
});
