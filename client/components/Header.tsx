import React, { FunctionComponent } from "react";
import Link from "next/link";
import SkipNavigation from "./SkipNavigation";
import styled from "@emotion/styled";

const Container = styled.header`
  position: sticky;
  top: 0;
  background-color: ${(props) => props.theme.colors.white100};
  z-index: 10;
`;

const Inner = styled.div`
  display: flex;
  position: relative;
  max-width: 1080px;
  margin: 0 auto;
  padding: 16px;
  align-items: center;
  box-sizing: content-box;
`;

const Logo = styled.h1`
  & > a {
    display: block;
    ${(props) => props.theme.fonts.title3}
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
      <SkipNavigation contentId="mainContent" contentText="navition" />
    </Inner>
  </Container>
);

export default Header;
