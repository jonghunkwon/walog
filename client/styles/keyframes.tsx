import { keyframes } from '@emotion/react'

const bounce = keyframes`
  0% {
    -webkit-transform: scaleX(-1) rotate(12deg) translate(0 ,0);
    transform: scaleX(-1) rotate(12deg) translate(0 ,0);
  }
  30% {
    -webkit-transform: scaleX(-1) rotate(12deg) translate(1vw ,-5vw);
    transform: scaleX(-1) rotate(12deg) translate(1vw ,-5vw);
  }
  60% {
    transform: -webkit-scaleX(-1) rotate(12deg) translate(0 ,2vw);
    transform: scaleX(-1) rotate(12deg) translate(0 ,2vw);
  }
  90% {
    -webkit-transform: scaleX(-1) rotate(12deg) translate(-1vw ,-2vw);
    transform: scaleX(-1) rotate(12deg) translate(-1vw ,-2vw);
  }
  100% {
    -webkit-transform: scaleX(-1) rotate(12deg) translate(0 ,0);
    transform: scaleX(-1) rotate(12deg) translate(0 ,0);
  }
`;

const move = keyframes`
  0% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
  100% {
    -webkit-transform: translateX(1.6vw);
    transform: translateX(1.6vw);
  }
`;

const rotate = keyframes`
  to { transform: rotate(360deg)};
`;

const interaction = {
  bounce,
  rotate,
  move,
}

export default interaction;

