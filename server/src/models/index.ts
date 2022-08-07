import logger from '../config/logger';

const { MongoClient, ServerApiVersion } = require('mongodb');

// console.log(
//   `mongodb+srv://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@cluster0.jvyqrro.mongodb.net/?retryWrites=true&w=majority`
// );
// const client = new MongoClient(
//   `mongodb+srv://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@cluster0.jvyqrro.mongodb.net/?retryWrites=true&w=majority`,
//   // 'mongodb+srv://wadiz:wadiz1234@cluster0.jvyqrro.mongodb.net/?retryWrites=true&w=majority',
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     serverApi: ServerApiVersion.v1,
//   }
// );

export const getDBPosts = async () => {
  try {
    const client = new MongoClient(
      `mongodb+srv://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@cluster0.jvyqrro.mongodb.net/?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverApi: ServerApiVersion.v1,
      }
    );

    await client.connect();

    const posts = client.db('walog').collection('post');
    const cursor = posts.find({});
    let results: any = [];
    await cursor.forEach((item: any) => (results = [...results, { ...item }]));
    client.close();
    return results;
  } catch (err) {
    logger.error(err);
  }
};
