import React, { FunctionComponent } from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  height: 500px;
  background: url('https://static.wixstatic.com/media/4e0c34_9877d0da66514d878e624e6bd45dafe6~mv2.jpg/v1/fill/w_3000,h_955,al_c,q_90,enc_auto/4e0c34_9877d0da66514d878e624e6bd45dafe6~mv2.jpg') no-repeat 50% 75%;
  background-size: cover;
`;

const KeyVisual = () => (
  <Container />
);

export default KeyVisual;
