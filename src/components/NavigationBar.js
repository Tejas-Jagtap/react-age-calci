import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
// import About from "./About";
// import Contact from "./Contact";

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  color: #333;
  padding: 1rem;
  position: sticky;
  top: 0;
  z-index: 999;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const NavbarBrand = styled.a`
  font-weight: bold;
  font-size: 1.5rem;
  color: #333;
  text-decoration: none;
`;

const NavbarToggle = styled.button`
  display: none;
  background-color: transparent;
  border: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const NavbarMenu = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  list-style-type: none;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`;

const NavbarMenuItem = styled.li`
  margin: 0 1rem;

  @media (max-width: 768px) {
    margin: 1rem 0;
    width: 100%;
    text-align: center;
  }
`;

const NavbarLink = styled.a`
  color: #333;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

function NavigationBar() {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <NavbarContainer>
      <NavbarBrand href="/">AGE CLACULATOR</NavbarBrand>
      <NavbarToggle onClick={handleToggle}>
        <span>&#9776;</span>
      </NavbarToggle>
      <NavbarMenu style={{ display: expanded ? "flex" : "" }}>
        <NavbarMenuItem>
          <NavbarLink href="/">
            <Link to="/">Home</Link>
          </NavbarLink>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <NavbarLink href="about">
            <Link to="/about">About</Link>
          </NavbarLink>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <NavbarLink href="#contact">
            <Link to="/contact">Contact</Link>
          </NavbarLink>
        </NavbarMenuItem>
      </NavbarMenu>
    </NavbarContainer>
  );
}

export default NavigationBar;
