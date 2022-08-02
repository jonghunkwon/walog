import React, { FunctionComponent } from "react";
import styled from "@emotion/styled";
import theme from '../../server/next/styles/theme';

interface BlogTitleProps {
  title: string;
  dateTime: string;
}
  
const Container = styled.div``;

const Title = styled.h3`
  padding: 16px 0;
  border-bottom: 1px solid #dde2e6;
  ${theme.fonts.title2};
`;

const Time = styled.time`
  display: block;
  padding: 14px 0;
  color: ${theme.colors.grey700};
  ${theme.fonts.body2Regular}
`;

const BlogTitle: FunctionComponent<BlogTitleProps> = ({ title, dateTime}) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Time dateTime={dateTime}>{dateTime}</Time>
    </Container>
  );
};

export default BlogTitle;
