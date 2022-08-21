import express, { Request, Response, NextFunction } from 'express';
import models from '../models';
import logger from '../config/logger';
import { getHtml, getRemark } from '../lib/format';
import { IPostType } from '../models/model/Post';
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

      const contentHtml = await getHtml(result[0].content);
      res.send({ ...result[0].toObject(), contentHtml });
    } catch (e) {
      const error = new Error('GET getPostData Unhandled error!');
      logger.error(e || 'GET getPostData Unhandled error!');
      next(error);
    }
  }
);

router.post(
  '/createPost',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id, content } = req.body;
      const remark = getRemark(id, content) as IPostType;
      const result = await models.PostAPI.createPost(remark);
      res.send(result);
    } catch (e) {
      const error = new Error('GET createPost Unhandled error!');
      logger.error(e || 'GET createPost Unhandled error!');
      next(error);
    }
  }
);

router.patch(
  '/updatePost',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id, content } = req.body;
      const result = await models.PostAPI.updatePost(id, content);
      res.send(result);
    } catch (e) {
      const error = new Error('GET updatePost Unhandled error!');
      logger.error(e || 'GET updatePost Unhandled error!');
      next(error);
    }
  }
);

router.delete(
  '/deletePost',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.body;
      const result = await models.PostAPI.deletePost(id);
      res.send(result);
    } catch (e) {
      const error = new Error('GET deletePost Unhandled error!');
      logger.error(e || 'GET deletePost Unhandled error!');
      next(error);
    }
  }
);

export default router;
