import React, { FunctionComponent, ReactNode } from "react";
import { useRouter } from 'next/router';
import styled from "@emotion/styled";
import Header from "./Header";
import KeyVisual from './KeyVisual';

interface LayoutProps {
  children: ReactNode;
}

const Inner = styled.div`
  max-width: 1080px;
  margin: 0 auto;
  padding: 50px 16px 100px;
  box-sizing: content-box;
`;

const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
  const router = useRouter();

  return (
    <div>
      <Header />
      <main>
        { router.pathname === '/' &&  <KeyVisual /> }
        <Inner id="content">
          {children}
        </Inner>
      </main>
    </div>
  );
};

export default Layout;
