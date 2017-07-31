const Koa = require("koa");
const Router = require("koa-router");
const cors = require("koa-cors");
const fetch = require("node-fetch");
const qs = require("querystring");
const convert = require("koa-convert");

const app = new Koa();
const router = new Router();

let baseURL = "http://m.maizuo.com/v4/api";

app.use(
  convert(
    cors({
      credentials: true,
      maxAge: 86400000,
      methods: "OPTIONS, GET, PUT, POST, DELETE",
      headers: "x-requested-with, accept, origin, content-type"
    })
  )
);

router.use(async (ctx, next) => {
  console.log('ctx.request.method: ', ctx.request.method);
  if (ctx.request.method == "OPTIONS") {
    ctx.response.status = 200;
    return;
  }
  await next();
});

router.use("/favicon.ico", ctx => {
  return;
});

router.get("/", (ctx, next) => {
  // ctx.router available
  next();
});

router.get("/billboard/home", async (ctx, next) => {
  let params = {};
  params = qs.stringify(params);
  const res = await fetch(`${baseURL}/billboard/home?${params}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" }
  });
  const json = await res.json();
  ctx.body = json;
  next();
});

router.get("/film/now-playing", async (ctx, next) => {
  let params = {};
  params = qs.stringify(params);
  const res = await fetch(`${baseURL}/film/now-playing?_t=${new Date() * 1}&page=1&count=5`, {
    method: "GET",
    headers: { "Content-Type": "application/json" }
  });
  const json = await res.json();
  ctx.body = json;
  next();
});

router.get("/film/coming-soon", async (ctx, next) => {
  let params = {};
  params = qs.stringify(params);
  const res = await fetch(`${baseURL}/film/coming-soon?_t=${new Date() * 1}&page=1&count=3`, {
    method: "GET",
    headers: { "Content-Type": "application/json" }
  });
  const json = await res.json();
  ctx.body = json;
  next();
});

app.use(router.routes()).use(router.allowedMethods());
app.listen(9000);