import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Navbar from "../Navbar";
import headerBackground from "../../img/abaya7.jpg";
const HeaderWrapper = styled.header`
  position: relative;
  background: url(${headerBackground}) no-repeat;
  background-size: cover;
  height: ${props => props.headerHeight};
  transition: 0.7s ease-in-out;
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
    <HeaderWrapper headerHeight={height ? "30vh" : "50vh"}>
      <Navbar />
    </HeaderWrapper>
  );
};

export default Header;
