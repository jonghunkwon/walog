import React, { FunctionComponent } from "react";
import styled from "@emotion/styled";
import Link from "next/link";

const Container = styled.header`
  position: sticky;
  top: 0;
`;

const Inner = styled.div`
  display: flex;
  position: relative;
  max-width: 1400px;
  margin: 0 auto;
  padding: 16px;
  align-items: center;
  box-sizing: content-box;
`;

const Logo = styled.h1`
  & > a {
    display: block;
    ${props => props.theme.fonts.title3}
  }
`;

const SkipNavigation = styled.a`
  margin-left: 10px;
  color: rgba(255, 255, 255, 0);

  &:focus {
    padding: 2px 8px;
    border-radius: 16px;
    background-color: ${props => props.theme.colors.primary200};
    color: ${props => props.theme.colors.grey700};
  }
`;

const Header = () => (
  <Container>
    <Inner>
      <Logo>
        <Link href="/">
          <a>
            WALOG
          </a>
        </Link>
      </Logo>
      <SkipNavigation href="#mainContent">skip navition</SkipNavigation>
    </Inner>
  </Container>
);

export default Header;
