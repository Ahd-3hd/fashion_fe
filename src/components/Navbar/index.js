import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
const NavbarWrapper = styled.nav`
  position: fixed;
  right: 0;
  top: 0;
  .burger-menu {
    margin: 1rem;
    font-size: 1.2rem;
    color: #523448;
  }
`;

const Navbar = () => {
  return (
    <NavbarWrapper>
      <FontAwesomeIcon icon={faBars} className="burger-menu" />
    </NavbarWrapper>
  );
};

export default Navbar;
