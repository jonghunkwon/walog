import React, { FunctionComponent } from "react";
import styled from "@emotion/styled";

interface SkipNavigationProps {
  contentId: string,
  contentText: string,
}

const Container = styled.a`
  position: absolute;
  color: rgba(255, 255, 255, 0);
  z-index: -1;

  &:focus {
    padding: 2px 8px;
    border-radius: 16px;
    background-color: ${(props) => props.theme.colors.primary200};
    color: ${(props) => props.theme.colors.grey700};
    z-index: 1;
  }
`;

const SkipNavigation: FunctionComponent<SkipNavigationProps> = ({
  contentId,
  contentText,
}) => {
  return (
    <Container href={`#${contentId}`}>skip {contentText}</Container>
  );
};

export default SkipNavigation;
