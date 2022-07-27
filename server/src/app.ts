import express, { ErrorRequestHandler } from "express";
import cors from "cors";
import morgan from "morgan";
import posts from "./routes/posts";

const bodyParser = require("body-parser");

const app = express();

app.use("/public", express.static("public"));
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(bodyParser.json()); // for parsing application/json

app.use("/posts", posts);

app.use(morgan("dev"));

// 공통 에러 처리
const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  res.status(500);
  res.send(err.message || "Unhandled Error");
};
app.use(errorHandler);

const port = "8000";
app.listen(port, () => {
  console.log(`server on! http://localhost:${port}`);
});
