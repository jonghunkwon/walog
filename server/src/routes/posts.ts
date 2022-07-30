import express, { Request, Response, NextFunction } from "express";
import { getPosts, getPost } from "../lib/posts";
import logger from "../config/logger";
const router = express.Router();

router.get(
  "/getAllPostData",
  (req: Request, res: Response, next: NextFunction) => {
    res.send(getPosts());
  }
);

router.get(
  "/getPostData/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.send(await getPost(req.params.id));
    } catch (e) {
      const error = new Error("Unhandled error!");
      logger.error("GET getPostData Unhandled error!");
      next(error);
    }
  }
);

router.put("/savePost", (req: Request, res: Response, next: NextFunction) => {
  res.send(req.body);
});

router.delete(
  "/deletePost/:id",
  (req: Request, res: Response, next: NextFunction) => {
    res.send(req.body);
  }
);

export default router;
