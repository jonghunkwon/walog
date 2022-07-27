import type { NextPage } from 'next'
import { useEffect, useState } from 'react';
import { useRouter } from "next/router";
import Head from 'next/head'
import Image from 'next/image'
import { fetchPostList } from './api/posts/post';
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const router = useRouter();
  const [postList, setPostList] = useState([]);

  const getPostList = async () => {
    const data = await fetchPostList();
    setPostList(data);
  }
  const handleClick = (id: string) => {
    router.push(`/posts/${id}`)
  };

  useEffect(() => {
    getPostList();
  }, []);

  return (
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
  )
}

export default Home
