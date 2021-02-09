import React from "react";

const SearchBar = () => (
  <form style={{ marginTop: "10%", width: "50%" }} className="container valign-wrapper" action="/" method="get">
      <label htmlFor="header-search">
          <span className="visually-hidden">Enter Your Surgeon to Get Started</span>
      </label>
      <input
          type="text"
          id="header-search"
          placeholder="Your Surgeon"
          name="s" 
      />
      <button type="submit">Search</button>
  </form>
);

export default SearchBar;
