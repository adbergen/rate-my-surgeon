import React from "react";
import { NavLink as RouterNavLink } from "react-router-dom";
import styled from "styled-components";
import SearchBar from "./SearchBar"
import Background from "../assets/surgeonbackground.png"

export default function Landing() {
  return (
    <>
      <SearchBar />
      <img
           className="container valign-wrapper"     
                style={{
                  width: "50%",
                  borderWidth: 1,
                  borderColor: "black",
                  justifyContent: "center"
                }}
                src={Background}
              />
      
    </>
  );
}
