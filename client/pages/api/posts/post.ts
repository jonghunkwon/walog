import axios from 'axios';

const baseUrl = 'http://localhost:8000';

const fetchPostList = async () => {
  try {
    const { data } = await axios.get(`${baseUrl}/posts/getAllPostData`);
    return data;
  } catch (err) {
    return err;
  }
};

const fetchPost = async (id: string) => {
  try {
    const { data } = await axios.get(`${baseUrl}/posts/getPostData/${id}`);
    return data;
  } catch (err) {
    return err;
  }
}

export {
  fetchPostList,
  fetchPost,
};
