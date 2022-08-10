const mongoose = require('mongoose');

const Post = new mongoose.Schema({
  id: { type: String, default: '', require: true },
  title: { type: String, default: '', require: true },
  date: { type: String, default: '', require: true },
  category: { type: String, default: '', require: true },
  tags: { type: Array, default: [], require: true },
  description: { type: String, default: '', require: true },
  author: { type: String, default: '', require: true },
});

export const PostName = 'Post';
export const PostCollectionName = 'post';

export default Post;
