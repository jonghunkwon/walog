import React, { FunctionComponent } from "react";
import styled from "@emotion/styled";
import Link from "next/link";
import theme from '../../server/next/styles/theme';

interface BlogItemProps {
  href: string;
  title: string;
  description?: string; //필수?
  dateTime: string;
}

const Container = styled.div`
  padding: 16px 0;
  
  & > a {
    display: block;
  }
`;

const Title = styled.strong`
  display: block;
  ${theme.fonts.title2};
`;

const Description = styled.p`
  margin-top: 12px;
  ${theme.fonts.title6}
`;

const Time = styled.time`
  display: block;
  margin-top: 10px;
  text-align: right;
  color: ${theme.colors.grey700};
  ${theme.fonts.body2Regular}
`;

export const BlogItem: FunctionComponent<BlogItemProps> = ({ href, dateTime, title, description}) => {
  return (
    <Container>
      <Link href={href}>
        <a>
          <Title>{title}</Title>
          <Description>{description}</Description>
          <Time dateTime={dateTime}>{dateTime}</Time>
        </a>
      </Link>
    </Container>
  );
};
