import React from "react";
import { NavLink as RouterNavLink } from "react-router-dom";
import styled from "styled-components";
import SearchBar from "./SearchBar"

export default function Landing() {
  return (
    <div
      style={{ height: "75vh", backgroundColor: "rgba(255, 0, 0, 0.5)" }}
      className="container valign-wrapper"
    >
      <SearchBar />
      
    </div>
  );
}
