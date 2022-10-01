import Koa from "koa";
import controller from "./router";
import bodyParser from "koa-bodyparser";

const app = new Koa();

app.use(bodyParser()).use(controller.allowedMethods()).use(controller.routes());
app.listen(3000, () => {
  console.log("heurm server is listening to port 4000");
});
