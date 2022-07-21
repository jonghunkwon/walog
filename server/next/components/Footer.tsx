import React, { FunctionComponent } from "react";
import styled from "@emotion/styled";

const Container = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 12px;
`;

const Navbar: FunctionComponent = () => {
  return (
    <Container>
      Thank You for Visiting Wadiz Blog,
      <br />
      Powered By NextJs.
    </Container>
  );
};

export default Navbar;
