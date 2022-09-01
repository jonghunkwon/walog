import React, { FunctionComponent } from "react";
import styled from "@emotion/styled";
import Link from "next/link";

interface PostData {
  id: string;
  href: string;
  title: string;
  description?: string; //필수?
  date: string;
}

interface PostListProps {
  postList: PostData[],
  onClick: (id: string) => void;
}

const Li = styled.li`
  & ~ li { 
    border-top: 1px solid #dde2e6;
  }
  
  a {
    display: block;
    padding: 20px 0;

    &:hover {
      strong, p {
        color: ${(props) => props.theme.colors.primary800};
      }
    }
  }
`;

const Title = styled.strong`
  display: block;
  ${(props) => props.theme.fonts.title2};
`;

const Description = styled.p`
  margin-top: 12px;
  ${(props) => props.theme.fonts.body1Regular};
`;

const Time = styled.time`
  display: block;
  margin-top: 10px;
  text-align: right;
  color: ${(props) => props.theme.colors.grey700};
  ${(props) => props.theme.fonts.body2Regular};
`;

const PostList: FunctionComponent<PostListProps> = ({ postList, onClick }) => {
  return (
    <ul>
      {postList && postList.map((post) => {
        return (
          <Li key={post.id}>
            <Link href={`/posts/${post.id}`} onClick={onClick}>
              <a>
                <Title>{post.title}</Title>
                <Description>{post.description}</Description>
                <Time dateTime={post.date}>{post.date}</Time>
              </a>
            </Link>
          </Li>
        )
      })}
    </ul>
  );
};

export default PostList;
