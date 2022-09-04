import type { NextPage, GetServerSideProps } from "next";
import Head from 'next/head';
import { fetchPost } from '../api/posts/post';
import cx from 'classnames';
import {
  markdownRenderStyles,
  primeOneDark,
} from "../../styles/markdownStyles";
import PostTitle from '../../components/PostTitle';

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
        <h2 className="blind">포스트 상세내용</h2>
        <PostTitle title={title} dateTime={date}/>
        <article className={cx(markdownRenderStyles, primeOneDark)} dangerouslySetInnerHTML={{ __html: contentHtml }}></article>
      </div>
    </>
  );
};

export default Posts;