import React from "react";
import styled from "styled-components";
import Navbar from "../Navbar";
import headerBackground from "../../img/abaya7.jpg";
const HeaderWrapper = styled.header`
  position: relative;
  background: url(${headerBackground}) no-repeat;
  background-size: cover;
  height: 50vh;
`;
const Header = () => {
  return (
    <HeaderWrapper>
      <Navbar />
    </HeaderWrapper>
  );
};

export default Header;
