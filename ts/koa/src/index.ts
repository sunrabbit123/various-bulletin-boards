import Koa from "koa";

const app = new Koa();

app.use((_) => {
  console.log(1);
});

app.use((_) => {
  console.log(2);
});

app.use((ctx) => {
  ctx.body = "Hello Koa";
});

app.listen(4000, () => {
  console.log("heurm server is listening to port 4000");
});
