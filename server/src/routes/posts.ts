import express, { Request, Response, NextFunction } from 'express';
import models from '../models';
import logger from '../config/logger';
import { getHtml } from '../lib/format';
const router = express.Router();

// main API pagination
/* 
 * "docs": [ // blog list
        {
            "_id": "63020795ebd1d1ac2bf862a2",
            "id": "redux",
            "title": "redux",
            "date": "2021-12-30",
            "category": "상태관리",
            "tags": [
                "redux"
            ],
            "description": "redux 상태관리를 소개합니다.",
            "createAt": "2022-08-21T10:23:17.311Z"
        },
    ],
    "total": 2, // blog 총 갯수
    "limit": 10, // 페이지 당 몇개를 보여줄지
    "page": 1, // 현재 페이지
    "pages": 1 // 총 페이지 수
 */
router.get(
  '/getPosts',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const page = /^\d+$/.test(req.query?.page as string)
        ? Number(req.query?.page)
        : 1;
      const limit = /^\d+$/.test(req.query?.limit as string)
        ? Number(req.query?.limit)
        : 10;

      res.send(await models.PostAPI.getPostsPagination(page, limit));
    } catch (e) {
      const error = new Error('GET posts/getPostList Unhandled error!');
      logger.error(e || 'GET posts/getPostList Unhandled error!');
      next(error);
    }
  }
);

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
      res.send({
        ...result[0].toObject(),
        contentHtml: contentHtml.content,
        toc: contentHtml.toc,
      });
    } catch (e) {
      const error = new Error('GET posts/getPostData Unhandled error!');
      logger.error(e || 'GET posts/getPostData Unhandled error!');
      next(error);
    }
  }
);

export default router;
