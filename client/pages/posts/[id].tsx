import type { NextPage, GetServerSideProps } from "next";
import Head from 'next/head';
import { fetchPost } from '../api/posts/post';

interface PostProps {
  id: string;
  contentHtml: string;
  title: string;
  date: string;
} 

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const result = await fetchPost(params?.id as string);

  return {
    props: result,
  };
};

const Posts: NextPage<PostProps> = ({
  id,
  contentHtml,
  title,
  date,
}) => {
  return (
    <>
      <Head>
        <title>{ title }</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div>
        <h2>{ title }</h2>
        <p> { date }</p>
        <span dangerouslySetInnerHTML={{ __html: contentHtml }}></span>
      </div>
    </>
  );
};

export default Posts;