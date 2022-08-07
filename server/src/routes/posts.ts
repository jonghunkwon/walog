import express, { Request, Response, NextFunction } from 'express';
import { getPosts, getPost } from '../lib/posts';
import logger from '../config/logger';

const getDBPosts = require('../models').getDBPosts;
const router = express.Router();

router.get(
  '/getAllPostData',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.send(await getDBPosts());
    } catch (e) {
      const error = new Error('GET getPosts Unhandled error!');
      logger.error('GET getPosts Unhandled error!');
      next(error);
    }
  }
);

router.get(
  '/getPostData/*',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.send(await getPost(Object.values(req.params).join('/')));
    } catch (e) {
      const error = new Error('GET getPostData Unhandled error!');
      logger.error('GET getPostData Unhandled error!');
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
