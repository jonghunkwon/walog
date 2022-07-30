import express, { ErrorRequestHandler } from "express";
import cors from "cors";
import morgan from "morgan";
import posts from "./routes/posts";
import logger from "./config/logger";

const bodyParser = require("body-parser");

const app = express();
app.use("/public", express.static("public"));
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(bodyParser.json()); // for parsing application/json

const combined =
  ':remote-addr - :remote-user ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent"';
const morganFormat = process.env.NODE_ENV !== "production" ? "dev" : combined; // NOTE: morgan 출력 형태
app.use(morgan(morganFormat, { stream: logger.stream }));

app.use("/posts", posts);

// 공통 에러 처리
const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  logger.error(err.message || "Unhandled Error");
  res.status(500);
  res.send(err.message || "Unhandled Error");
};
app.use(errorHandler);

const port = "8000";
app.listen(port, () => logger.info(`Server Start Listening on port ${port}`));
