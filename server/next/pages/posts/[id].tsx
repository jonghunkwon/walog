import type { NextPage, GetServerSideProps } from "next";
import axios, { AxiosResponse } from "axios";
import cx from "classnames";
import Template from "../../components/base/Template";
import {
  markdownRenderStyles,
  primeOneDark,
} from "../../styles/markdownStyles";

interface PostProps {
  id: string;
  date: string;
  title: string;
  contentHtml: string;
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const result = await axios(
    `${process.env.SERVER_HOST}/posts/getPostData/${params?.id as string}`
  );
  return {
    props: {
      ...result.data,
    },
  };
};

const Posts: NextPage<PostProps> = ({ id, date, title, contentHtml }) => {
  return (
    <Template title="" description="" url="" author="">
      <h2>Posts Test</h2>
      {id}
      <br />
      {title}
      <br />
      {date}
      <br />
      <article
        className={cx(markdownRenderStyles, primeOneDark)}
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />
    </Template>
  );
};

export default Posts;
