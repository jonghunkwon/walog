import express, { Request, Response, NextFunction } from 'express';
import { getPost } from '../lib/posts';
import models from '../models';
import Post from '../models/model/Post';
import logger from '../config/logger';
import { getHtml } from '../lib/remark';
const router = express.Router();

router.get(
  '/getAllPostData',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.send(await models.PostAPI.getPosts());
    } catch (e) {
      const error = new Error('GET getPosts Unhandled error!');
      logger.error(e || 'GET getPosts Unhandled error!');
      next(error);
    }
  }
);

router.get(
  '/getPostData/*',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await models.PostAPI.getPost(
        Object.values(req.params).join('/')
      );

      if (result.length === 0) {
        new Error('GET getPostData Unhandled error!');
      }

      const contentHtml = await getHtml(result[0].markdown);
      res.send({ ...result[0].toObject(), contentHtml });
    } catch (e) {
      const error = new Error('GET getPostData Unhandled error!');
      logger.error(e || 'GET getPostData Unhandled error!');
      next(error);
    }
  }
);

router.put('/savePost', (req: Request, res: Response, next: NextFunction) => {
  res.send(req.body);
});

router.delete(
  '/deletePost/:id',
  (req: Request, res: Response, next: NextFunction) => {
    res.send(req.body);
  }
);

export default router;
