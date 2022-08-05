import type { NextPage, GetServerSideProps } from 'next'
import { useRouter } from "next/router";
import { fetchPostList } from './api/posts/post';
import BlogItem from '../components/BlogItem';
import styles from '../styles/Home.module.css'

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
    <>
      <div className={styles.container}>
        {
          postList && postList.map((post: any) => (
            <BlogItem
              key={post.id}
              onClick={handleClick}
              href={`/posts${post.id}`}
              title={post.title}
              dateTime={post.date}
              description={post.description}
            />
          ))
        }
      </div>
    </>
  )
}

export default Home
