import React, { FunctionComponent, ReactNode } from "react";
import styled from "@emotion/styled";
import Header from "./Header";
import KeyVisual from './KeyVisual';

interface LayoutProps {
  children: ReactNode;
}

const Inner = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 16px;
  box-sizing: content-box;
`;

const Layout: FunctionComponent<LayoutProps> = ({ children }) => {

  return (
    <div>
      <Header />
      <main id="mainContent">
        <Inner>
          {children}
        </Inner>
      </main>
    </div>
  );
};

export default Layout;
