import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import NativeSelect from "@material-ui/core/NativeSelect";

const SearchBar = () => (
  <form className="container valign-wrapper" action="/" method="get">
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
