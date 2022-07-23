import express, { Request, Response, NextFunction } from "express";
import { getAllPostsData, getPostData } from "../lib/posts";
const router = express.Router();

router.get(
  "/getAllPostData",
  (req: Request, res: Response, next: NextFunction) => {
    res.send(getAllPostsData());
  }
);
router.get(
  "/getPostData/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    res.send(await getPostData(req.params.id));
  }
);

router.post(
  "/updatePostData",
  (req: Request, res: Response, next: NextFunction) => {
    res.send(req.body);
  }
);

export default router;
