import type { NextPage, GetServerSideProps } from 'next'
import { useRouter } from "next/router";
import { fetchPostList } from './api/posts/post';
import styles from '../styles/Home.module.css'

interface HomeProps {
  postList: Array<any>;
}

export const getServerSideProps: GetServerSideProps= async () => {
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
            <a href={`/posts/${post.id}`} onClick={() => handleClick(post.id)} key={post.id}>
              <h2>{ post.title}</h2>
              <p>{ post.date}</p>
            </a>
          ))
        }
      </div>
    </>
  )
}

export default Home
