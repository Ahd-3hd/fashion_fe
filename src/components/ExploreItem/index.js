import React from "react";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";

const ExploreItemWrapper = styled(animated.main)`
  position: relative;
  width: 100%;
  height: 30vh;
  background: url(${props => props.media}) no-repeat;
  background-size: cover;
  background-position: center center;
  box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.3);
  border-radius: 0.3rem;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, #523448 0%, rgba(82, 52, 72, 0) 71.87%);
    transform: rotateX(180deg);
  }
`;
const ExploreItem = props => {
  return <ExploreItemWrapper media={props.media}></ExploreItemWrapper>;
};

export default ExploreItem;
