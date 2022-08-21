import Post, { IPostType } from '../model/Post';

export const getPosts = async () => {
  return await Post.find(
    {},
    { title: 1, date: 1, category: 1, tags: 1, description: 1, id: 1 }
  ).sort({ date: 'desc' });
};

export const getPost = async (id: string) => {
  return await Post.find({ id });
};

export const createPost = async (args: IPostType) => {
  const createPost = await new Post({ ...args });
  return await createPost.save();
};

export const updatePost = async (id: string, content: string) => {
  return await await Post.updateOne({ id }, { content });
};

export const deletePost = async (id: string) => {
  return await Post.deleteOne({ id });
};
