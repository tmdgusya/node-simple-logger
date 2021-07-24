# Simple-Logger In NodeJS😃

Custom Logger In Javascript Runtime Environment (also TS)

It's Most Simple of Simple!

## Installation

```
$ npm install node-custom-logger
```

## Example In Koa.js

```javascript
import Koa from "koa";
import Router from "koa-router";
import bodyParser from "koa-bodyparser";
import cors from "@koa/cors";
import SimpleLogger from "simple-logger-in-js";

const app = new Koa();
const router = new Router();
const port = 3000;

app.use(cors());
app.use(async (ctx, next) => {
  SimpleLogger(
    { host: ctx.host },
    "[DEBUG] ${options.now} User Connected Host : ${options.host}"
  );
  next();
});
app.use(bodyParser());
app.use(router.routes);

app.listen(port, () => console.log("koa server loading..."));
```

😃 **OutPut**
