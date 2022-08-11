import mongoose, { ConnectOptions } from 'mongoose';
import logger from '../config/logger';
import PostAPI from './api';

const models = (() => {
  // atlas mongodb cluster와 연결
  mongoose
    .connect(
      `mongodb+srv://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@cluster0.jvyqrro.mongodb.net/?retryWrites=true&w=majority`,
      {
        dbName: `${process.env.DATABASE_NAME}`,
        useNewUrlParser: true,
        useUnifiedTopology: true,
      } as ConnectOptions
    )
    .then(() => logger.info('mongodb connected'))
    .catch((err: string) => logger.error(err));

  return {
    ...PostAPI,
  };
})();

export default models;
