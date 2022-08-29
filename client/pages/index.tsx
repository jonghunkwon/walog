import type { NextPage, GetStaticProps } from 'next';
import { fetchPostList } from './api/posts/post';
import BlogItem from '../components/BlogItem';
import styles from '../styles/Home.module.css'

interface HomeProps {
  postList: Array<any>;
}

export const getStaticProps: GetStaticProps = async () => {
  const result = await fetchPostList();

  return {
    props: {
      postList: result,
    },
    revalidate: 600,
  };
};


const Home: NextPage<HomeProps> = ({
  postList,
}) => {
  return (
    <>
      <div className={styles.container}>
        {
          postList && postList.map((post: any) => (
            <BlogItem
              key={post.id}
              href={`/posts/${post.id}`}
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
