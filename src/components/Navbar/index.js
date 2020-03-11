import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
const NavbarWrapper = styled.nav`
  position: fixed;
  right: 0;
  top: 0;
  z-index: 999;
  .burger-menu {
    position: relative;
    margin: 1rem;
    font-size: 1.2rem;
    color: #d8a890;
    z-index: 999;
  }
`;

const NavOverlay = styled.div`
  position: fixed;
  top: 0;
  left: ${props => (props.revealed ? "0" : "-100%")};
  width: 100%;
  height: 100vh;
  background: #8e5368;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.4s ease-in;
  > ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    > li {
      margin: 1rem 0;
    }
    > li > a {
      color: #fbfbfb;
      text-decoration: none;
      font-size: 1.5rem;
    }
  }
`;

const Navbar = () => {
  const [overlay, setOverlay] = useState(false);
  return (
    <NavbarWrapper>
      <FontAwesomeIcon
        icon={faBars}
        className="burger-menu"
        onClick={() => setOverlay(!overlay)}
      />
      <NavOverlay revealed={overlay}>
        <ul>
          <li>
            <a href="#deadsies">HOME</a>
          </li>
          <li>
            <a href="#deadsies">CONTACT</a>
          </li>
          <li>
            <a href="#deadsies">LOCATION</a>
          </li>
        </ul>
      </NavOverlay>
    </NavbarWrapper>
  );
};

export default Navbar;
