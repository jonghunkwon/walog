import type { NextPage, GetServerSideProps } from 'next'
import { useRouter } from "next/router";
import { fetchPostList } from './api/posts/post';
import PostList from '../components/PostList';

interface HomeProps {
  postList: Array<any>;
}

export const getServerSideProps: GetServerSideProps = async () => {
  const result = await fetchPostList();
  return {
    props: {
      postList: result,
    },
  };
};

const Home: NextPage<HomeProps> = ({
  postList,
}) => {
  const router = useRouter();

  const handleClick = (id: string) => {
    router.push(`/posts/${id}`)
  };

  return (
    <div>
      <h3 className="blind">블로그 포스트 리스트</h3>
      <PostList postList={postList} onClick={handleClick} />
    </div>
  )
}

export default Home
