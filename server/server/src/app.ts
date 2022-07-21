import express, { Request, Response, NextFunction } from "express";
import path from "path";
import cors from "cors";
import morgan from "morgan";
import posts from "./routes/posts";

const bodyParser = require("body-parser");

const app = express();

app.use("/public", express.static("public"));
app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json());

app.use("/posts", posts);

const port = "8000";
app.listen(port, () => {
  console.log(`server on! http://localhost:${port}`);
});
