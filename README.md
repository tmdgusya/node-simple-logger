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

### 😃 **OutPut**

![image](https://user-images.githubusercontent.com/57784077/126864974-98c64340-e598-4971-810f-29f1df6acc4b.png)

## Other Example In Debugging Request

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
app.use(bodyParser());
app.use(async (ctx, next) => {
  SimpleLogger(
    {
      time: new Date().toISOString(),
      host: ctx.request.URL,
      body: JSON.stringify(ctx.request.body),
    },
    "[DEBUG] ${options.time} | User Connected Host : ${options.host}" +
      "\nRequeset Body : ${options.body}"
  );
  next();
});
app.use(router.routes);

app.listen(port, () => console.log("koa server loading..."));
```

### Output

![image](https://user-images.githubusercontent.com/57784077/126865232-2a3aa9ee-edea-40e8-9eb6-82bcc8975ba9.png)
