import express, { Request, Response, NextFunction } from 'express';
import models from '../models';
import logger from '../config/logger';
import { getHtml } from '../lib/format';
const router = express.Router();

router.get(
  '/getAllPostData',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.send(await models.PostAPI.getPosts());
    } catch (e) {
      const error = new Error('GET posts/getAllPostData Unhandled error!');
      logger.error(e || 'GET posts/getAllPostData Unhandled error!');
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
        new Error('GET posts/getPostData Unhandled error!');
      }

      const contentHtml = await getHtml(result[0].content);
      res.send({ ...result[0].toObject(), contentHtml });
    } catch (e) {
      const error = new Error('GET posts/getPostData Unhandled error!');
      logger.error(e || 'GET posts/getPostData Unhandled error!');
      next(error);
    }
  }
);

export default router;
