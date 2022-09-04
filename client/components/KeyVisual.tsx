import React, { FunctionComponent } from "react";
import interaction from "../styles/keyframes";
import styled from "@emotion/styled";

const Container = styled.div`
  overflow: hidden;
  position: relative;
  height: 450px;
  background-color: ${(props) => props.theme.colors.primary800};
  text-align: center;

  @media (min-width: 1080px) {
    height: 600px;
    text-align: left;
  }
`;

const Wave = styled.div`
  position: absolute;
  top: 70%;
  left: 50%;
  width: 250vw;
  height: 250vw;
  margin-left: -125vw;
  transform-origin: 50% 50%;
  background-color: transparent;
  border-radius: 38% 42%;
  box-shadow: inset 0 0 10vw ${(props) => props.theme.colors.primary600};
  animation: ${interaction.rotate} 18s infinite linear;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 250vw;
    height: 250vw;
    margin-left: -125vw;
    transform-origin: 50% 50%;
    background-color: transparent;
    border-radius: 38% 42%;
    animation: ${interaction.rotate} 22s infinite linear;
  }

  &::before {
    width: 105%;
    height: 95%;
    margin-top: -125vw;
    transform-origin: 49% 51%;
    border-radius: 40% 38%;
    box-shadow: inset 3vw 0 10vw ${(props) => props.theme.colors.primary600};
    animation: ${interaction.rotate} 19s infinite linear;
  }

  &::after {
    width: 102%;
    height: 98%;
    margin-top: -125vw;
    transform-origin: 51% 49%;
    border-radius: 48% 42%;
    box-shadow: inset 0 0 10vw ${(props) => props.theme.colors.primary600};
    animation: ${interaction.rotate} 16s infinite linear;
  }
`;

const Inner = styled.div`
  position: relative;
  display: flex;
  max-width: 1080px;
  height: 100%;
  margin: 0 auto;
  padding: 20px;
  justify-content: center;

  @media (min-width: 1080px) {
    display: block;
    padding: 125px 0 16px;
  }
`

const Title = styled.h2`
  position: relative;
  color: ${(props) => props.theme.colors.grey800};
  ${(props) => props.theme.fonts.title1};
  text-shadow: 0 0 1vw #8be4e4, 0 0 3vw #8be4e4, 0 0 10vw #8be4e4, 0 0 10vw #8be4e4, 0 0 .4vw #00c4c4, .5vw .5vw .1vw #00b2b2;
  z-index: 1;

  @media (min-width: 1080px) {
    font-size: 70px;
    line-height: 80px;
  }
`;

// TODO: will-change
const ImageContainer = styled.div`
  position: absolute;
  bottom: 3vw;
  animation: ${interaction.bounce} 2.8s linear reverse infinite;

  @media (min-width: 1080px) {
    top: 10vw;
    right: 0;
    bottom: auto;
  }
`;

const ImageSurfingZingugi = styled.div`
  position: relative;
  width: 250px;
  height: 250px;
  background: url('/assets/surfing.gif') no-repeat 50% 50%;
  background-size: 100% 100%;
  z-index: 1;

  @media (min-width: 1080px) {
    width: 375px;
    height: 375px;
  }
`;

const ImageSurfingBoard = styled.div`
  position: absolute;
  bottom: 13px;
  width: 280px;
  height: 125px;
  background: url('/assets/surfboard.svg') no-repeat 50% 50%;
  animation: ${interaction.move} 1.4s linear alternate-reverse infinite;
  background-size: 100% 100%;

  @media (min-width: 1080px) {
    bottom: -20px;
    width: 375px;
    height: 230px;
  }
`;

const KeyVisual = () => (
  <Container>
    <Wave />
    <Inner>
      <Title>wadiz<br />Tech Blog</Title>
      <ImageContainer>
        <ImageSurfingZingugi />
        <ImageSurfingBoard />
      </ImageContainer>
    </Inner>
  </Container>
);

export default KeyVisual;
