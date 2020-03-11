import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Navbar from "../Navbar";
import headerBackground from "../../img/abaya7.jpg";
const HeaderWrapper = styled.header`
  position: relative;
  height: ${props => props.headerHeight};
  transition: 0.7s ease-in-out;
  height: ${props => (props.headerHeight ? "30vh" : "50vh")};
  display: flex;
  flex-basis: 1;
  > .right {
    background: url(${headerBackground}) no-repeat;
    background-size: cover;
    height: 100%;
    width: 100%;
    flex: 1;
  }
  > .left {
    display: none;
    flex: 1;
  }
  @media only screen and (min-width: 600px) {
    height: ${props => (props.headerHeight ? "50vh" : "100vh")};
    > .left {
      display: block;
    }
  }
`;
const Header = () => {
  const [height, setHeight] = useState(false);

  //Handle scroll height value
  useEffect(() => {
    window.addEventListener("scroll", e => {
      window.pageYOffset >= 30 ? setHeight(true) : setHeight(false);
    });
  }, []);

  return (
    <HeaderWrapper headerHeight={height}>
      <Navbar />
      <div className="left"></div>
      <div className="right"></div>
    </HeaderWrapper>
  );
};

export default Header;
