import React, { FunctionComponent } from "react";
import styled from "@emotion/styled";
import Link from "next/link";
import theme from '../../server/next/styles/theme';

const Container = styled.header`
  position: sticky;
  top: 0;
`;

const Inner = styled.div`
  display: flex;
  max-width: 1400px;
  margin: 0 auto;
  padding: 16px;
  align-items: center;
  box-sizing: content-box;
`;

const Logo = styled.h1`
  & > a {
    display: block;
    ${theme.fonts.title3}
  }
`;

export const Header = () => (
  <Container>
    <Inner>
      <Logo>
        <Link href="/">
          <a>
            WALOG
          </a>
        </Link>
      </Logo>
    </Inner>
  </Container>
);
