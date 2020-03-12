import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useSpring, animated, config } from "react-spring";
import { NavLink } from "react-router-dom";
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

const NavOverlay = styled(animated.div)`
  position: fixed;
  top: 0;
  left:0;
  /* left: ${props => (props.revealed ? "0" : "-100%")}; */
  width: 100%;
  height: 100vh;
  background: #8e5368;
  display: flex;
  justify-content: center;
  align-items: center;
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

  const slideOverlay = useSpring({
    transform: overlay ? "translateX(0)" : "translateX(-100%)",
    config: config.default
  });
  return (
    <NavbarWrapper>
      <FontAwesomeIcon
        icon={faBars}
        className="burger-menu"
        onClick={() => setOverlay(!overlay)}
      />
      <NavOverlay style={slideOverlay}>
        <ul>
          <li>
            <NavLink exact to="/">
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/">
              CONTACT
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/">
              LOCATION
            </NavLink>
          </li>
        </ul>
      </NavOverlay>
    </NavbarWrapper>
  );
};

export default Navbar;
