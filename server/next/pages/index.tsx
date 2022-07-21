import type { NextPage, GetServerSideProps } from "next";
import { useRouter } from "next/router";
import axios, { AxiosResponse } from "axios";
import Template from "../components/base/Template";
// import { getAllPostsData } from "../lib/posts";
import LinkButton from "../styles/components/LinkButton";

interface PostProps {
  allPostsData: {
    id: string;
    date: string;
    title: string;
  }[];
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { data: allPostsData } = await axios(
    `${process.env.SERVER_HOST}/posts/getAllPostData`
  );
  return {
    props: {
      allPostsData,
    },
  };
};

const Home: NextPage<PostProps> = ({ allPostsData }) => {
  const router = useRouter();

  return (
    <Template title="" description="" url="" author="">
      <h2>Blog </h2>
      <ul>
        {allPostsData.map(({ id, date, title }, index) => (
          <li key={`${id}${index}`}>
            <LinkButton
              handleClick={(e) =>
                router.push(`/posts/${encodeURIComponent(id)}`)
              }
            >
              <>
                {id}
                <br />
                {title}
                <br />
                {date}
              </>
            </LinkButton>
          </li>
        ))}
      </ul>
    </Template>
  );
};

export default Home;
