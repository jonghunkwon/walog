import React, { FunctionComponent } from "react";
import styled from "@emotion/styled";
import Link from "next/link";

interface BlogItemProps {
  href: string;
  title: string;
  description?: string; //필수?
  dateTime: string;
  onClick: (id:string) => void;
}

const Container = styled.div`
  & > a {
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
  color: ${props => props.theme.colors.grey700};
  ${props => props.theme.fonts.body2Regular};
`;

const BlogItem: FunctionComponent<BlogItemProps> = ({ href, dateTime, title, description, onClick}) => {
  return (
    <Container>
      <Link href={href} onClick={onClick}>
        <a>
          <Title>{title}</Title>
          <Description>{description}</Description>
          <Time dateTime={dateTime}>{dateTime}</Time>
        </a>
      </Link>
    </Container>
  );
};

export default BlogItem;
