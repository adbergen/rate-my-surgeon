import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../index";
import { NavLink as RouterNavLink } from "react-router-dom";

export default function Nav() {
  const { dispatch } = useContext(AppContext);

  const toggleTheme = () => {
    dispatch({ type: "toggleTheme" });
  };

  return (
    <NavBar>
      <NavMenu>
        <NavLink
          as={RouterNavLink}
          to="/"
          exact
          activeClassName="router-link-exact-active"
          style={{ fontFamily: "monospace" }}
        >
          Rate My Surgeon
        </NavLink>
      </NavMenu>
      <NavToggle onClick={toggleTheme}>Toggle theme</NavToggle>
      <NavLink
              as={RouterNavLink}
              to="/login"
              exact
              activeClassName="router-link-exact-active"
              style={{
                width: "140px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                textAlign: "right"
              }}
              className="ml-auto"
              
            >
              Login
            </NavLink>
      <NavLink
              as={RouterNavLink}
              to="/register"
              exact
              activeClassName="router-link-exact-active"
              style={{
                width: "140px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                textAlign: "right",
                marginLeft: "0"
              }}
              
              
            >
              Sign Up
            </NavLink>
       
    </NavBar>
  );
}

const NavBar = styled.div`
  display: flex;
  width: 100%;
  background: ${(props) => props.theme.navColor};
  min-height: 50px;
  font-size: 1.2rem;
  font-weight: 500;
  color: ${(props) => props.theme.textColor};
  list-style: none;
`;

const NavMenu = styled.div`
  display: flex;
`;

const NavLink = styled.div`
  display: block;
  padding: 1rem;
  transition: 250ms ease background-color;
  color: white;
  &:hover {
    cursor: pointer;
    background-color: skyblue;
  }
`;

const NavToggle = styled(NavLink)`
  text-decoration: underline;
`;
