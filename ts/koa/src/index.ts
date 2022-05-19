import Koa from "koa";
import controller from "./router";
const app = new Koa();

app.use(controller.routes()).use(controller.allowedMethods());
app.listen(4000, () => {
  console.log("heurm server is listening to port 4000");
});
