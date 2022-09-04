import React, { FunctionComponent } from "react";
import styled from "@emotion/styled";
interface PostTitleProps {
  title: string;
  dateTime: string;
}
  
const Container = styled.div`
  margin-bottom: 16px;
  padding-bottom: 16px;
  border-bottom: 1px solid ${(props) => props.theme.colors.grey300};
`;

const Title = styled.h3`
  /* ${(props) => props.theme.fonts.title1}; */
  font-size: 42px;
  line-height: 52px;
`;

const Time = styled.time`
  display: block;
  padding-top: 14px;
  color: ${(props) => props.theme.colors.grey700};
  ${(props) => props.theme.fonts.body3Regular};
  text-align: right;
`;

const PostTitle: FunctionComponent<PostTitleProps> = ({ title, dateTime}) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Time dateTime={dateTime}>{dateTime}</Time>
    </Container>
  );
};

export default PostTitle;
