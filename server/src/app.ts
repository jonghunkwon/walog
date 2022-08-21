import express, { ErrorRequestHandler } from 'express';
import cors from 'cors';
import morgan from 'morgan';

const bodyParser = require('body-parser');

import './config/enviroment';
import logger from './config/logger';
import posts from './routes/posts';
import adminPosts from './routes/admin/posts';

const app = express();
app.use('/public', express.static('public'));
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(bodyParser.json()); // for parsing application/json

const combined =
  ':remote-addr - :remote-user ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent"';
const morganFormat = process.env.NODE_ENV !== 'production' ? 'dev' : combined; // NOTE: morgan 출력 형태
app.use(morgan(morganFormat, { stream: logger.stream }));

app.use('/posts', posts);
app.use('/admin/posts', adminPosts);

// 공통 에러 처리
const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  logger.error(err.message || 'Unhandled Error');
  res.status(500);
  res.send(err.message || 'Unhandled Error');
};
app.use(errorHandler);

app
  .listen(process.env.SERVER_PORT)
  .on('error', (err) => {
    logger.error(err);
  })
  .on('listening', () => {
    logger.info(`Server Start Listening on port ${process.env.SERVER_PORT}`);
  });
