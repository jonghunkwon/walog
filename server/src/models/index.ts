import mongoose, { ConnectOptions } from 'mongoose';
import logger from '../config/logger';
import postSchema, { PostName, PostCollectionName } from './schema/post';

const models = (() => {
  // atlas mongodb cluster와 연결
  mongoose
    .connect(
      `mongodb+srv://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@cluster0.jvyqrro.mongodb.net/?retryWrites=true&w=majority`,
      {
        dbName: 'walog',
        useNewUrlParser: true,
        useUnifiedTopology: true,
      } as ConnectOptions
    )
    .then(() => logger.info('mongodb connected'))
    .catch((err: string) => logger.error(err));

  return {
    Post: mongoose.model(PostName, postSchema, PostCollectionName),
  };
})();

export default models;
