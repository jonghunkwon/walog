import express, { Request, Response, NextFunction } from 'express';
import models from '../../models';
import logger from '../../config/logger';
import { getRemark } from '../../lib/format';
import { IPostType } from '../../models/model/Post';
const router = express.Router();

router.get(
  '/getPosts',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.send(await models.PostAPI.getPosts());
    } catch (e) {
      const error = new Error('GET admin/posts/getPosts Unhandled error!');
      logger.error(e || 'GET admin/posts/getPosts Unhandled error!');
      next(error);
    }
  }
);

router.get(
  '/getPost/*',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await models.PostAPI.getPost(
        Object.values(req.params).join('/')
      );

      if (result.length === 0) {
        new Error('GET admin/posts/getPost Unhandled error!');
      }

      res.send({ ...result[0].toObject() });
    } catch (e) {
      const error = new Error('GET admin/posts/getPost Unhandled error!');
      logger.error(e || 'GET admin/posts/getPost Unhandled error!');
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
      const error = new Error('GET admin/posts/createPost Unhandled error!');
      logger.error(e || 'GET admin/posts/createPost Unhandled error!');
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
      const error = new Error('GET admin/posts/updatePost Unhandled error!');
      logger.error(e || 'GET admin/posts/updatePost Unhandled error!');
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
      const error = new Error('GET admin/posts/deletePost Unhandled error!');
      logger.error(e || 'GET admin/posts/deletePost Unhandled error!');
      next(error);
    }
  }
);

export default router;
