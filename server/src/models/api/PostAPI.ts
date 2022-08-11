import Post from '../model/Post';

export const getPosts = async () => {
  return await Post.find({});
};

export const getPost = async (id: string) => {
  return await Post.find({ id });
};
