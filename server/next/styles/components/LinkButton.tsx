import React, { FunctionComponent, ReactNode } from "react";
import styled from "@emotion/styled";

interface LinkButtonProps {
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children: ReactNode;
}

const Container = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;

  &:hover {
    background: gray;
    opacity: 0.9;
  }
`;

const LinkButton: FunctionComponent<LinkButtonProps> = ({
  handleClick,
  children,
}) => {
  return <Container onClick={handleClick}>{children}</Container>;
};

export default LinkButton;
