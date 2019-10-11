import express from "express";
import expressValidator from "express-validator";
import bodyParser from "body-parser";
import compression from "compression";
import helmet from "helmet";
import cors from "cors";
import router from "./routes";

import { sequelize } from "./database/models";
const isProduction = process.env.NODE_ENV === "production";

const app = express();

app.use(
  cors({
    credentials: true,
    origin: [],
    optionsSuccessStatus: 200
  })
);

app.use(compression());
app.use(helmet());

app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true
  })
);
app.use(bodyParser.json());
// app.use(expressValidator());

app.use(router);
/* app.get("products?limit=10&offset=3", (err, res) => {
  console.log(res);
}); */

// app.on("close", () => sequelize.close());

export default app;
