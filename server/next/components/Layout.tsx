import React, { FunctionComponent, ReactNode } from "react";
import styled from "@emotion/styled";
import Navbar from "./NavBar";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  max-width: 1024px;
  margin: 0 auto;
`;

const Content = styled.main`
  flex: 1;
  margin-top: 64px;
`;

const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <Container>
      <Navbar />
      <Content>{children}</Content>
      <Footer />
    </Container>
  );
};

export default Layout;
