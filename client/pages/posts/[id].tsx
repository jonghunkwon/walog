import type { NextPage, GetServerSideProps } from "next";
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
  console.log(title);
  return (
    <div>
      <h2>{ title }</h2>
      <p> { date }</p>
      <span dangerouslySetInnerHTML={{ __html: contentHtml }}></span>
    </div>
  );
};

export default Posts;